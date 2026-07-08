// Métadonnées publiques des stands (pas de réponses ici, ce fichier est
// importable côté client).

export const STANDS = [
  {
    id: "haute-savoie",
    name: "Haute-Savoie",
    description: "Leur région de cœur, entre lacs et montagnes.",
    icon: "mountain",
  },
  {
    id: "famille",
    name: "Famille",
    description: "Ceux qui les connaissent depuis toujours.",
    icon: "heart",
  },
  {
    id: "voyage",
    name: "Voyage",
    description: "Leurs aventures aux quatre coins du monde.",
    icon: "plane",
  },
  {
    id: "amis",
    name: "Amis",
    description: "Les complices de toutes leurs bêtises.",
    icon: "users",
  },
  {
    id: "sport",
    name: "Sport",
    description: "Transpiration, compétition et mauvaise foi.",
    icon: "dumbbell",
  },
  {
    id: "jeux",
    name: "Jeux",
    description: "Soirées jeux, cartes et parties acharnées.",
    icon: "dices",
  },
] as const;

export type StandId = (typeof STANDS)[number]["id"];

export const QUESTIONS_PER_STAND = 7;
export const TOTAL_QUESTIONS = STANDS.length * QUESTIONS_PER_STAND;

export function getStand(standId: string) {
  return STANDS.find((s) => s.id === standId);
}
