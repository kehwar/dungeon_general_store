# Dungeon General Store

A minimalist, offline-first management game where you run a cozy dungeon-town shop, shape spawns as a secret DM, trade everything, and guide delvers' fates.

## Key Features

- 🎮 **Fully Offline**: Play anywhere, anytime - no internet required
- 🏪 **Shop Management**: Run your own dungeon supply shop
- 🎲 **Secret DM Mode**: Shape dungeon encounters and delver fates
- 💼 **Trade Everything**: Dynamic economy and bartering system
- 📱 **Progressive Web App**: Install and play like a native app
- ☁️ **Optional Cloud Sync**: Bring your own Firebase backend for cloud saves (BYOB)

## Architecture

This game is designed **offline-first** with all core functionality working without internet connectivity. Optional cloud sync and future multiplayer features are built on a solid foundation of local-first architecture with serializable state and efficient synchronization patterns.

## Development

### Prerequisites

- Node.js 20+ and npm 10+

### Setup

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev

# Run tests
npm test

# Run linting
npm run lint

# Build for production
npm run generate
```

### Project Structure

- `app/` - Main application code (pages, components, composables)
- `public/` - Static assets
- `tests/` - Unit and integration tests
- `.output/public/` - Generated static site (after running `npm run generate`)

## Deployment

This project is designed to be deployed to **GitHub Pages** as a static site. The game runs entirely in the browser with no server requirements.

### Cloud Storage (Optional)

Firebase/Firestore integration is **completely optional** and implemented as a final step. Users who want cloud backup or multiplayer features can bring their own Firebase credentials (BYOB - Bring Your Own Backend). The game is fully functional without any backend configuration.
