# Dungeon General Store

A minimalist, input-driven management game where you run a cozy dungeon-town shop, shape spawns as secret DM, trade everything, and guide delvers' fates.

## Technology Stack

- **Framework**: Nuxt 4
- **Game Engine**: Phaser 3
- **Database**: Firebase Firestore
- **PWA**: PWABuilder (via @vite-pwa/nuxt)
- **Language**: TypeScript

## Setup

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env` file in the root directory with your Firebase configuration:

```env
NUXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NUXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NUXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Production

```bash
npm run preview
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run generate` - Generate static site
- `npm run preview` - Preview production build
- `npm run lint` - Lint code
- `npm run lint:fix` - Lint and fix code
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Run tests with coverage
- `npm run typecheck` - Type check TypeScript

## Project Structure

```
dungeon_general_store/
├── .github/              # GitHub workflows and config
│   └── copilot-instructions.md
├── app/                  # Nuxt app directory
│   ├── assets/          # Game assets (sprites, sounds, etc.)
│   ├── components/      # Vue components
│   ├── composables/     # Vue composables for shared logic
│   ├── game/            # Phaser game code
│   ├── pages/          # Nuxt pages/routes
│   ├── plugins/        # Nuxt plugins (Firebase, Phaser)
│   └── utils/          # Utility functions
├── server/              # Nuxt server directory
│   ├── api/            # API endpoints
│   └── utils/          # Server utilities
├── public/              # Static assets
└── tests/              # Test files
```

## Game Concept

Run a cozy dungeon-town shop where adventurers come to buy and sell goods. As the shopkeeper, you'll:

- **Manage Inventory**: Buy low, sell high, and keep your shelves stocked
- **Secret DM Mode**: Secretly influence dungeon spawns and encounters
- **Guide Fates**: Your pricing and availability affect which delvers succeed or fail
- **Build Relationships**: Form connections with recurring adventurers
- **Make Tough Choices**: Profit vs. morality in a dangerous world

### Core Gameplay Loop

1. Delvers visit your shop to prepare for dungeon runs
2. You set prices and manage what's available
3. As secret DM, you influence what they'll face
4. Delvers return with loot (or don't return at all)
5. Your choices affect the town's economy and delver survival

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

MIT
