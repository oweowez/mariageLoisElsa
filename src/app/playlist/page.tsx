import { Music2 } from "lucide-react"

export default function PlaylistPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24">

      <div className="flex items-center justify-center size-10 rounded-full bg-stone-100 mb-5">
        <Music2 className="size-4 text-stone-500" />
      </div>

      <p className="text-xs uppercase tracking-[0.25em] text-stone-400 mb-3 text-center">Playlist participative</p>
      <h1 className="font-serif text-4xl sm:text-5xl font-light text-foreground leading-snug mb-5 text-center max-w-xl">
        Avis à nos futurs danseurs&nbsp;! 🎶
      </h1>
      <div className="w-12 h-px bg-stone-300 mb-8" />

      <div className="max-w-lg w-full flex flex-col gap-4 mb-10">
        <p className="text-stone-600 text-lg leading-loose text-center">
          Certains souvenirs passent par la musique… Alors pour faire de cette journée une fête à notre image
          — et à la vôtre — nous avons créé une playlist participative.
        </p>
        <p className="text-stone-400 text-sm leading-relaxed border-l-2 border-stone-200 pl-4">
          Pour éviter de passer &quot;La Chenille&quot; en boucle (ou au contraire, pour être sûrs de ne pas la rater),
          notez ici vos morceaux favoris. Ajoutez les titres qui vous font danser, chanter, ou qui vous rappellent de bons souvenirs avec nous.
        </p>
      </div>

      <a
        href="#playlist"
        className="inline-flex items-center gap-2 rounded-full bg-stone-800 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-700"
      >
        <Music2 className="size-4" />
        Lien vers la playlist à venir
      </a>

    </main>
  )
}
