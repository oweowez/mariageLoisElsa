import { createClient } from "@supabase/supabase-js";

// Client Supabase utilisable côté client comme côté serveur (lecture/écriture
// soumises aux règles RLS du projet).
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
);
