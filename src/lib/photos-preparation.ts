import fs from "node:fs"
import path from "node:path"

const PHOTOS_DIR = path.join(process.cwd(), "public/photos_preparation")

export function getPreparationPhotos(): string[] {
  if (!fs.existsSync(PHOTOS_DIR)) return []

  return fs
    .readdirSync(PHOTOS_DIR)
    .filter((file) => /\.(jpe?g|png|webp|gif)$/i.test(file))
    .sort()
    .map((file) => `/photos_preparation/${file}`)
}
