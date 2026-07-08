-- Schéma du quiz « surprise »
-- À exécuter dans le SQL Editor de Supabase (https://supabase.com/dashboard/project/zbfzwocwnqpomygtjeba/sql)

create table if not exists public.quiz_participants (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.quiz_answers (
  id uuid primary key default gen_random_uuid(),
  participant_id uuid not null references public.quiz_participants (id) on delete cascade,
  stand_id text not null,
  question_id text not null,
  answer_index integer not null,
  is_correct boolean not null,
  created_at timestamptz not null default now(),
  unique (participant_id, question_id)
);

create index if not exists quiz_answers_participant_idx
  on public.quiz_answers (participant_id);

-- RLS activé sans policy : seules les requêtes serveur (service role)
-- peuvent lire/écrire. La clé publique n'a aucun accès.
alter table public.quiz_participants enable row level security;
alter table public.quiz_answers enable row level security;
