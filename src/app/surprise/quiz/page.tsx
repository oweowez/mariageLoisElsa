import Link from "next/link";
import {
  Check,
  Dices,
  Dumbbell,
  Heart,
  Mountain,
  Plane,
  Trophy,
  Users,
} from "lucide-react";
import { redirect } from "next/navigation";
import { connection } from "next/server";
import { STANDS, QUESTIONS_PER_STAND, TOTAL_QUESTIONS } from "@/lib/quiz/stands";
import { getAnswers, getCurrentParticipant } from "@/lib/quiz/db";
import { isSurpriseRevealed } from "@/lib/quiz/reveal";
import { RegistrationForm } from "./registration-form";

const STAND_ICONS = {
  mountain: Mountain,
  heart: Heart,
  plane: Plane,
  users: Users,
  dumbbell: Dumbbell,
  dices: Dices,
} as const;

export default async function QuizPage() {
  await connection();
  if (!isSurpriseRevealed()) redirect("/surprise");

  const participant = await getCurrentParticipant();

  if (!participant) {
    return (
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-stone-400 mb-3">Inscription</p>
        <h1 className="font-serif text-4xl sm:text-5xl font-light text-foreground leading-snug mb-5 max-w-xl">
          Qui êtes-vous&nbsp;?
        </h1>
        <div className="w-12 h-px bg-stone-300 mb-8" />
        <p className="text-stone-500 text-base leading-loose max-w-sm mb-10">
          Dites-nous qui vous êtes pour apparaître dans le classement final.
        </p>
        <RegistrationForm />
      </main>
    );
  }

  const answers = await getAnswers(participant.id);
  const score = answers.filter((a) => a.is_correct).length;
  const answeredByStand = new Map<string, number>();
  for (const a of answers) {
    answeredByStand.set(a.stand_id, (answeredByStand.get(a.stand_id) ?? 0) + 1);
  }

  return (
    <main className="flex flex-1 flex-col items-center px-6 py-16 sm:py-20 max-w-5xl mx-auto w-full">
      <p className="text-xs uppercase tracking-[0.25em] text-stone-400 mb-3">Le grand quiz</p>
      <h1 className="font-serif text-4xl sm:text-5xl font-light text-foreground leading-snug mb-5 text-center">
        À vous de jouer, {participant.first_name}&nbsp;!
      </h1>
      <div className="w-12 h-px bg-stone-300 mb-6" />
      <p className="text-stone-500 text-base leading-loose max-w-md text-center mb-2">
        Choisissez un stand et répondez aux {QUESTIONS_PER_STAND} questions.
      </p>
      <p className="text-sm text-stone-400 mb-10">
        Votre score&nbsp;: <span className="font-semibold text-[#D4AF62]">{score}</span> / {TOTAL_QUESTIONS}
        {" · "}
        {answers.length} question{answers.length > 1 ? "s" : ""} répondue{answers.length > 1 ? "s" : ""}
      </p>

      <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
        {STANDS.map((stand) => {
          const Icon = STAND_ICONS[stand.icon];
          const answered = answeredByStand.get(stand.id) ?? 0;
          const done = answered >= QUESTIONS_PER_STAND;

          return (
            <Link
              key={stand.id}
              href={`/surprise/quiz/${stand.id}`}
              className="group relative flex flex-col items-center gap-3 rounded-2xl border border-stone-200 bg-white/90 px-6 py-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-[#D4AF62]/60 hover:shadow-md"
            >
              {done && (
                <span className="absolute right-4 top-4 flex size-6 items-center justify-center rounded-full bg-emerald-100">
                  <Check className="size-3.5 text-emerald-600" />
                </span>
              )}
              <span className="flex size-14 items-center justify-center rounded-full bg-[#D4AF62]/10 transition-colors group-hover:bg-[#D4AF62]/20">
                <Icon className="size-6 text-[#D4AF62]" />
              </span>
              <span className="font-serif text-2xl font-light text-stone-800">{stand.name}</span>
              <span className="text-sm text-stone-500 leading-relaxed">{stand.description}</span>
              <span className="mt-1 text-xs uppercase tracking-[0.2em] text-stone-400">
                {answered} / {QUESTIONS_PER_STAND} question{QUESTIONS_PER_STAND > 1 ? "s" : ""}
              </span>
              <span className="h-1 w-full overflow-hidden rounded-full bg-stone-100">
                <span
                  className="block h-full rounded-full bg-[#D4AF62] transition-all"
                  style={{ width: `${(answered / QUESTIONS_PER_STAND) * 100}%` }}
                />
              </span>
            </Link>
          );
        })}
      </div>

      <Link
        href="/surprise/quiz/classement"
        className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-7 py-3 text-sm font-medium text-stone-700 transition-colors hover:border-[#D4AF62] hover:text-[#D4AF62]"
      >
        <Trophy className="size-4" />
        Voir le classement
      </Link>
    </main>
  );
}
