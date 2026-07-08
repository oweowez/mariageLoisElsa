import "server-only";
import { createClient } from "@supabase/supabase-js";

// Client admin avec la clé service role : contourne les règles RLS.
// À utiliser UNIQUEMENT dans du code serveur (Server Components, Route
// Handlers, Server Actions) — l'import de "server-only" fait échouer le
// build si ce fichier est importé dans un composant client.
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
);
