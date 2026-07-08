// Le quiz est dévoilé le 8 juillet 2026 à 11h15, heure de Paris.
// En juillet, Paris est en heure d'été (UTC+2) → 09h15 UTC.
export const REVEAL_TIMESTAMP = Date.UTC(2026, 6, 8, 9, 15, 0);

export function isSurpriseRevealed() {
  return Date.now() >= REVEAL_TIMESTAMP;
}
