import { Camera } from "lucide-react"

export default function PhotosPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24">

      <div className="flex items-center justify-center size-10 rounded-full bg-stone-100 mb-5">
        <Camera className="size-4 text-stone-500" />
      </div>

      <p className="text-xs uppercase tracking-[0.25em] text-stone-400 mb-3 text-center">Album partagé</p>
      <h1 className="font-serif text-4xl sm:text-5xl font-light text-foreground leading-snug mb-5 text-center max-w-lg">
        On compte sur vous&nbsp;! 📸
      </h1>
      <div className="w-12 h-px bg-stone-300 mb-8" />

      <div className="max-w-lg w-full flex flex-col gap-4 mb-10">
        <p className="text-stone-600 text-lg leading-loose text-center">
          On sait qu&apos;il y aura plein de photos géniales… et on ne veut en rater aucune&nbsp;!
        </p>
        <p className="text-stone-400 text-sm leading-relaxed border-l-2 border-stone-200 pl-4">
          Dès que le lien sera disponible, ajoutez vos photos ici pour qu&apos;on puisse tous les retrouver et les chérir.
          Merci pour tous ces souvenirs ✨
        </p>
      </div>

      <a
        href="#photos"
        className="inline-flex items-center gap-2 rounded-full bg-stone-800 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-700"
      >
        <Camera className="size-4" />
        Lien photos à venir
      </a>

    </main>
  )
}
