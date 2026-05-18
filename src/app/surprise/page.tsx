import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

const stands = [
  "Stand Famille",
  "Stand Haute Savoie",
  "Stand Sports",
  "Stand Voyage",
  "Stand Souvenirs",
]

export default function SurprisePage() {
  return (
    <main className="flex flex-1 flex-col items-center px-6 py-24">

      <div className="flex items-center justify-center size-10 rounded-full bg-stone-100 mb-5">
        <Sparkles className="size-4 text-stone-500" />
      </div>

      <p className="text-xs uppercase tracking-[0.25em] text-stone-400 mb-3 text-center">Activité du soir</p>
      <h1 className="font-serif text-4xl sm:text-5xl font-light text-foreground leading-snug mb-5 text-center max-w-xl">
        Et si vous appreniez encore quelque chose sur nous&nbsp;? 👀
      </h1>
      <div className="w-12 h-px bg-stone-300 mb-8" />

      <div className="max-w-lg w-full flex flex-col gap-4 mb-10">
        <p className="text-stone-600 text-lg leading-loose text-center">
          Un petit jeu vous attend, avec des questions liées aux différents stands de la soirée.
        </p>
        <div className="flex flex-col gap-3">
          <p className="text-stone-500 text-base leading-loose">
            Cliquez, explorez, répondez… et amusez-vous&nbsp;! Un classement se mettra à jour au fil de la soirée.
          </p>
          <p className="text-stone-400 text-sm leading-relaxed border-l-2 border-stone-200 pl-4">
            N&apos;hésitez pas à être attentifs aux détails des stands — quelques indices pourraient s&apos;y cacher.
          </p>
        </div>
      </div>

      <div className="flex max-w-2xl flex-wrap justify-center gap-3">
        {stands.map((stand) => (
          <Button
            key={stand}
            variant="outline"
            size="lg"
            className="rounded-full border-stone-200 bg-white px-6 text-stone-600 shadow-sm hover:bg-stone-50 hover:border-stone-300 transition-all"
          >
            {stand}
          </Button>
        ))}
      </div>

    </main>
  )
}
