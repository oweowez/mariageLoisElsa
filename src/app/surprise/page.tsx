import Image from "next/image"
import Link from "next/link"
import { Sparkles } from "lucide-react"
import { connection } from "next/server"
import { isSurpriseRevealed } from "@/lib/quiz/reveal"

export default async function SurprisePage() {
  // Rendu dynamique : l'heure est évaluée à chaque visite, côté serveur
  await connection()

  if (!isSurpriseRevealed()) {
    return (
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">

        <p className="text-xs uppercase tracking-[0.25em] text-stone-400 mb-3">À venir</p>
        <h1 className="font-serif text-4xl sm:text-5xl font-light text-foreground leading-snug mb-5 max-w-xl">
          Une surprise se prépare&nbsp;✨
        </h1>
        <div className="w-12 h-px bg-stone-300 mb-8" />
        <p className="text-stone-500 text-base sm:text-lg leading-loose max-w-sm mb-12">
          Elle vous sera dévoilée le jour J.
        </p>

        <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/surprise.png"
            alt="La surprise se prépare"
            width={400}
            height={400}
            className="w-full h-auto block object-cover"
          />
        </div>

      </main>
    )
  }

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">

      <p className="text-xs uppercase tracking-[0.25em] text-stone-400 mb-3">Le grand quiz</p>
      <h1 className="font-serif text-4xl sm:text-5xl font-light text-foreground leading-snug mb-5 max-w-xl">
        Connaissez-vous vraiment les mariés&nbsp;?&nbsp;✨
      </h1>
      <div className="w-12 h-px bg-stone-300 mb-8" />
      <p className="text-stone-500 text-base sm:text-lg leading-loose max-w-md mb-10">
        6 stands, 42 questions sur Elsa et Loïs… et un cadeau à la clé.
        Bonne chance à tous&nbsp;!
      </p>

      <Link
        href="/surprise/quiz"
        className="inline-flex items-center gap-2 rounded-full bg-stone-800 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-700 mb-12"
      >
        <Sparkles className="size-4" />
        Commencer à répondre&nbsp;!
      </Link>

      <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-lg">
        <Image
          src="/surprise.png"
          alt="La surprise se prépare"
          width={400}
          height={400}
          className="w-full h-auto block object-cover"
        />
      </div>

    </main>
  )
}
