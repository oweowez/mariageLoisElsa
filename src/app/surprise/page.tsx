import Image from "next/image"

export default function SurprisePage() {
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
