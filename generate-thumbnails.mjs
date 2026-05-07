import ffmpeg from 'fluent-ffmpeg';
import ffmpegPath from 'ffmpeg-static';
import { readdirSync, mkdirSync, existsSync } from 'fs';
import { join, basename, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

ffmpeg.setFfmpegPath(ffmpegPath);

const VIDEOS_DIR = join(__dirname, 'public', 'videos');
const THUMBS_DIR = join(__dirname, 'public', 'videos', 'thumbnails');
const TIMESTAMP = '00:00:01'; // capture frame at 1 second

if (!existsSync(THUMBS_DIR)) {
  mkdirSync(THUMBS_DIR, { recursive: true });
}

const videoFiles = readdirSync(VIDEOS_DIR).filter(
  (f) => ['.mp4', '.mov', '.webm', '.mkv'].includes(extname(f).toLowerCase())
);

if (videoFiles.length === 0) {
  console.log('No video files found in public/videos/');
  process.exit(0);
}

console.log(`Generating thumbnails for ${videoFiles.length} video(s)...\n`);

function generateThumbnail(videoPath, outputPath, filename) {
  return new Promise((resolve, reject) => {
    ffmpeg(videoPath)
      .on('end', () => {
        console.log(`  ✓ ${filename}`);
        resolve();
      })
      .on('error', (err) => {
        console.error(`  ✗ ${filename}: ${err.message}`);
        reject(err);
      })
      .screenshots({
        timestamps: [TIMESTAMP],
        filename: basename(outputPath),
        folder: THUMBS_DIR,
      });
  });
}

let succeeded = 0;
let failed = 0;

for (const file of videoFiles) {
  const videoPath = join(VIDEOS_DIR, file);
  const thumbName = basename(file, extname(file)) + '.jpg';
  const thumbPath = join(THUMBS_DIR, thumbName);

  try {
    await generateThumbnail(videoPath, thumbPath, file);
    succeeded++;
  } catch {
    failed++;
  }
}

console.log(`\nDone: ${succeeded} succeeded, ${failed} failed.`);
console.log(`Thumbnails saved to: public/videos/thumbnails/`);