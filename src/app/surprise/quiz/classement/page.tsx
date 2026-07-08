import Link from "next/link";
import { ArrowLeft, Crown, Medal } from "lucide-react";
import { connection } from "next/server";
import { redirect } from "next/navigation";
import { TOTAL_QUESTIONS } from "@/lib/quiz/stands";
import { getCurrentParticipant, getLeaderboard } from "@/lib/quiz/db";
import { isSurpriseRevealed } from "@/lib/quiz/reveal";

export default async function LeaderboardPage() {
  await connection();
  if (!isSurpriseRevealed()) redirect("/surprise");
  const [leaderboard, participant] = await Promise.all([
    getLeaderboard(),
    getCurrentParticipant(),
  ]);

  return (
    <main className="flex flex-1 flex-col items-center px-6 py-16 sm:py-20 max-w-2xl mx-auto w-full">
      <Link
        href="/surprise/quiz"
        className="mb-8 inline-flex items-center gap-1.5 self-start text-sm text-stone-400 transition-colors hover:text-[#D4AF62]"
      >
        <ArrowLeft className="size-4" />
        Retour aux stands
      </Link>

      <p className="text-xs uppercase tracking-[0.25em] text-stone-400 mb-3">Le grand quiz</p>
      <h1 className="font-serif text-4xl sm:text-5xl font-light text-foreground leading-snug mb-5 text-center">
        Classement
      </h1>
      <div className="w-12 h-px bg-stone-300 mb-10" />

      {leaderboard.length === 0 ? (
        <p className="text-stone-500 text-base leading-loose text-center">
          Personne n&apos;a encore répondu… Soyez les premiers&nbsp;!
        </p>
      ) : (
        <ol className="flex w-full flex-col gap-3">
          {leaderboard.map((entry, i) => {
            const isMe = entry.participantId === participant?.id;
            const rank = i + 1;
            return (
              <li
                key={entry.participantId}
                className={`flex items-center gap-4 rounded-2xl border px-5 py-4 ${
                  isMe
                    ? "border-[#D4AF62]/60 bg-[#D4AF62]/5"
                    : "border-stone-200 bg-white/90"
                }`}
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-stone-100 font-serif text-lg text-stone-600">
                  {rank === 1 ? (
                    <Crown className="size-4.5 text-[#D4AF62]" />
                  ) : rank === 2 || rank === 3 ? (
                    <Medal className={`size-4.5 ${rank === 2 ? "text-stone-400" : "text-amber-600"}`} />
                  ) : (
                    rank
                  )}
                </span>
                <div className="flex min-w-0 flex-1 flex-col">
                  <span className="truncate font-medium text-stone-700">
                    {entry.firstName} {entry.lastName}
                    {isMe && <span className="ml-2 text-xs text-[#D4AF62]">(vous)</span>}
                  </span>
                  <span className="text-xs text-stone-400">
                    {entry.answered} / {TOTAL_QUESTIONS} questions répondues
                  </span>
                </div>
                <span className="font-serif text-2xl font-light text-stone-800">
                  {entry.score}
                  <span className="text-sm text-stone-400"> pts</span>
                </span>
              </li>
            );
          })}
        </ol>
      )}
    </main>
  );
}
