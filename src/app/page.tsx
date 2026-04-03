import Image from "next/image"
import { RingsAnimation } from "@/components/rings-animation"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { MapPin, Tent, BedDouble, Gift, Heart, Infinity, Camera, Church, Wine, ChevronDown } from "lucide-react"

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
            { time: "14h00", label: "Mairie de Thonon-les-Bains", href: "#mairie" },
            { time: "15h00", label: "Séance photo",               href: "#seance-photo" },
            { time: "16h00", label: "Accueil au domaine",          href: "#domaine" },
            { time: "16h30", label: "Cérémonie laïque",            href: "#ceremonie" },
            { time: "18h00", label: "Vin d'honneur",               href: "#vin-honneur" },
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
                <p className="text-sm text-muted-foreground leading-snug group-hover:underline underline-offset-2">Un maximum d'amour</p>
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
            <MapPin className="size-5 text-stone-500" />
          </div>
          <h2 className="font-serif text-3xl font-light mb-4">Cérémonie à la Mairie</h2>
          <Separator className="w-16 mb-6" />
          <p className="text-muted-foreground text-base leading-relaxed">
            La cérémonie civile aura lieu à <strong className="text-foreground">14h00</strong>.
            Merci de vous y présenter <strong className="text-foreground">15 minutes à l'avance</strong>.
          </p>
          <p className="text-muted-foreground text-sm mt-4">
            Des salles intérieures (chambres d'hôtes du domaine) seront disponibles pour coucher
            les plus petits si vous le souhaitez.
          </p>
          <div className="flex items-center gap-2 mt-5 text-stone-400">
            <BedDouble className="size-4" />
            <span className="text-sm">Chambres d'hôtes disponibles pour les enfants</span>
          </div>
        </section>

        <Separator className="max-w-xs mx-auto" />

        {/* ── SÉANCE PHOTO ── */}
        <section id="seance-photo" className="flex flex-col items-center px-6 py-20 text-center max-w-2xl mx-auto w-full">
          <div className="flex items-center justify-center size-12 rounded-full bg-stone-100 mb-6">
            <Camera className="size-5 text-stone-500" />
          </div>
          <h2 className="font-serif text-3xl font-light mb-4">Séance photo</h2>
          <Separator className="w-16 mb-6" />
          <p className="text-muted-foreground text-base leading-relaxed">
            À <strong className="text-foreground">15h00</strong>, place à la séance photo !
            Un photographe capturera ces instants précieux en famille et entre amis.
          </p>
          <p className="text-muted-foreground text-sm mt-4">
            Retrouvez les photos après le mariage dans la galerie du site.
          </p>
        </section>

        <Separator className="max-w-xs mx-auto" />

        {/* ── ACCUEIL AU DOMAINE ── */}
        <section id="domaine" className="flex flex-col items-center px-6 py-20 text-center w-full">
          <div className="flex items-center justify-center size-12 rounded-full bg-stone-100 mb-6">
            <Tent className="size-5 text-stone-500" />
          </div>
          <h2 className="font-serif text-3xl font-light mb-4">Accueil au domaine</h2>
          <Separator className="w-16 mb-6" />
          <p className="text-muted-foreground text-base leading-relaxed max-w-xl">
            À partir de <strong className="text-foreground">16h00</strong>, rejoignez-nous au domaine.
            Un champ sera également disponible pour camper à la fin de la soirée — venez avec votre matériel !
          </p>

          <div className="relative w-full max-w-2xl mt-10">
            <Carousel opts={{ loop: true }}>
              <CarouselContent>
                {[
                  { src: "/domaine/09ea0678e53fa7d99606e4aad9c6e47db9b36af469aa33698173c1ee6aba2816.jpg", alt: "Vue du ciel du lieu de camping" },
                  { src: "/domaine/1739555101_67af811d7638d-m.jpg", alt: "Le domaine" },
                  { src: "/domaine/20180611_155125.jpg", alt: "Le champ de camping" },
                ].map((img) => (
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

        {/* ── CÉRÉMONIE LAÏQUE ── */}
        <section id="ceremonie" className="flex flex-col items-center px-6 py-20 text-center max-w-2xl mx-auto w-full">
          <div className="flex items-center justify-center size-12 rounded-full bg-stone-100 mb-6">
            <Church className="size-5 text-stone-500" />
          </div>
          <h2 className="font-serif text-3xl font-light mb-4">Cérémonie laïque</h2>
          <Separator className="w-16 mb-6" />
          <p className="text-muted-foreground text-base leading-relaxed">
            À <strong className="text-foreground">16h30</strong>, nous vous invitons à partager
            avec nous ce moment unique et intime où nous prononcerons nos vœux.
          </p>
          <p className="text-muted-foreground text-sm mt-4">
            Installez-vous confortablement — des surprises vous attendent.
          </p>
        </section>

        <Separator className="max-w-xs mx-auto" />

        {/* ── VIN D'HONNEUR ── */}
        <section id="vin-honneur" className="flex flex-col items-center px-6 py-20 text-center max-w-2xl mx-auto w-full">
          <div className="flex items-center justify-center size-12 rounded-full bg-stone-100 mb-6">
            <Wine className="size-5 text-stone-500" />
          </div>
          <h2 className="font-serif text-3xl font-light mb-4">Vin d'honneur</h2>
          <Separator className="w-16 mb-6" />
          <p className="text-muted-foreground text-base leading-relaxed">
            Dès <strong className="text-foreground">18h00</strong>, retrouvez-nous pour le vin d'honneur.
            Un moment de convivialité pour trinquer, rire et profiter ensemble.
          </p>
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
            Si vous souhaitez nous offrir un cadeau, nous avons ouvert une cagnotte pour
            notre voyage de noces. Chaque contribution, petite ou grande, nous touchera
            infiniment.
          </p>
          <a
            href="https://cagnotte.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-stone-800 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-700"
          >
            <Heart className="size-4" />
            Contribuer à la cagnotte
          </a>
          <p className="text-muted-foreground text-sm mt-6 max-w-sm">
            Une urne sera également disponible sur place pour ceux qui souhaiteraient
            glisser une lettre ou une enveloppe. 💌
          </p>
        </section>

      </div>
    </main>
  )
}
