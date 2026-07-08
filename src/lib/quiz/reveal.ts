// Le quiz est dévoilé le 18 juillet 2026 à 16h00, heure de Paris.
// En juillet, Paris est en heure d'été (UTC+2) → 14h00 UTC.
export const REVEAL_TIMESTAMP = Date.UTC(2026, 6, 18, 14, 0, 0);

export function isSurpriseRevealed() {
  return Date.now() >= REVEAL_TIMESTAMP;
}
