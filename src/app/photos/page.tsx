import { Camera } from "lucide-react"
import Image from "next/image"

export default function PhotosPage() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-24">

      <div className="flex flex-col sm:flex-row items-center gap-12 max-w-4xl w-full">

        {/* Texte */}
        <div className="flex flex-col items-center sm:items-start w-full sm:w-80 shrink-0">
          <div className="flex items-center justify-center size-10 rounded-full bg-stone-100 mb-5">
            <Camera className="size-4 text-stone-500" />
          </div>

          <p className="text-xs uppercase tracking-[0.25em] text-stone-400 mb-3 text-center sm:text-left">Album partagé</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-light text-foreground leading-snug mb-5 text-center sm:text-left max-w-lg">
            On compte sur vous&nbsp;! 📸
          </h1>
          <div className="w-12 h-px bg-stone-300 mb-8" />

          <p className="text-stone-600 text-lg leading-loose text-center sm:text-left mb-10">
            On sait qu&apos;il y aura plein de photos géniales… et on ne veut en rater aucune&nbsp;!
          </p>

          <a
            href="https://knipsmig.com/nt9HJGmE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-stone-800 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-700"
          >
            <Camera className="size-4" />
            Accéder à l&apos;album photo
          </a>
        </div>

        {/* Image */}
        <div className="flex-1 rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/photo.png"
            alt="Photo de couple"
            width={600}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

      </div>

    </main>
  )
}
