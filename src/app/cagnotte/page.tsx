import { Gift, Heart } from "lucide-react"
import Image from "next/image"

export default function CagnottePage() {
  return (
    <main className="flex flex-1 flex-col lg:flex-row items-center lg:items-start gap-10 px-6 py-16 sm:py-20 max-w-4xl mx-auto w-full">

      {/* Texte */}
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left flex-1 pt-2 w-full">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex items-center justify-center size-10 rounded-full bg-stone-100">
            <Gift className="size-4 text-stone-500" />
          </div>
          <p className="text-xs uppercase tracking-[0.25em] text-stone-400">Un cadeau avec amour</p>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-light mb-5 text-foreground leading-snug">
          Cagnotte<br />voyage de noces
        </h1>
        <div className="w-12 h-px bg-stone-300 mb-6" />
        <p className="text-stone-600 text-base sm:text-lg leading-loose mb-3">
          Votre présence à nos côtés est déjà le plus beau des cadeaux.
        </p>
        <p className="text-stone-500 text-base leading-loose mb-8">
          Pour celles et ceux qui le souhaitent, nous avons mis en place une cagnotte pour nous aider à réaliser notre voyage de noces.
        </p>
        <a
          href="https://www.leetchi.com/fr/c/mariage-elsalois--18072026-1625412?utm_source=copylink&utm_medium=social_sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-stone-800 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-700 mb-6"
        >
          <Heart className="size-4" />
          Participer à la cagnotte
        </a>
        <p className="text-stone-400 text-lm leading-relaxed border-l-2 border-stone-200 pl-4 text-left">
          Une urne sera également présente le jour J pour ceux qui préfèrent nous laisser une enveloppe, un mot ou une jolie attention.
        </p>
      </div>

      {/* Image merci */}
      <div className="flex-shrink-0 w-full max-w-xs sm:max-w-sm lg:w-[420px] self-center rounded-2xl overflow-hidden shadow-lg">
        <Image
          src="/merci.png"
          alt="Merci à tous"
          width={420}
          height={420}
          className="w-full h-auto block object-cover"
        />
      </div>

    </main>
  )
}
