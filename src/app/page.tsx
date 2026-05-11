import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Separator } from "@/components/ui/separator"
import { RingsAnimation } from "@/components/rings-animation"
import {
  Baby,
  BedDouble,
  ChevronDown,
  Gift,
  Grape,
  Heart,
  Infinity,
  Landmark,
  ParkingCircle,
  Tent,
} from "lucide-react"
import Image from "next/image"

const domainImages = [
  {
    src: "/domaine/09ea0678e53fa7d99606e4aad9c6e47db9b36af469aa33698173c1ee6aba2816.jpg",
    alt: "Vue du ciel du domaine et des espaces extérieurs",
  },
  {
    src: "/domaine/1739555101_67af811d7638d-m.jpg",
    alt: "Le domaine",
  },
  {
    src: "/domaine/20180611_155125.jpg",
    alt: "Le champ de camping",
  },
]

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">

      {/* ── HERO ── */}
      <section className="relative flex min-h-screen items-center justify-center px-6 text-center">

        {/* ── BAGUES ANIMÉES ── */}
        <RingsAnimation />

        <Image
          src="/bg.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center -z-10 !top-[-80px] !w-[110%] !left-1/2 !-translate-x-1/2 opacity-100"
        />
        <div className="flex items-center gap-8">
          <Image
            src="/elsa.png"
            alt="Elsa"
            width={220}
            height={220}
            className="rounded-full object-cover"
          />
          <div className="flex flex-col items-center gap-3">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              Vous êtes invités au
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light tracking-wide text-foreground leading-tight">
              Mariage de<br />
              <span className="italic">Elsa &amp; Loïs</span>
            </h1>
            <div className="h-px w-24 bg-border my-1" />
            <p className="text-muted-foreground text-lg max-w-sm">
              Avec tout notre amour, nous vous souhaitons la bienvenue sur notre site de mariage.
            </p>
            {/* Indication de défilement — même style que la ligne du programme */}
            <div className="mt-8 flex flex-col items-center">
              <div className="flex flex-col items-center" aria-hidden="true">
                <div className="h-14 w-px bg-stone-300" />
                <ChevronDown className="size-5 -mt-px text-stone-400" strokeWidth={2} />
              </div>
              <span className="sr-only">Faire défiler la page pour voir la suite</span>
            </div>
          </div>
          <Image
            src="/lois.png"
            alt="Loïs"
            width={220}
            height={220}
            className="rounded-full object-cover"
          />
        </div>
      </section>

      {/* ── PROGRAMME DE LA JOURNÉE ── */}
      <section className="flex flex-col items-center px-6 py-24 bg-[#faf8f5]">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-2">Le grand jour</p>
        <h2 className="font-serif text-3xl font-light mb-10 text-foreground">Programme</h2>
        <div className="relative flex flex-col items-center">
          {/* ligne verticale */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-stone-300" />

          {[
            { time: "14h00", label: "Rendez-vous à la mairie", href: "#mairie" },
            { time: "Après la mairie", label: "Départ vers le domaine", href: "#domaine" },
            { time: "Sur place", label: "Camping, enfants et rafraîchissements", href: "#camping" },
          ].map(({ time, label, href }) => (
            <div key={time} className="relative flex items-center w-80 sm:w-[420px] mb-10 last:mb-0">
              <div className="flex-1 text-right pr-6">
                <a href={href} className="group block">
                  <span className="font-serif text-lg text-foreground group-hover:text-stone-500 transition-colors">{time}</span>
                  <p className="text-sm text-muted-foreground leading-snug group-hover:underline underline-offset-2">{label}</p>
                </a>
              </div>
              <a href={href} aria-label={label} className="relative z-10 shrink-0 size-3 rounded-full bg-stone-400 border-2 border-white shadow hover:bg-stone-600 hover:scale-125 transition-all" />
              <div className="flex-1 pl-6" />
            </div>
          ))}

          {/* dernier élément : infini */}
          <div className="relative flex items-center w-80 sm:w-[420px]">
            <div className="flex-1 text-right pr-6">
              <a href="#cagnotte" className="group block">
                <Infinity className="inline size-5 text-stone-400 mb-1 group-hover:text-stone-600 transition-colors" />
                <p className="text-sm text-muted-foreground leading-snug group-hover:underline underline-offset-2">Un maximum d&apos;amour</p>
              </a>
            </div>
            <a href="#cagnotte" aria-label="Un maximum d'amour" className="relative z-10 shrink-0 size-3 rounded-full bg-stone-300 border-2 border-white shadow hover:bg-stone-500 hover:scale-125 transition-all" />
            <div className="flex-1 pl-6" />
          </div>
        </div>
      </section>

      {/* ── SECTIONS ── */}
      <div className="flex flex-col gap-0 bg-[#faf8f5]">

        {/* ── MAIRIE ── */}
        <section id="mairie" className="flex flex-col items-center px-6 py-20 text-center max-w-2xl mx-auto w-full">
          <div className="flex items-center justify-center size-12 rounded-full bg-stone-100 mb-6">
            <Landmark className="size-5 text-stone-500" />
          </div>
          <h2 className="font-serif text-3xl font-light mb-4">Mairie 🏛</h2>
          <Separator className="w-16 mb-6" />
          <p className="text-muted-foreground text-base leading-relaxed">
            Rendez-vous à <strong className="text-foreground">14h</strong> à la mairie.
            Venez <strong className="text-foreground">15 minutes avant</strong> afin que nous puissions tous nous réunir.
          </p>
          <p className="text-muted-foreground text-sm mt-4">
            À la sortie de la mairie, les mariés iront faire une petite séance photo au belvédère en petit comité.
          </p>
        </section>

        <Separator className="max-w-xs mx-auto" />

        {/* ── ACCUEIL AU DOMAINE ── */}
        <section id="domaine" className="flex flex-col items-center px-6 py-20 text-center w-full">
          <div className="flex items-center justify-center size-12 rounded-full bg-stone-100 mb-6">
            <Grape className="size-5 text-stone-500" />
          </div>
          <h2 className="font-serif text-3xl font-light mb-4">Le domaine 🍇</h2>
          <Separator className="w-16 mb-6" />
          <p className="text-muted-foreground text-base leading-relaxed max-w-2xl">
            Après la sortie des mariés, tout le monde se dirige vers le domaine,{" "}
            <strong className="text-foreground">501 chemin de Senoche, 74140 Ballaison</strong>.
          </p>
          <div className="mt-6 grid gap-3 text-left text-sm text-muted-foreground sm:grid-cols-2">
            <div className="rounded-2xl bg-white/70 p-4">
              Des rafraîchissements vous attendent le temps de l&apos;arrivée des mariés.
            </div>
            <div className="rounded-2xl bg-white/70 p-4">
              <ParkingCircle className="mb-2 size-4 text-stone-500" />
              Vous pourrez vous garer sur place selon les indications.
            </div>
          </div>

          <div className="relative w-full max-w-2xl mt-10">
            <Carousel opts={{ loop: true }}>
              <CarouselContent>
                {domainImages.map((img) => (
                  <CarouselItem key={img.alt}>
                    <Card className="overflow-hidden border-0 shadow-md rounded-2xl p-0 gap-0">
                      <CardContent className="p-0 relative h-72 sm:h-96">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover"
                        />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
          <p className="mt-4 max-w-xl text-sm text-muted-foreground">
            Les vues du ciel permettront de repérer l&apos;accès, le parking et les espaces prévus.
          </p>
        </section>

        <Separator className="max-w-xs mx-auto" />

        {/* ── CAMPING ── */}
        <section id="camping" className="flex flex-col items-center px-6 py-20 text-center max-w-2xl mx-auto w-full">
          <div className="flex items-center justify-center size-12 rounded-full bg-stone-100 mb-6">
            <Tent className="size-5 text-stone-500" />
          </div>
          <h2 className="font-serif text-3xl font-light mb-4">Le Camping ⛺</h2>
          <Separator className="w-16 mb-6" />
          <p className="text-muted-foreground text-base leading-relaxed">
            Un champ faisant partie du domaine sera à disposition pour ceux qui souhaitent camper sur place.
            On sera aussi avec nos tentes ;)
          </p>
          <p className="text-muted-foreground text-sm mt-4">
            Vous pouvez venir avec votre tente et l&apos;installer pendant la journée quand vous pouvez !
          </p>
        </section>

        <Separator className="max-w-xs mx-auto" />

        {/* ── ENFANTS ── */}
        <section id="enfants" className="flex flex-col items-center px-6 py-20 text-center max-w-2xl mx-auto w-full">
          <div className="flex items-center justify-center size-12 rounded-full bg-stone-100 mb-6">
            <Baby className="size-5 text-stone-500" />
          </div>
          <h2 className="font-serif text-3xl font-light mb-4">Pour les plus petits 🧸</h2>
          <Separator className="w-16 mb-6" />
          <p className="text-muted-foreground text-base leading-relaxed">
            Des chambres d&apos;hôtes situées dans le domaine seront utilisées pour installer les plus petits durant
            la journée et la soirée.
          </p>
          <div className="flex items-center gap-2 mt-5 text-stone-400">
            <BedDouble className="size-4" />
            <span className="text-sm">Une salle dédiée aux enfants leur permettra aussi d&apos;avoir leur espace à eux.</span>
          </div>
        </section>

        <Separator className="max-w-xs mx-auto" />

        {/* ── CAGNOTTE ── */}
        <section id="cagnotte" className="flex flex-col items-center px-6 py-20 text-center max-w-2xl mx-auto w-full">
          <div className="flex items-center justify-center size-12 rounded-full bg-stone-100 mb-6">
            <Gift className="size-5 text-stone-500" />
          </div>
          <h2 className="font-serif text-3xl font-light mb-4">Cagnotte voyage</h2>
          <Separator className="w-16 mb-6" />
          <p className="text-muted-foreground text-base leading-relaxed mb-8">
            Votre présence à nos côtés est déjà le plus beau des cadeaux.
            Mais pour celles et ceux qui le souhaitent, nous avons mis en place une cagnotte afin de nous aider
            à réaliser notre voyage de noces.
          </p>
          <a
            href="#cagnotte"
            className="inline-flex items-center gap-2 rounded-full bg-stone-800 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-700"
          >
            <Heart className="size-4" />
            Lien vers la cagnotte à venir
          </a>
          <p className="text-muted-foreground text-sm mt-6 max-w-sm">
            Nous aurons également une urne le jour J pour ceux qui préfèrent nous laisser une enveloppe,
            ou bien un petit mot, une lettre ou une jolie attention.
          </p>
        </section>

      </div>
    </main>
  )
}
