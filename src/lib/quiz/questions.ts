import "server-only";
import type { StandId } from "./stands";

// Questions issues de public/QUESTIONS.xlsx.
// Ce fichier reste côté serveur (server-only) : les bonnes réponses ne sont
// jamais envoyées au navigateur. `correctIndex` désigne l'index (0 = A,
// 1 = B, 2 = C, 3 = D) de la bonne réponse dans `options`.

export type QuizQuestion = {
  id: string;
  standId: StandId;
  question: string;
  options: string[];
  correctIndex: number;
};

export const QUESTIONS: QuizQuestion[] = [
  // ── Haute-Savoie ──────────────────────────────────────────────
  {
    id: "haute-savoie-1",
    standId: "haute-savoie",
    question: "Qui est né en Haute-Savoie ?",
    options: ["Elsa", "Loïs", "Les deux", "Aucun"],
    correctIndex: 2,
  },
  {
    id: "haute-savoie-2",
    standId: "haute-savoie",
    question: "Quelle est notre station préférée ?",
    options: ["Saint Jean d'Aulps", "Avoriaz", "Châtel", "Les Gets"],
    correctIndex: 1,
  },
  {
    id: "haute-savoie-3",
    standId: "haute-savoie",
    question: "Quel est l'ingrédient secret que Elsa ajoute toujours dans sa raclette ?",
    options: ["Huile", "Beurre", "Crème fraîche", "Sel"],
    correctIndex: 2,
  },
  {
    id: "haute-savoie-4",
    standId: "haute-savoie",
    question: "Parmi les propositions suivantes, cochez l'affirmation vraie",
    options: [
      "On a déjà fait une descente en luge de nuit après une fondue bien trop arrosée",
      "On a été secourus par les pisteurs car on est restés bloqués sur un télésiège à la fermeture",
      "Elsa a perdu un gant dans un télésiège et a fini la journée avec une chaussette sur la main",
      "Loïs a déjà perdu un ski sur un télésiège",
    ],
    correctIndex: 3,
  },
  {
    id: "haute-savoie-5",
    standId: "haute-savoie",
    question:
      "Lequel de ces fromages est le « préféré absolu » de Loïs, celui qu'il pourrait manger au petit-déjeuner ?",
    options: [
      "Le Beaufort",
      "Le Reblochon bien coulant",
      "La Tome de Savoie",
      "Le Comté (qu'est-ce qu'il fait là lui ??)",
    ],
    correctIndex: 3,
  },
  {
    id: "haute-savoie-6",
    standId: "haute-savoie",
    question: "Quelle est la « pire » habitude de Loïs quand il va se baigner au lac, qui énerve Elsa ?",
    options: [
      "Il met 30 minutes à rentrer dans l'eau",
      "Il éclabousse Elsa dès qu'elle a fini de se coiffer",
      "Il saute dans l'eau sans s'être mouillé la nuque (Quel Thug !)",
      "Il oublie toujours sa serviette et finit par sécher « à l'air libre »",
    ],
    correctIndex: 2,
  },
  {
    id: "haute-savoie-7",
    standId: "haute-savoie",
    question: "Parmi ces affirmations, laquelle est vraie ?",
    options: [
      "Elsa a habité à Anthy",
      "Loïs et Elsa ont été dans la même classe pendant les 3 ans du lycée",
      "On n'a jamais dormi dans le bateau",
      "Elsa a eu le permis avant Loïs",
    ],
    correctIndex: 3,
  },

  // ── Famille ───────────────────────────────────────────────────
  {
    id: "famille-1",
    standId: "famille",
    question: "Qui a rencontré la belle-famille en premier ?",
    options: ["Loïs", "Elsa"],
    correctIndex: 1,
  },
  {
    id: "famille-2",
    standId: "famille",
    question: "Premier voyage de Lolo avec la belle-famille : trouvez la bonne réponse",
    options: [
      "Il a lancé un débat sans le vouloir, ce qui a valu une dispute entre les parents d'Elsa",
      "Il a fait semblant d'aimer un plat et il a dû en re-manger plusieurs fois",
      "Toutes les valises ont disparu le 1er jour avec la voiture de location qui s'était retrouvée à la fourrière après un stationnement sur une place de police",
      "Il a participé à une tradition familiale et a fait semblant d'aimer, ce que toute la famille a fini par comprendre au bout de 5 min",
    ],
    correctIndex: 2,
  },
  {
    id: "famille-3",
    standId: "famille",
    question: "Qui est officiellement le plus « mauvais joueur » lors des soirées jeux de société ?",
    options: ["Karine", "Elsa", "Loïs", "Nathalie"],
    correctIndex: 0,
  },
  {
    id: "famille-4",
    standId: "famille",
    question: "Trouvez la liste où se trouve 1 intrus (animaux de la famille)",
    options: [
      "Chakra, Taïga, Daphnée, Rouky, Martha",
      "Ruby, Tonka, Minette, Eliot, Tina",
      "Ben, Bidoum, Mimi, Léon, Liner",
      "Rox, Cheveyo, Bidounette, Plume, Cookie",
    ],
    correctIndex: 0,
  },
  {
    id: "famille-5",
    standId: "famille",
    question: "Quelle loi n'existe pas ?",
    options: [
      "Chacun s'assoit toujours à la même place à table",
      "La personne qui finit le plat débarrasse la table",
      "Un repas sans photo est impossible",
      "Tous les surnoms sont autorisés",
    ],
    correctIndex: 1,
  },
  {
    id: "famille-6",
    standId: "famille",
    question: "Quel est le moment de panique d'Elsa et Loïs avant un repas préparé pour la famille ?",
    options: [
      "Que Tonka ait mangé le plat",
      "Qu'Elsa ait oublié la moitié des ingrédients",
      "Que Loïs oublie l'entrée dans le four",
      "Aucun, on est les rois de l'organisation",
    ],
    correctIndex: 3,
  },
  {
    id: "famille-7",
    standId: "famille",
    question: "Quelle affirmation est fausse ?",
    options: [
      "On préfère une bonne rando à un bon restau (Famille Mathieu)",
      "Avec les Le Reun, on balade les chats en laisse",
      "Chez les Broquet, on se dispute le prix de la meilleure pizza",
      "Chez les chats des Le Reun, Loïs préfère Rox et Elsa Ruby",
    ],
    correctIndex: 3,
  },

  // ── Voyage ────────────────────────────────────────────────────
  {
    id: "voyage-1",
    standId: "voyage",
    question: "En quelle année sommes-nous allés en Espagne ?",
    options: ["2021", "2022", "2023", "2024"],
    correctIndex: 1,
  },
  {
    id: "voyage-2",
    standId: "voyage",
    question: "En norvégien, que veut dire « dørene lukkes » (phrase préférée d'Elsa) ?",
    options: ["Où sont les toilettes ?", "Ça coûte combien ?", "Fermeture des portes", "Santé"],
    correctIndex: 2,
  },
  {
    id: "voyage-3",
    standId: "voyage",
    question: "Dans quel pays nous sommes-nous rencontrés ?",
    options: ["Italie", "Espagne", "France", "Allemagne"],
    correctIndex: 3,
  },
  {
    id: "voyage-4",
    standId: "voyage",
    question: "Dans quelle ville ne sommes-nous jamais allés en vacances entre amis ?",
    options: ["Cannes", "Marseille", "Cap d'Agde", "Bayonne"],
    correctIndex: 1,
  },
  {
    id: "voyage-5",
    standId: "voyage",
    question: "Quelle a été notre destination préférée en Norvège ?",
    options: ["Bergen", "Lofoten", "Oslo", "Tromsø"],
    correctIndex: 1,
  },
  {
    id: "voyage-6",
    standId: "voyage",
    question: "Quel a été notre premier voyage en amoureux ?",
    options: ["Berlin", "Madrid", "Rome", "Paris"],
    correctIndex: 2,
  },
  {
    id: "voyage-7",
    standId: "voyage",
    question: "Quel est notre pays préféré pour la nourriture ?",
    options: ["France", "Espagne", "Italie", "Norvège"],
    correctIndex: 0,
  },

  // ── Amis ──────────────────────────────────────────────────────
  {
    id: "amis-1",
    standId: "amis",
    question:
      "Quel est le jeu qu'ils avaient chez eux dans leur appart à Grenoble, auquel ils jouaient tout le temps en soirée avec les copains ?",
    options: ["Babyfoot", "Fléchettes", "Touché bourré", "Air hockey / hockey sur table"],
    correctIndex: 1,
  },
  {
    id: "amis-2",
    standId: "amis",
    question: "En quelle année sont-ils partis en vacances à Tarnos / Bayonne avec les copains ?",
    options: ["2022", "2023", "2024", "2025"],
    correctIndex: 2,
  },
  {
    id: "amis-3",
    standId: "amis",
    question: "Quel est le jeu traditionnel de chaque vacances avec les zinzinois ?",
    options: ["Loup-Garou", "Le pouilleux", "La pyramide", "Undercover"],
    correctIndex: 3,
  },
  {
    id: "amis-4",
    standId: "amis",
    question: "Combien de 31 ont été organisés chez Lolo ?",
    options: ["6", "3", "5", "4"],
    correctIndex: 0,
  },
  {
    id: "amis-5",
    standId: "amis",
    question: "Quel gigantesque gâteau était présent pour la soirée de nos 20 ans ?",
    options: ["Un fraisier", "Un opéra", "Une forêt noire", "Un tiramisu"],
    correctIndex: 2,
  },
  {
    id: "amis-6",
    standId: "amis",
    question: "Lors de nos pool party, où sont rangées les boissons ?",
    options: [
      "Dans une brouette remplie de glaçons",
      "Dans des glacières",
      "Dans un bassin",
      "Dans un tonneau",
    ],
    correctIndex: 3,
  },
  {
    id: "amis-7",
    standId: "amis",
    question: "Qu'est-ce qu'on n'a jamais fait en boîte entre zouz ?",
    options: [
      "Prendre le micro",
      "Danser sur les podiums",
      "Faire une soirée mousse",
      "Avoir une table VIP",
    ],
    correctIndex: 0,
  },

  // ── Sport ─────────────────────────────────────────────────────
  {
    id: "sport-1",
    standId: "sport",
    question: "Quelle est la plus grosse gaffe que l'on ait faite lors d'une sortie en voilier sur le lac ?",
    options: [
      "Avoir fait tomber son téléphone dans l'eau en voulant prendre un selfie",
      "Avoir oublié de détacher l'amarre au moment de démarrer",
      "Avoir vomi par-dessus bord après avoir abusé sur l'apéro",
      "Avoir talonné la quille en allant voir de trop près la plage nudiste",
    ],
    correctIndex: 1,
  },
  {
    id: "sport-2",
    standId: "sport",
    question: "Quel est le niveau de cheval d'Elsa (officiellement) ?",
    options: ["Galop 3", "Galop 8", "Galop 5", "Galop 4"],
    correctIndex: 3,
  },
  {
    id: "sport-3",
    standId: "sport",
    question: "Parmi les actions suivantes, laquelle est vraie concernant Loïs à cheval ?",
    options: [
      "Galoper sur la plage",
      "Sauter un tronc",
      "Se faire éjecter dans une flaque de boue",
      "Trébucher dans le box plein de crottins",
    ],
    correctIndex: 1,
  },
  {
    id: "sport-4",
    standId: "sport",
    question: "Quel est l'objet indispensable qu'on oublie systématiquement avant de partir en voilier ?",
    options: ["De l'eau", "L'apéro", "La crème solaire", "L'enceinte"],
    correctIndex: 0,
  },
  {
    id: "sport-5",
    standId: "sport",
    question: "Qui de nous deux a fait des cours de gym plus jeune ?",
    options: ["Elsa", "Loïs", "Les deux", "Aucun"],
    correctIndex: 2,
  },
  {
    id: "sport-6",
    standId: "sport",
    question: "En quelle année Loïs a commencé le hockey ?",
    options: ["2010", "2007", "2012", "2015"],
    correctIndex: 0,
  },
  {
    id: "sport-7",
    standId: "sport",
    question: "Quel était notre jour habituel de running à Grenoble ?",
    options: ["Jeudi soir (Barathon)", "Dimanche", "Mercredi", "Vendredi"],
    correctIndex: 1,
  },

  // ── Jeux ──────────────────────────────────────────────────────
  {
    id: "jeux-1",
    standId: "jeux",
    question:
      "Combien de fois environ par semaine Elsa & Loïs jouent-ils aux jeux de société ? (seuls ou à plusieurs)",
    options: ["4x", "3x", "5x", "2x"],
    correctIndex: 0,
  },
  {
    id: "jeux-2",
    standId: "jeux",
    question: "Quel est leur jeu préféré pour jouer à 2 sur la Switch ?",
    options: ["Mario Bros", "Mario Kart", "Mario Party", "It Takes Two"],
    correctIndex: 2,
  },
  {
    id: "jeux-3",
    standId: "jeux",
    question: "Quel est le plus mauvais perdant ?",
    options: ["Lolo", "Sasa", "Les 2", "Aucun"],
    correctIndex: 2,
  },
  {
    id: "jeux-4",
    standId: "jeux",
    question: "Quel est le jeu auquel on a joué le plus en famille ces dernières années ?",
    options: ["Skyjo", "Uno", "Qwixx", "Ligretto"],
    correctIndex: 0,
  },
  {
    id: "jeux-5",
    standId: "jeux",
    question: "Quelle est la particularité d'Elsa lorsque l'on va jouer au bowling ?",
    options: [
      "Elle prend tout le temps les barrières",
      "Elle ne joue que si elle a un spritz",
      "Elle nettoie chacune des boules qu'elle va utiliser",
      "Elle fait un mouvement de balance 5 ou 6 fois avec la boule avant de tirer",
    ],
    correctIndex: 3,
  },
  {
    id: "jeux-6",
    standId: "jeux",
    question: "Quelle est la plupart du temps la récompense des apéro olympiades de jeux de société ?",
    options: [
      "Un bon restau payé par le perdant",
      "La vaisselle à faire par le perdant",
      "1 massage complet",
      "Le perdant fait le repas",
    ],
    correctIndex: 1,
  },
  {
    id: "jeux-7",
    standId: "jeux",
    question: "Quel est le plus grand tic de Loïs lorsqu'il commence à perdre une partie de jeu de société ?",
    options: [
      "Il recompte discrètement les points des autres pour vérifier s'il n'y a pas triche",
      "Il commence à relire le livret de règles pour trouver une faille",
      "Il soupire en disant « De toute façon ce jeu est basé sur le hasard »",
      "Il propose d'arrêter la partie pour « aller chercher à boire »",
    ],
    correctIndex: 2,
  },
];

export function getQuestionsForStand(standId: string) {
  return QUESTIONS.filter((q) => q.standId === standId);
}

export function getQuestion(questionId: string) {
  return QUESTIONS.find((q) => q.id === questionId);
}
