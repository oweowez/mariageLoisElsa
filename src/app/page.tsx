import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { MapPin, Tent, BedDouble, Gift, Heart } from "lucide-react"

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">

      {/* ── HERO ── */}
      <section className="relative flex min-h-screen items-center justify-center px-6 text-center">
        <Image
          src="/bg.png"
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

      {/* ── SECTIONS ── */}
      <div className="flex flex-col gap-0 bg-[#faf8f5]">

        {/* ── MAIRIE ── */}
        <section className="flex flex-col items-center px-6 py-20 text-center max-w-2xl mx-auto w-full">
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

        {/* ── CAMPING ── */}
        <section className="flex flex-col items-center px-6 py-20 text-center w-full">
          <div className="flex items-center justify-center size-12 rounded-full bg-stone-100 mb-6">
            <Tent className="size-5 text-stone-500" />
          </div>
          <h2 className="font-serif text-3xl font-light mb-4">Camping sur le domaine</h2>
          <Separator className="w-16 mb-6" />
          <p className="text-muted-foreground text-base leading-relaxed max-w-xl">
            Un champ situé sur le domaine sera disponible pour camper à la fin de la soirée.
            Vous pouvez venir avec votre matériel de camping et vous installer quand vous
            le souhaitez !
          </p>

          {/* Carrousel camping */}
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

        {/* ── CAGNOTTE ── */}
        <section className="flex flex-col items-center px-6 py-20 text-center max-w-2xl mx-auto w-full">
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
