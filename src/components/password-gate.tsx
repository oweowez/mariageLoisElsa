"use client"

import { type SyntheticEvent, useState } from "react"
import { Lock } from "lucide-react"

export function PasswordGate({ children }: { readonly children: React.ReactNode }) {
  const [input, setInput] = useState("")
  const [unlocked, setUnlocked] = useState(false)
  const [error, setError] = useState(false)

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault()
    if (input === "Tonkaleplusbeau") {
      setUnlocked(true)
      setError(false)
    } else {
      setError(true)
      setInput("")
    }
  }

  if (unlocked) return <>{children}</>

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24">
      <div className="flex items-center justify-center size-12 rounded-full bg-stone-100 mb-6">
        <Lock className="size-5 text-stone-500" />
      </div>
      <p className="text-xs uppercase tracking-[0.25em] text-stone-400 mb-3 text-center">Contenu réservé</p>
      <h1 className="font-serif text-3xl sm:text-4xl font-light text-foreground mb-3 text-center">
        Accès protégé 🔐
      </h1>
      <div className="w-12 h-px bg-stone-300 mb-8" />
      <p className="text-stone-500 text-base leading-loose text-center mb-8 max-w-sm">
        Cette page est réservée aux invités qui ont reçu le mot de passe.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 w-full max-w-xs">
        <input
          type="password"
          value={input}
          onChange={(e) => { setInput(e.target.value); setError(false) }}
          placeholder="Mot de passe"
          className={`w-full rounded-full border px-5 py-3 text-sm text-stone-700 outline-none transition-colors focus:ring-2 focus:ring-stone-300 ${
            error ? "border-red-300 bg-red-50" : "border-stone-200 bg-white"
          }`}
          autoFocus
        />
        {error && (
          <p className="text-red-400 text-xs">Mot de passe incorrect, réessayez.</p>
        )}
        <button
          type="submit"
          className="w-full rounded-full bg-stone-800 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-700"
        >
          Accéder
        </button>
      </form>
    </main>
  )
}
