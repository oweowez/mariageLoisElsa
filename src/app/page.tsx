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
      <section className="flex flex-col items-center px-6 py-24">

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-2 w-full max-w-4xl justify-center">

          {/* Timeline */}
          <div className="flex flex-col items-center flex-shrink-0">
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
            </div>{/* fin relative timeline */}
          </div>

          {/* planning.png */}
          <div className="flex-shrink-0 w-96 sm:w-[480px]">
            <Image
              src="/planning.png"
              alt="Planning de la journée"
              width={480}
              height={672}
              className="w-full h-auto block"
            />
          </div>

        </div>
      </section>

      {/* ── SECTIONS ── */}
      <div className="flex flex-col gap-0">

        {/* ── MAIRIE ── */}
        <section id="mairie" className="flex flex-col lg:flex-row-reverse items-center lg:items-start gap-12 px-6 py-20 max-w-4xl mx-auto w-full">

          {/* Texte */}
          <div className="flex flex-col items-start text-left flex-1 pt-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center justify-center size-10 rounded-full bg-stone-100">
                <Landmark className="size-4 text-stone-500" />
              </div>
              <p className="text-xs uppercase tracking-[0.25em] text-stone-400">Le grand jour · 14h00</p>
            </div>
            <h2 className="font-serif text-4xl font-light mb-5 text-foreground leading-snug">Cérémonie<br />à la Mairie</h2>
            <div className="w-12 h-px bg-stone-300 mb-6" />
            <p className="text-stone-600 text-lg leading-loose mb-4">
              Rendez-vous à <strong className="text-stone-900 font-semibold">14h</strong> à la mairie.
              Merci de venir <strong className="text-stone-900 font-semibold">15 minutes avant</strong> afin que nous puissions tous nous réunir avant d&apos;entrer.
            </p>
            <p className="text-stone-400 text-sm leading-relaxed border-l-2 border-stone-200 pl-4">
              À la sortie, les mariés iront faire une petite séance photo au belvédère en petit comité — rejoignez-les ensuite au domaine.
            </p>
          </div>

          {/* Image mairie — format portrait */}
          <div className="flex-shrink-0 w-64 sm:w-72 lg:w-80 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/mairie.png"
              alt="Les mariés devant la mairie"
              width={320}
              height={450}
              className="w-full h-auto block object-cover"
            />
          </div>

        </section>

        <Separator className="max-w-xs mx-auto" />

        {/* ── ACCUEIL AU DOMAINE ── */}
        <section id="domaine" className="flex flex-col items-center px-6 py-20 text-center w-full">
          <div className="flex items-center justify-center size-10 rounded-full bg-stone-100 mb-5">
            <Grape className="size-4 text-stone-500" />
          </div>
          <p className="text-xs uppercase tracking-[0.25em] text-stone-400 mb-3">Après la mairie</p>
          <h2 className="font-serif text-4xl font-light mb-5 text-foreground">Le domaine 🍇</h2>
          <div className="w-12 h-px bg-stone-300 mb-7" />
          <p className="text-stone-600 text-lg leading-loose max-w-xl mb-2">
            Après la sortie des mariés, tout le monde se dirige vers le domaine.
          </p>
          <p className="text-stone-900 font-medium text-base mb-8">
            501 chemin de Senoche, 74140 Ballaison
          </p>
          <div className="grid gap-4 text-left text-base text-stone-500 sm:grid-cols-2 max-w-xl w-full">
            <div className="rounded-2xl bg-white p-5 shadow-sm border border-stone-100">
              <p className="text-stone-400 text-xs uppercase tracking-widest mb-2">À votre arrivée</p>
              Des rafraîchissements vous attendent le temps de l&apos;arrivée des mariés.
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm border border-stone-100">
              <p className="text-stone-400 text-xs uppercase tracking-widest mb-2">Parking</p>
              Vous pourrez vous garer sur place selon les indications prévues.
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
          
        </section>

        <Separator className="max-w-xs mx-auto" />

        {/* ── CAMPING ── */}
        <section id="camping" className="flex flex-col lg:flex-row items-center lg:items-start gap-12 px-6 py-20 max-w-4xl mx-auto w-full">

          {/* Image camping */}
          <div className="flex-shrink-0 w-64 sm:w-72 lg:w-80 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/camping.png"
              alt="Les mariés devant leur tente"
              width={320}
              height={450}
              className="w-full h-auto block object-cover"
            />
          </div>

          {/* Texte */}
          <div className="flex flex-col items-start text-left flex-1 pt-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center justify-center size-10 rounded-full bg-stone-100">
                <Tent className="size-4 text-stone-500" />
              </div>
              <p className="text-xs uppercase tracking-[0.25em] text-stone-400">Sur place · En soirée</p>
            </div>
            <h2 className="font-serif text-4xl font-light mb-5 text-foreground leading-snug">Le Camping ⛺</h2>
            <div className="w-12 h-px bg-stone-300 mb-6" />
            <p className="text-stone-600 text-lg leading-loose mb-4">
              Un champ du domaine sera à disposition pour ceux qui souhaitent camper sur place — on sera aussi là avec nos tentes&nbsp;!
            </p>
            <p className="text-stone-400 text-sm leading-relaxed border-l-2 border-stone-200 pl-4">
              Vous pouvez venir avec votre tente et l&apos;installer dès votre arrivée, pendant la journée.
            </p>
          </div>

        </section>

        <Separator className="max-w-xs mx-auto" />

        {/* ── ENFANTS ── */}
        <section id="enfants" className="flex flex-col items-center px-6 py-20 text-center max-w-xl mx-auto w-full">
          <div className="flex items-center justify-center size-10 rounded-full bg-stone-100 mb-5">
            <Baby className="size-4 text-stone-500" />
          </div>
          <p className="text-xs uppercase tracking-[0.25em] text-stone-400 mb-3">Sur place</p>
          <h2 className="font-serif text-4xl font-light mb-5 text-foreground">Pour les plus petits 🧸</h2>
          <div className="w-12 h-px bg-stone-300 mb-7" />
          <p className="text-stone-600 text-lg leading-loose mb-6">
            Des chambres d&apos;hôtes du domaine seront dédiées aux plus petits pour la journée et la soirée.
          </p>
          <div className="flex items-start gap-3 bg-white rounded-2xl border border-stone-100 shadow-sm px-5 py-4 text-left">
            <BedDouble className="size-5 text-stone-400 mt-0.5 shrink-0" />
            <p className="text-stone-500 text-base leading-relaxed">Une salle dédiée aux enfants leur permettra aussi d&apos;avoir leur propre espace pour jouer et se reposer.</p>
          </div>
        </section>

        <Separator className="max-w-xs mx-auto" />

        {/* ── CAGNOTTE ── */}
        <section id="cagnotte" className="flex flex-col lg:flex-row items-center lg:items-start gap-12 px-6 py-20 max-w-4xl mx-auto w-full">

          {/* Texte */}
          <div className="flex flex-col items-start text-left flex-1 pt-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center justify-center size-10 rounded-full bg-stone-100">
                <Gift className="size-4 text-stone-500" />
              </div>
              <p className="text-xs uppercase tracking-[0.25em] text-stone-400">Un cadeau avec amour</p>
            </div>
            <h2 className="font-serif text-4xl font-light mb-5 text-foreground leading-snug">Cagnotte<br />voyage de noces</h2>
            <div className="w-12 h-px bg-stone-300 mb-6" />
            <p className="text-stone-600 text-lg leading-loose mb-3">
              Votre présence à nos côtés est déjà le plus beau des cadeaux.
            </p>
            <p className="text-stone-500 text-base leading-loose mb-8">
              Pour celles et ceux qui le souhaitent, nous avons mis en place une cagnotte pour nous aider à réaliser notre voyage de noces.
            </p>
            <a
              href="#cagnotte"
              className="inline-flex items-center gap-2 rounded-full bg-stone-800 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-700 mb-6"
            >
              <Heart className="size-4" />
              Lien vers la cagnotte à venir
            </a>
            <p className="text-stone-400 text-sm leading-relaxed border-l-2 border-stone-200 pl-4">
              Une urne sera également présente le jour J pour ceux qui préfèrent nous laisser une enveloppe, un mot ou une jolie attention.
            </p>
          </div>

          {/* Image merci */}
          <div className="flex-shrink-0 w-80 sm:w-96 lg:w-[420px] self-center rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/merci.png"
              alt="Merci à tous"
              width={420}
              height={420}
              className="w-full h-auto block object-cover"
            />
          </div>

        </section>

      </div>
    </main>
  )
}
