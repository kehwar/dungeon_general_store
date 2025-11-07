# PWA Icons

## Current Status

The project currently uses placeholder icons. These are simple SVG-based placeholders with the DGS logo.

## Generating Production Icons

To generate production-ready PWA icons, you can use one of these tools:

### Option 1: PWABuilder Image Generator

1. Visit https://www.pwabuilder.com/imageGenerator
2. Upload a 512x512 PNG image with your logo
3. Download the generated icons
4. Replace the files in this directory

### Option 2: Using sharp (Node.js)

Install sharp: `npm install --save-dev sharp`

Create a script to generate icons from your source SVG or PNG:

```javascript
const sharp = require('sharp')

async function generateIcons() {
  const sizes = [192, 512]

  for (const size of sizes) {
    await sharp('public/icon.svg')
      .resize(size, size)
      .png()
      .toFile(`public/icon-${size}x${size}.png`)
  }
}

generateIcons()
```

### Option 3: ImageMagick

```bash
# Install ImageMagick if not available
# Ubuntu/Debian: sudo apt-get install imagemagick
# macOS: brew install imagemagick

# Generate 192x192
convert -background none -resize 192x192 public/icon.svg public/icon-192x192.png

# Generate 512x512
convert -background none -resize 512x512 public/icon.svg public/icon-512x512.png
```

## Required Icons

- `icon-192x192.png` - Standard PWA icon
- `icon-512x512.png` - Large PWA icon (also used for maskable)
- `favicon.ico` - Browser favicon (optional but recommended)

## Design Guidelines

- Use simple, recognizable imagery
- Ensure icon works at small sizes (16px-48px)
- Consider maskable icon safe zone (80% of canvas)
- Use dungeon/shop theme colors: #2c1810, #1a0f0a, #6b4423, #ffd700
