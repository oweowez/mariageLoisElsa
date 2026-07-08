"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getSupabaseAdmin } from "@/lib/supabase/admin";
import { getQuestion } from "@/lib/quiz/questions";
import { PARTICIPANT_COOKIE, getCurrentParticipant } from "@/lib/quiz/db";
import { isSurpriseRevealed } from "@/lib/quiz/reveal";

export type RegisterState = { error?: string };

export async function registerParticipant(
  _prev: RegisterState,
  formData: FormData
): Promise<RegisterState> {
  if (!isSurpriseRevealed()) {
    return { error: "Le quiz n'est pas encore ouvert." };
  }

  const firstName = String(formData.get("firstName") ?? "").trim();
  const lastName = String(formData.get("lastName") ?? "").trim();

  if (!firstName || !lastName) {
    return { error: "Merci de renseigner votre prénom et votre nom." };
  }

  const { data, error } = await getSupabaseAdmin()
    .from("quiz_participants")
    .insert({ first_name: firstName, last_name: lastName })
    .select("id")
    .single();

  if (error || !data) {
    return { error: "Une erreur est survenue, réessayez dans un instant." };
  }

  const cookieStore = await cookies();
  cookieStore.set(PARTICIPANT_COOKIE, data.id, {
    httpOnly: true,
    sameSite: "lax",
    // Le cookie couvre largement le jour J
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
  });

  redirect("/surprise/quiz");
}

export type SubmitAnswerResult =
  | { ok: true; isCorrect: boolean; correctIndex: number }
  | { ok: false; error: string };

export async function submitAnswer(
  questionId: string,
  answerIndex: number
): Promise<SubmitAnswerResult> {
  if (!isSurpriseRevealed()) {
    return { ok: false, error: "Le quiz n'est pas encore ouvert." };
  }

  const participant = await getCurrentParticipant();
  if (!participant) {
    return { ok: false, error: "Session expirée, merci de vous réinscrire." };
  }

  const question = getQuestion(questionId);
  if (!question || answerIndex < 0 || answerIndex >= question.options.length) {
    return { ok: false, error: "Question invalide." };
  }

  const isCorrect = answerIndex === question.correctIndex;

  // insert simple : la contrainte unique empêche de répondre deux fois
  const { error } = await getSupabaseAdmin().from("quiz_answers").insert({
    participant_id: participant.id,
    stand_id: question.standId,
    question_id: question.id,
    answer_index: answerIndex,
    is_correct: isCorrect,
  });

  if (error) {
    if (error.code === "23505") {
      return { ok: false, error: "Vous avez déjà répondu à cette question." };
    }
    return { ok: false, error: "Une erreur est survenue, réessayez." };
  }

  return { ok: true, isCorrect, correctIndex: question.correctIndex };
}
