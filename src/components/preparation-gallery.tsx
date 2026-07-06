"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react"
import { cn } from "@/lib/utils"

type PreparationGalleryProps = Readonly<{
  photos: string[]
}>

const collageLayouts = [
  "col-span-2 row-span-[22] sm:col-span-2 sm:row-span-[26] lg:col-span-3 lg:row-span-[34] rounded-[2rem]",
  "col-span-1 row-span-[18] sm:col-span-2 sm:row-span-[20] lg:col-span-2 lg:row-span-[22] rounded-full",
  "col-span-1 row-span-[26] sm:col-span-2 sm:row-span-[30] lg:col-span-1 lg:row-span-[34] rounded-[999px]",
  "col-span-2 row-span-[18] sm:col-span-2 sm:row-span-[22] lg:col-span-2 lg:row-span-[24] rounded-[1.25rem]",
  "col-span-1 row-span-[20] sm:col-span-1 sm:row-span-[24] lg:col-span-2 lg:row-span-[32] rounded-t-[3rem] rounded-b-[1.25rem]",
  "col-span-1 row-span-[16] sm:col-span-1 sm:row-span-[18] lg:col-span-1 lg:row-span-[20] rounded-[1.5rem]",
  "col-span-2 row-span-[24] sm:col-span-3 sm:row-span-[28] lg:col-span-3 lg:row-span-[30] rounded-l-[4rem] rounded-r-[1.5rem]",
  "col-span-1 row-span-[18] sm:col-span-1 sm:row-span-[22] lg:col-span-2 lg:row-span-[26] rounded-[1.25rem]",
  "col-span-1 row-span-[24] sm:col-span-2 sm:row-span-[28] lg:col-span-2 lg:row-span-[36] rounded-tr-[4rem] rounded-bl-[4rem] rounded-tl-[1.25rem] rounded-br-[1.25rem]",
  "col-span-2 row-span-[20] sm:col-span-2 sm:row-span-[24] lg:col-span-4 lg:row-span-[28] rounded-[2.5rem]",
]

const decorativeFrames = [
  "after:absolute after:-inset-1 after:-z-10 after:rounded-[inherit] after:bg-[#D4AF62]/10",
  "before:absolute before:-inset-1 before:-z-10 before:rounded-[inherit] before:border before:border-[#D4AF62]/30",
  "",
  "after:absolute after:-inset-2 after:-z-10 after:rounded-[inherit] after:bg-stone-100",
]

export function PreparationGallery({ photos }: PreparationGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const close = useCallback(() => setSelectedIndex(null), [])

  const goTo = useCallback(
    (direction: "prev" | "next") => {
      if (selectedIndex === null) return
      setSelectedIndex((current) => {
        if (current === null) return null
        if (direction === "prev") {
          return current === 0 ? photos.length - 1 : current - 1
        }
        return current === photos.length - 1 ? 0 : current + 1
      })
    },
    [selectedIndex, photos.length]
  )

  useEffect(() => {
    if (selectedIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowLeft") goTo("prev")
      if (e.key === "ArrowRight") goTo("next")
    }

    document.body.style.overflow = "hidden"
    globalThis.addEventListener("keydown", handleKeyDown)
    return () => {
      document.body.style.overflow = ""
      globalThis.removeEventListener("keydown", handleKeyDown)
    }
  }, [selectedIndex, close, goTo])

  if (photos.length === 0) {
    return (
      <p className="text-center text-stone-400 text-sm py-16">
        Aucune photo pour le moment.
      </p>
    )
  }

  return (
    <>
      <div className="relative">
        <div className="absolute -left-6 top-14 hidden h-28 w-28 rounded-full border border-[#D4AF62]/25 sm:block" />
        <div className="absolute -right-6 bottom-20 hidden h-36 w-36 rounded-full bg-[#D4AF62]/10 blur-2xl sm:block" />

        <div className="grid auto-rows-[8px] grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-6 lg:auto-rows-[9px]">
          {photos.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className={cn(
                "group relative isolate overflow-hidden bg-stone-100",
                "ring-1 ring-white/80 shadow-[0_18px_45px_rgba(68,64,60,0.13)]",
                "transition-all duration-500 hover:z-10 hover:-translate-y-1 hover:rotate-[0.4deg] hover:shadow-[0_24px_60px_rgba(68,64,60,0.22)] hover:ring-[#D4AF62]/70",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF62]",
                collageLayouts[index % collageLayouts.length],
                decorativeFrames[index % decorativeFrames.length]
              )}
            >
              <Image
                src={src}
                alt={`Préparatif du mariage ${index + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 35vw, 22vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/45 via-transparent to-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-3 right-3 flex items-center justify-center size-8 rounded-full bg-white/90 text-stone-600 opacity-0 shadow-sm transition-all duration-300 scale-75 group-hover:scale-100 group-hover:opacity-100">
                <ZoomIn className="size-3.5" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <dialog
          open
          className="fixed inset-0 z-[100] m-0 flex h-dvh w-dvw max-w-none items-center justify-center bg-stone-900/90 p-0 backdrop:bg-transparent backdrop:backdrop-blur-sm"
          aria-label="Visionneuse photo"
        >
          <button
            type="button"
            onClick={close}
            className="absolute inset-0 cursor-default"
            aria-label="Fermer la visionneuse"
          />

          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-4 z-10 flex items-center justify-center size-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Fermer"
          >
            <X className="size-5" />
          </button>

          <p className="absolute top-5 left-1/2 -translate-x-1/2 text-white/70 text-sm tracking-widest font-[family-name:var(--font-cormorant)]">
            {selectedIndex + 1} / {photos.length}
          </p>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              goTo("prev")
            }}
            className="absolute left-3 sm:left-6 z-10 flex items-center justify-center size-11 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Photo précédente"
          >
            <ChevronLeft className="size-6" />
          </button>

          <button
            type="button"
            className="relative mx-14 max-h-[85vh] max-w-[90vw] cursor-default sm:mx-20"
            onClick={(e) => e.stopPropagation()}
            aria-label="Photo sélectionnée"
          >
            <Image
              src={photos[selectedIndex]}
              alt={`Préparatif du mariage ${selectedIndex + 1}`}
              width={1200}
              height={1600}
              className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
              priority
            />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              goTo("next")
            }}
            className="absolute right-3 sm:right-6 z-10 flex items-center justify-center size-11 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Photo suivante"
          >
            <ChevronRight className="size-6" />
          </button>
        </dialog>
      )}
    </>
  )
}
