export default function PlaylistPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-[#faf8f5] px-6 py-24 text-center">
      <p className="mb-2 text-sm uppercase tracking-[0.3em] text-muted-foreground">Playlist participative</p>
      <h1 className="mb-6 max-w-2xl font-serif text-4xl font-light text-foreground/80">
        Avis à nos futurs danseurs étoiles (ou du dimanche) ! 🎶
      </h1>
      <div className="max-w-2xl space-y-5 text-muted-foreground">
        <p>
          Certains souvenirs passent par la musique… Alors pour faire de cette journée une fête à notre image
          (et à la vôtre !), nous avons créé une playlist participative pour une partie de la journée.
        </p>
        <p>
          Pour éviter de passer &quot;La Chenille&quot; en boucle (ou au contraire, pour être sûrs de ne pas la rater),
          notez ici vos morceaux favoris. Promis, on essaiera de satisfaire tous les goûts !
        </p>
        <p>
          Ajoutez les musiques qui vous font danser, chanter ou qui vous rappellent de bons souvenirs avec nous.
        </p>
      </div>
      <a
        href="#playlist"
        className="mt-10 inline-flex items-center rounded-full bg-stone-800 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-700"
      >
        Lien vers la playlist à venir
      </a>
    </main>
  )
}
