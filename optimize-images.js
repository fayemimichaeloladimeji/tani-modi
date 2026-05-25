import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const TARGET_DIRS = ["public/menu-images", "public/hero-section-images"];
const MAX_WIDTH = 1600;
const MAX_HEIGHT = 1200;
const QUALITY = 80;
const SUPPORTED_EXTENSIONS = [".jpg", ".jpeg", ".png"];

async function compressImage(filePath) {
  const extension = path.extname(filePath).toLowerCase();
  if (!SUPPORTED_EXTENSIONS.includes(extension)) return false;

  const outputFile = filePath.replace(/\.(jpe?g|png)$/i, ".webp");

  try {
    await sharp(filePath)
      .rotate()
      .resize({
        width: MAX_WIDTH,
        height: MAX_HEIGHT,
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({ quality: QUALITY })
      .toFile(outputFile);

    console.log(`Compressed: ${path.relative(process.cwd(), filePath)} → ${path.relative(process.cwd(), outputFile)}`);
    return true;
  } catch (error) {
    console.error(`Failed to compress ${filePath}:`, error.message);
    return false;
  }
}

async function walkDirectory(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  let count = 0;

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      count += await walkDirectory(fullPath);
      continue;
    }

    const compressed = await compressImage(fullPath);
    if (compressed) count += 1;
  }

  return count;
}

async function main() {
  let totalCompressed = 0;

  for (const dir of TARGET_DIRS) {
    const targetPath = path.resolve(process.cwd(), dir);
    try {
      const stat = await fs.stat(targetPath);
      if (!stat.isDirectory()) {
        console.warn(`Skipping ${dir}: not a directory`);
        continue;
      }
    } catch {
      console.warn(`Skipping ${dir}: directory not found`);
      continue;
    }

    console.log(`Optimizing images in ${dir}...`);
    totalCompressed += await walkDirectory(targetPath);
  }

  console.log(`\nOptimization complete. ${totalCompressed} image(s) converted to WebP.`);
  console.log("Original JPEG/PNG files are preserved alongside the new WebP files.");
}

main().catch((error) => {
  console.error("Image optimization failed:", error);
  process.exit(1);
});
