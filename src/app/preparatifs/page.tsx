import { Sparkles } from "lucide-react"
import { PreparationGallery } from "@/components/preparation-gallery"
import { getPreparationPhotos } from "@/lib/photos-preparation"

export default function PreparatifsPage() {
  const photos = getPreparationPhotos()

  return (
    <main className="flex flex-1 flex-col px-4 sm:px-6 py-12 sm:py-16 max-w-7xl mx-auto w-full">
      <header className="flex flex-col items-center text-center mb-10 sm:mb-14">
        <div className="flex items-center justify-center size-10 rounded-full bg-[#D4AF62]/10 mb-5">
          <Sparkles className="size-4 text-[#D4AF62]" />
        </div>

        <p className="text-xs uppercase tracking-[0.25em] text-stone-400 mb-3">
          Coulisses du grand jour
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl font-light text-foreground leading-snug mb-5 max-w-xl">
          Préparatifs du mariage
        </h1>
        <div className="w-12 h-px bg-[#D4AF62]/60 mb-6" />
        <p className="text-stone-500 text-base sm:text-lg leading-loose max-w-md">
          Un aperçu des petits moments qui préparent notre plus beau jour.
        </p>
        {photos.length > 0 && (
          <p className="mt-4 text-xs text-stone-400 tracking-wide">
            {photos.length} photo{photos.length > 1 ? "s" : ""}
          </p>
        )}
      </header>

      <PreparationGallery photos={photos} />
    </main>
  )
}
