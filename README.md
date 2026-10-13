
# Hadith Motion - Remotion 4K 9:16

Ratio: 9:16, Resolution: 2160x3840 (4K), FPS 30, Duration ~90s
No emoji, Vector/SVG based design.

## Structure (flat as requested)
- Root.tsx -> entry
- HadithVideo.tsx -> main composition
- BackgroundVectors.tsx -> all SVG vectors (crescent, stars, Kaaba silhouette)
- SubtitleEngine.tsx -> kinetic typography from Captions.ts
- Captions.ts -> parsed from hadith_audio_transcription.txt
- logo.png, google-play-badge.png, audio.mp3, captions.srt -> assets
- .github/workflows/render.yml -> Remotion + ffmpeg auto render

## How to run locally
```bash
npm install
npx remotion browser ensure
npm run dev
# then open studio and play HadithStory
```

## Replace audio
Replace `audio.mp3` in project root with your real voiceover (must be 90s long or update durationInFrames in Root.tsx = seconds*30).
Transcription already synced in Captions.ts.

## GitHub Action
Push to main -> Action will:
1. install ffmpeg
2. install node deps
3. render 4K 9:16 mp4
4. upload artifact

If you want props: use workflow_dispatch with JSON input.

## Design rules followed
- No emoji used anywhere
- All decorative elements are SVG vector (crescent path, star icons, progress bar)
- Logo and Play Badge used as Img but wrapped in vector styled containers
- Text in Noto Sans Bengali, vector borders
- 4K safe zones respected
