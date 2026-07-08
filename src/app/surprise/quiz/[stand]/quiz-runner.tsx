"use client";

import { useMemo, useState, useTransition } from "react";
import Link from "next/link";
import { ArrowRight, CircleCheck, CircleX, Loader2, PartyPopper, Trophy } from "lucide-react";
import { submitAnswer } from "../actions";

export type ClientQuestion = {
  id: string;
  question: string;
  options: string[];
};

type AnswerRecord = { isCorrect: boolean };

type Feedback = { isCorrect: boolean; correctIndex: number; selectedIndex: number };

export function QuizRunner({
  standName,
  questions,
  initialAnswers,
}: {
  standName: string;
  questions: ClientQuestion[];
  initialAnswers: Record<string, AnswerRecord>;
}) {
  const [answers, setAnswers] = useState<Record<string, AnswerRecord>>(initialAnswers);
  const firstUnanswered = useMemo(
    () => questions.findIndex((q) => !initialAnswers[q.id]),
    [questions, initialAnswers]
  );
  const [idx, setIdx] = useState(firstUnanswered === -1 ? questions.length : firstUnanswered);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pendingIndex, setPendingIndex] = useState<number | null>(null);
  const [isPending, startTransition] = useTransition();

  const answeredCount = Object.keys(answers).length;
  const score = Object.values(answers).filter((a) => a.isCorrect).length;
  const finished = idx >= questions.length;

  function handleSelect(optionIndex: number) {
    if (feedback || isPending || finished) return;
    const question = questions[idx];
    setError(null);
    setPendingIndex(optionIndex);
    startTransition(async () => {
      const result = await submitAnswer(question.id, optionIndex);
      setPendingIndex(null);
      if (!result.ok) {
        setError(result.error);
        return;
      }
      setFeedback({
        isCorrect: result.isCorrect,
        correctIndex: result.correctIndex,
        selectedIndex: optionIndex,
      });
      setAnswers((prev) => ({
        ...prev,
        [question.id]: { isCorrect: result.isCorrect },
      }));
    });
  }

  function handleNext() {
    setFeedback(null);
    setError(null);
    // saute les questions déjà répondues (reprise en cours de stand)
    let next = idx + 1;
    while (next < questions.length && answers[questions[next].id]) next++;
    setIdx(next);
  }

  if (finished) {
    return (
      <div className="flex w-full max-w-lg flex-col items-center text-center">
        <span className="mb-6 flex size-16 items-center justify-center rounded-full bg-[#D4AF62]/10">
          <PartyPopper className="size-7 text-[#D4AF62]" />
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-light text-foreground mb-4">
          Stand {standName} terminé&nbsp;!
        </h2>
        <p className="text-stone-500 text-lg mb-10">
          Votre score sur ce stand&nbsp;:{" "}
          <span className="font-semibold text-[#D4AF62]">{score}</span> / {questions.length}
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/surprise/quiz"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-stone-800 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-700"
          >
            Continuer avec un autre stand
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/surprise/quiz/classement"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-300 bg-white px-7 py-3 text-sm font-medium text-stone-700 transition-colors hover:border-[#D4AF62] hover:text-[#D4AF62]"
          >
            <Trophy className="size-4" />
            Voir le classement
          </Link>
        </div>
      </div>
    );
  }

  const question = questions[idx];

  return (
    <div className="flex w-full max-w-lg flex-col items-center">
      {/* Progression */}
      <div className="mb-8 flex items-center gap-2">
        {questions.map((q, i) => {
          const answered = answers[q.id];
          return (
            <span
              key={q.id}
              className={`size-2.5 rounded-full transition-colors ${
                answered
                  ? answered.isCorrect
                    ? "bg-emerald-400"
                    : "bg-red-300"
                  : i === idx
                    ? "bg-[#D4AF62]"
                    : "bg-stone-200"
              }`}
            />
          );
        })}
      </div>

      <p className="text-xs uppercase tracking-[0.25em] text-stone-400 mb-4">
        Question {answeredCount + 1} / {questions.length}
      </p>

      <h2 className="font-serif text-2xl sm:text-3xl font-light text-foreground text-center leading-snug mb-8">
        {question.question}
      </h2>

      <div className="flex w-full flex-col gap-3 mb-6">
        {question.options.map((option, i) => {
          const isSelected = feedback?.selectedIndex === i;
          const isCorrectOption = feedback?.correctIndex === i;

          let style =
            "border-stone-200 bg-white/90 text-stone-700 hover:border-[#D4AF62]/60 hover:bg-[#D4AF62]/5";
          if (feedback) {
            if (isCorrectOption) {
              style = "border-emerald-400 bg-emerald-50 text-emerald-700";
            } else if (isSelected) {
              style = "border-red-300 bg-red-50 text-red-600";
            } else {
              style = "border-stone-200 bg-white/60 text-stone-400";
            }
          }

          return (
            <button
              key={i}
              type="button"
              disabled={!!feedback || isPending}
              onClick={() => handleSelect(i)}
              className={`flex items-center justify-between gap-3 rounded-xl border px-5 py-3.5 text-left text-sm transition-all disabled:cursor-default ${style}`}
            >
              <span>{option}</span>
              {pendingIndex === i && <Loader2 className="size-4 animate-spin text-stone-400" />}
              {feedback && isCorrectOption && <CircleCheck className="size-4 shrink-0" />}
              {feedback && isSelected && !isCorrectOption && <CircleX className="size-4 shrink-0" />}
            </button>
          );
        })}
      </div>

      {error && <p className="mb-4 text-sm text-red-500">{error}</p>}

      {feedback && (
        <div className="flex w-full flex-col items-center gap-4">
          <p
            className={`text-sm font-medium ${feedback.isCorrect ? "text-emerald-600" : "text-red-500"}`}
          >
            {feedback.isCorrect ? "Bonne réponse, bravo !" : "Raté… ce sera pour la prochaine !"}
          </p>
          <button
            type="button"
            onClick={handleNext}
            className="inline-flex items-center gap-2 rounded-full bg-stone-800 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-700"
          >
            {answeredCount >= questions.length ? "Voir mon score" : "Question suivante"}
            <ArrowRight className="size-4" />
          </button>
        </div>
      )}
    </div>
  );
}
