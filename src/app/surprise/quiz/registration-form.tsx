"use client";

import { useActionState } from "react";
import { Loader2 } from "lucide-react";
import { registerParticipant, type RegisterState } from "./actions";

export function RegistrationForm() {
  const [state, formAction, pending] = useActionState<RegisterState, FormData>(
    registerParticipant,
    {}
  );

  return (
    <form action={formAction} className="w-full max-w-sm flex flex-col gap-4">
      <div className="flex flex-col gap-1.5 text-left">
        <label htmlFor="firstName" className="text-xs uppercase tracking-[0.2em] text-stone-400">
          Prénom
        </label>
        <input
          id="firstName"
          name="firstName"
          required
          autoComplete="given-name"
          placeholder="Votre prénom"
          className="rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-700 outline-none transition-colors focus:border-[#D4AF62] focus:ring-2 focus:ring-[#D4AF62]/20"
        />
      </div>

      <div className="flex flex-col gap-1.5 text-left">
        <label htmlFor="lastName" className="text-xs uppercase tracking-[0.2em] text-stone-400">
          Nom
        </label>
        <input
          id="lastName"
          name="lastName"
          required
          autoComplete="family-name"
          placeholder="Votre nom"
          className="rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-700 outline-none transition-colors focus:border-[#D4AF62] focus:ring-2 focus:ring-[#D4AF62]/20"
        />
      </div>

      {state.error && (
        <p className="text-sm text-red-500 text-left">{state.error}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-stone-800 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-700 disabled:opacity-60"
      >
        {pending && <Loader2 className="size-4 animate-spin" />}
        C&apos;est parti&nbsp;!
      </button>
    </form>
  );
}
