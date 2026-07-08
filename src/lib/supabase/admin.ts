import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Client admin avec la clé service role : contourne les règles RLS.
// À utiliser UNIQUEMENT dans du code serveur (Server Components, Route
// Handlers, Server Actions) — l'import de "server-only" fait échouer le
// build si ce fichier est importé dans un composant client.
//
// Instanciation paresseuse : le client n'est créé qu'au premier appel,
// jamais au chargement du module (sinon le build échoue quand les
// variables d'environnement ne sont pas disponibles à ce moment-là).
let client: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient {
  if (!client) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !key) {
      throw new Error(
        "Variables d'environnement Supabase manquantes (NEXT_PUBLIC_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY)."
      );
    }
    client = createClient(url, key, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });
  }
  return client;
}
