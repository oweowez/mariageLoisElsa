export default function PhotosPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-[#faf8f5] px-6 py-24 text-center">
      <p className="mb-2 text-sm uppercase tracking-[0.3em] text-muted-foreground">Album partagé</p>
      <h1 className="mb-6 font-serif text-4xl font-light text-foreground/80">On compte sur vous ! 📸</h1>
      <div className="max-w-xl space-y-5 text-muted-foreground">
        <p>
          On sait qu&apos;il y aura plein de photos géniales… et on ne veut en rater aucune !
        </p>
        <p>
          Ajoutez-les ici dès que le lien sera disponible.
        </p>
        <p>
          Merci pour tous ces souvenirs ✨
        </p>
      </div>
      <a
        href="#photos"
        className="mt-10 inline-flex items-center rounded-full bg-stone-800 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-700"
      >
        Lien photos à venir
      </a>
    </main>
  )
}
