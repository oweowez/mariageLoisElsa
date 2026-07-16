import { Music2 } from "lucide-react"
import Image from "next/image"

export default function PlaylistPage() {
  return (
    <main className="flex flex-1 flex-col lg:flex-row items-center lg:items-center gap-10 px-6 py-16 sm:py-20 max-w-4xl mx-auto w-full">

      {/* Image */}
      <div className="flex-shrink-0 w-full max-w-xs sm:max-w-sm lg:w-80 rounded-2xl overflow-hidden shadow-lg">
        <Image
          src="/playlist.png"
          alt="Elsa et Loïs qui dansent"
          width={320}
          height={400}
          className="w-full h-auto block object-cover"
        />
      </div>

      {/* Texte */}
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left flex-1 pt-2 w-full">
        <div className="flex items-center justify-center size-10 rounded-full bg-stone-100 mb-5 lg:self-start">
          <Music2 className="size-4 text-stone-500" />
        </div>
        <p className="text-xs uppercase tracking-[0.25em] text-stone-400 mb-3">Playlist participative</p>
        <h1 className="font-serif text-4xl sm:text-5xl font-light text-foreground leading-snug mb-5 max-w-xl">
          Avis à nos futurs danseurs&nbsp;! 🎶
        </h1>
        <div className="w-12 h-px bg-stone-300 mb-8" />
        <div className="flex flex-col gap-4 mb-10 max-w-lg">
          <p className="text-stone-600 text-lg leading-loose">
            Certains souvenirs passent par la musique… Alors pour faire de cette journée une fête à notre image
            — et à la vôtre — nous avons créé une playlist participative.
          </p>
          <p className="text-stone-400 text-sm leading-relaxed border-l-2 border-stone-200 pl-4 text-left">
            Pour éviter de passer &quot;La Chenille&quot; en boucle (ou au contraire, pour être sûrs de ne pas la rater),
            notez ici vos morceaux favoris. Ajoutez les titres qui vous font danser, chanter, ou qui vous rappellent de bons souvenirs avec nous.
          </p>
        </div>
        <a
          href="https://open.spotify.com/playlist/2DlJ0bcKlYVqobbQXn3l6U?si=YxIJZzcbRDaRVbBzMihF6w&utm_source=copy-link&pi=nCauVxs4Tt6m6&pt=5a5a8961cfc26ec3654dd9a4fec808f0"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-stone-800 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-700"
        >
          <Music2 className="size-4" />
          Ouvrir la playlist Spotify
        </a>
      </div>

    </main>
  )
}
