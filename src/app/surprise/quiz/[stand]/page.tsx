import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getStand } from "@/lib/quiz/stands";
import { getQuestionsForStand } from "@/lib/quiz/questions";
import { getAnswers, getCurrentParticipant } from "@/lib/quiz/db";
import { isSurpriseRevealed } from "@/lib/quiz/reveal";
import { QuizRunner, type ClientQuestion } from "./quiz-runner";

export default async function StandPage({
  params,
}: {
  params: Promise<{ stand: string }>;
}) {
  if (!isSurpriseRevealed()) redirect("/surprise");

  const { stand: standId } = await params;
  const stand = getStand(standId);
  if (!stand) notFound();

  const participant = await getCurrentParticipant();
  if (!participant) redirect("/surprise/quiz");

  const answers = await getAnswers(participant.id);
  const initialAnswers = Object.fromEntries(
    answers
      .filter((a) => a.stand_id === stand.id)
      .map((a) => [a.question_id, { isCorrect: a.is_correct }])
  );

  // On ne transmet jamais correctIndex au client
  const questions: ClientQuestion[] = getQuestionsForStand(stand.id).map((q) => ({
    id: q.id,
    question: q.question,
    options: [...q.options],
  }));

  return (
    <main className="flex flex-1 flex-col items-center px-6 py-16 sm:py-20 max-w-3xl mx-auto w-full">
      <Link
        href="/surprise/quiz"
        className="mb-8 inline-flex items-center gap-1.5 self-start text-sm text-stone-400 transition-colors hover:text-[#D4AF62]"
      >
        <ArrowLeft className="size-4" />
        Tous les stands
      </Link>

      <p className="text-xs uppercase tracking-[0.25em] text-stone-400 mb-2">Stand</p>
      <h1 className="font-serif text-3xl sm:text-4xl font-light text-foreground mb-8">
        {stand.name}
      </h1>

      <QuizRunner
        standName={stand.name}
        questions={questions}
        initialAnswers={initialAnswers}
      />
    </main>
  );
}
