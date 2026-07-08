import "server-only";
import { cookies } from "next/headers";
import { getSupabaseAdmin } from "@/lib/supabase/admin";

export const PARTICIPANT_COOKIE = "quiz_participant_id";

export type Participant = {
  id: string;
  first_name: string;
  last_name: string;
};

export type Answer = {
  stand_id: string;
  question_id: string;
  answer_index: number;
  is_correct: boolean;
};

export async function getCurrentParticipant(): Promise<Participant | null> {
  const cookieStore = await cookies();
  const id = cookieStore.get(PARTICIPANT_COOKIE)?.value;
  if (!id) return null;

  const { data } = await getSupabaseAdmin()
    .from("quiz_participants")
    .select("id, first_name, last_name")
    .eq("id", id)
    .maybeSingle();

  return data;
}

export async function getAnswers(participantId: string): Promise<Answer[]> {
  const { data, error } = await getSupabaseAdmin()
    .from("quiz_answers")
    .select("stand_id, question_id, answer_index, is_correct")
    .eq("participant_id", participantId);

  if (error) throw new Error(error.message);
  return data ?? [];
}

export type LeaderboardEntry = {
  participantId: string;
  firstName: string;
  lastName: string;
  score: number;
  answered: number;
};

export async function getLeaderboard(): Promise<LeaderboardEntry[]> {
  const { data, error } = await getSupabaseAdmin()
    .from("quiz_participants")
    .select("id, first_name, last_name, quiz_answers(is_correct)");

  if (error) throw new Error(error.message);

  return (data ?? [])
    .map((p) => {
      const answers = (p.quiz_answers ?? []) as { is_correct: boolean }[];
      return {
        participantId: p.id,
        firstName: p.first_name,
        lastName: p.last_name,
        score: answers.filter((a) => a.is_correct).length,
        answered: answers.length,
      };
    })
    .filter((p) => p.answered > 0)
    .sort((a, b) => b.score - a.score || a.answered - b.answered);
}
