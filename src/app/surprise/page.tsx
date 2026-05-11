import { Button } from "@/components/ui/button"

const stands = [
  "Stand Famille",
  "Stand Haute Savoie",
  "Stand Sports",
  "Stand Voyage",
  "Stand Souvenirs",
]

export default function SurprisePage() {
  return (
    <main className="flex flex-1 flex-col items-center bg-[#faf8f5] px-6 py-24 text-center">
      <p className="mb-2 text-sm uppercase tracking-[0.3em] text-muted-foreground">Surprise</p>
      <h1 className="mb-6 max-w-2xl font-serif text-4xl font-light text-foreground/80">
        Et si vous appreniez encore quelque chose sur nous ? 👀
      </h1>
      <div className="max-w-2xl space-y-5 text-muted-foreground">
        <p>
          Un petit jeu vous attend ici, avec des questions liées aux différents stands de la soirée.
        </p>
        <p>
          Cliquez, explorez, répondez… et amusez-vous !
        </p>
        <p>
          Un classement se mettra à jour au fil de la soirée.
        </p>
        <p>
          N&apos;hésitez pas à être attentifs aux détails des stands… quelques indices pourraient s&apos;y cacher.
        </p>
      </div>

      <div className="mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
        {stands.map((stand) => (
          <Button
            key={stand}
            variant="outline"
            size="lg"
            className="rounded-full border-[#D4AF62]/50 bg-white/70 px-5 text-stone-700 hover:bg-[#D4AF62]/10 hover:text-[#D4AF62]"
          >
            {stand}
          </Button>
        ))}
      </div>
    </main>
  )
}
