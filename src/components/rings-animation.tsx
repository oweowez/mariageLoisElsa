"use client"

import { useEffect, useRef } from "react"

type RopeKF = [number, number, number, number, number]

// Keyframes de la corde pendant le balancement (traîne légère)
const ROPE_SWING_KF: RopeKF[] = [
  [0,    50, 39, 50, 82],
  [0.2,  56, 38, 59, 82],
  [0.38, 44, 38, 42, 82],
  [0.52, 52, 39, 52, 82],
  [0.65, 50, 39, 50, 82],
  [1,    50, 39, 50, 82],
]

const THREAD_LEN     = 118   // longueur du fil en SVG units
const UNROLL_MS      = 900   // durée du déroulement
const SWING_MS       = 2500  // durée d'un balancement
const REPEAT_MS      = 10_000 // intervalle entre balancements

function easeOut(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

function ropePathAt(t: number, kf: RopeKF[]): string {
  const last = kf.at(-1)
  if (!last || t >= last[0]) {
    const [, cx1, cy1, cx2, cy2] = last ?? [0, 50, 39, 50, 82]
    return `M 50 0 C ${cx1} ${cy1} ${cx2} ${cy2} 50 ${THREAD_LEN}`
  }
  let i = 0
  while (i < kf.length - 1 && kf[i + 1][0] <= t) i++
  const [t0, cx10, cy10, cx20, cy20] = kf[i]
  const [t1, cx11, cy11, cx21, cy21] = kf[i + 1]
  const p = easeInOut((t - t0) / (t1 - t0))
  return `M 50 0 C ${lerp(cx10, cx11, p).toFixed(1)} ${lerp(cy10, cy11, p).toFixed(1)} ${lerp(cx20, cx21, p).toFixed(1)} ${lerp(cy20, cy21, p).toFixed(1)} 50 ${THREAD_LEN}`
}

function animateRope(rope: SVGPathElement, kf: RopeKF[], duration: number): () => void {
  let startTime: number | null = null
  let rafId: number
  function tick(now: number) {
    startTime ??= now
    const t = Math.min((now - startTime) / duration, 1)
    rope.setAttribute("d", ropePathAt(t, kf))
    if (t < 1) rafId = requestAnimationFrame(tick)
  }
  rafId = requestAnimationFrame(tick)
  return () => cancelAnimationFrame(rafId)
}

export function RingsAnimation() {
  const ropeRef      = useRef<SVGPathElement>(null)
  const ringsGroupRef = useRef<SVGGElement>(null)
  const pendulumRef  = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const rope      = ropeRef.current
    const ringsGrp  = ringsGroupRef.current
    const pendulum  = pendulumRef.current
    if (!rope || !ringsGrp || !pendulum) return

    // État initial : fil invisible, bagues à y=0 (derrière la navbar)
    const RINGS_CY = 142  // cy des bagues dans le SVG
    rope.style.strokeDasharray  = `${THREAD_LEN}`
    rope.style.strokeDashoffset = `${THREAD_LEN}`
    ringsGrp.setAttribute("transform", `translate(0, ${-RINGS_CY})`)

    let rafId: number
    let cancelSwingRope: (() => void) | null = null
    let intervalId: ReturnType<typeof setInterval> | undefined

    // ── Phase 1 : déroulement ──
    let unrollStart: number | null = null
    let startTimeout: ReturnType<typeof setTimeout>

    function tickUnroll(now: number) {
      unrollStart ??= now
      const raw = Math.min((now - unrollStart) / UNROLL_MS, 1)
      const p   = easeOut(raw)

      rope.style.strokeDashoffset = `${THREAD_LEN * (1 - p)}`
      // les bagues descendent de y=0 jusqu'à leur position naturelle
      ringsGrp.setAttribute("transform", `translate(0, ${RINGS_CY * (p - 1)})`)

      if (raw < 1) {
        rafId = requestAnimationFrame(tickUnroll)
      } else {
        // Déroulement terminé — préparer le balancement
        rope.style.strokeDasharray  = ""
        rope.style.strokeDashoffset = ""
        rope.setAttribute("d", `M 50 0 C 50 39 50 82 50 ${THREAD_LEN}`)
        ringsGrp.removeAttribute("transform")
        startSwing()
      }
    }

    startTimeout = setTimeout(() => {
      rafId = requestAnimationFrame(tickUnroll)
    }, 1000)

    // ── Phase 2 : balancement (immédiat puis toutes les REPEAT_MS) ──
    function triggerSwing() {
      cancelSwingRope?.()
      cancelSwingRope = animateRope(rope, ROPE_SWING_KF, SWING_MS)
      pendulum.style.animation = "none"
      pendulum.getClientRects()   // force reflow
      pendulum.style.animation = `rings-swing-only ${SWING_MS}ms cubic-bezier(0.33,1,0.68,1) forwards`
    }

    function startSwing() {
      triggerSwing()
      intervalId = setInterval(triggerSwing, REPEAT_MS)
    }

    return () => {
      clearTimeout(startTimeout)
      cancelAnimationFrame(rafId)
      cancelSwingRope?.()
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div className="absolute inset-x-0 flex justify-center pointer-events-none z-10" style={{ top: "-40px" }}>
      <div ref={pendulumRef} style={{ transformOrigin: "50% 0%" }}>
        <svg width="100" height="215" viewBox="0 0 100 215" fill="none">
          <defs>
            <clipPath id="ringLeftClip">
              <rect x="0" y="0" width="50" height="215" />
            </clipPath>
            <clipPath id="ringRightClip">
              <rect x="50" y="0" width="50" height="215" />
            </clipPath>
          </defs>

          {/* Fil */}
          <path
            ref={ropeRef}
            d={`M 50 0 L 50 ${THREAD_LEN}`}
            stroke="#C8B49A"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
          />

          {/* Bagues — translateY animé pendant le déroulement */}
          <g ref={ringsGroupRef}>
            <ellipse cx="62" cy="142" rx="28" ry="18"
              transform="rotate(30, 62, 142)"
              stroke="#B8913A" strokeWidth="6.5"
              clipPath="url(#ringLeftClip)" />
            <ellipse cx="38" cy="142" rx="29" ry="14"
              transform="rotate(-12, 38, 142)"
              stroke="#D4AF62" strokeWidth="6.5" />
            <ellipse cx="62" cy="142" rx="28" ry="18"
              transform="rotate(30, 62, 142)"
              stroke="#B8913A" strokeWidth="6.5"
              clipPath="url(#ringRightClip)" />
          </g>
        </svg>
      </div>
    </div>
  )
}
