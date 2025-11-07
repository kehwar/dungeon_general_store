# Copilot Instructions for Dungeon General Store

## Project Overview

Dungeon General Store is a minimalist, input-driven management game where players run a cozy dungeon-town shop, shape spawns as a secret DM, trade everything, and guide delvers' fates.

## Technology Stack

- **Framework**: Nuxt 4 (Vue 3-based full-stack framework)
- **Game Engine**: Phaser (for web game rendering and game logic)
- **Database**: Firebase Firestore (NoSQL cloud database)
- **PWA**: PWABuilder (Progressive Web App capabilities)
- **Language**: TypeScript
- **Package Manager**: npm

## Project Structure

```
dungeon_general_store/
├── .github/              # GitHub workflows and config
├── app/                  # Nuxt app directory
│   ├── assets/          # Game assets (sprites, sounds, etc.)
│   ├── components/      # Vue components
│   ├── composables/     # Vue composables for shared logic
│   ├── game/            # Phaser game code
│   │   ├── scenes/     # Game scenes
│   │   ├── entities/   # Game entities (shop, items, NPCs)
│   │   └── config.ts   # Phaser configuration
│   ├── pages/          # Nuxt pages/routes
│   ├── plugins/        # Nuxt plugins (Firebase, Phaser)
│   └── utils/          # Utility functions
├── server/              # Nuxt server directory
│   ├── api/            # API endpoints
│   └── utils/          # Server utilities
├── public/              # Static assets
└── firebase/            # Firebase configuration
```

## Coding Guidelines

### General Principles

1. **Minimalist Design**: Keep code simple and focused. Avoid over-engineering.
2. **Type Safety**: Use TypeScript throughout. Define proper types and interfaces.
3. **Composition API**: Use Vue 3 Composition API with `<script setup>` syntax.
4. **Responsive Design**: Ensure the game works on mobile and desktop.
5. **Performance**: Optimize for web performance (lazy loading, code splitting).

### Game Development

1. **Phaser Integration**:
   - Use Phaser 3 for game rendering
   - Keep game logic separate from Vue components
   - Use events to communicate between Phaser and Vue
2. **Game State Management**:
   - Use composables for shared game state
   - Persist important state to Firestore
3. **Input-Driven**:
   - Focus on keyboard and touch input
   - Minimize unnecessary UI chrome

### Firebase/Firestore

1. **Data Structure**:
   - Design flat, denormalized collections for performance
   - Use subcollections sparingly
2. **Security**:
   - Never expose Firebase config secrets
   - Use environment variables for sensitive data
   - Implement proper Firestore security rules
3. **Real-time Updates**:
   - Use Firestore listeners for real-time game state
   - Handle offline scenarios gracefully

### PWA Best Practices

1. **Offline Support**: Ensure core gameplay works offline
2. **Install Prompts**: Implement smart install prompts
3. **Service Worker**: Use Nuxt PWA module for service worker generation
4. **App Manifest**: Configure proper icons, theme colors, and display mode

### Testing

1. **Unit Tests**: Test composables and utility functions
2. **Component Tests**: Test Vue components with Vitest
3. **E2E Tests**: Test critical user flows
4. **Game Logic Tests**: Test game mechanics separately from rendering

### Code Style

1. **Formatting**: Use Prettier with default settings
2. **Linting**: Follow ESLint rules configured in the project
3. **Naming Conventions**:
   - Components: PascalCase (e.g., `ShopInventory.vue`)
   - Composables: camelCase with `use` prefix (e.g., `useShopInventory.ts`)
   - Files: kebab-case for most files
   - Constants: UPPER_SNAKE_CASE

### Git Workflow

1. **Commits**: Write clear, descriptive commit messages
2. **Branches**: Use feature branches for new functionality
3. **PRs**: Include description of changes and testing done

## Game-Specific Guidelines

### Shop Management

- Keep inventory system flexible for various item types
- Support trading mechanics (buying, selling, bartering)
- Track shop reputation and customer relationships

### Dungeon Master Mode

- Secret DM controls should feel powerful but balanced
- Spawn system should be configurable and interesting
- Track consequences of DM choices

### Delver System

- NPCs should have persistent traits and histories
- Quest outcomes should impact shop dynamics
- Death/failure should have meaningful consequences

## Dependencies Management

- Keep dependencies up to date
- Prefer well-maintained, popular packages
- Document why each dependency is needed

## Performance Considerations

- Lazy load Phaser and heavy game assets
- Use dynamic imports for code splitting
- Optimize images and compress assets
- Implement loading states for async operations

## Accessibility

- Provide keyboard navigation for all UI
- Use semantic HTML elements
- Include ARIA labels where appropriate
- Support screen readers where feasible

## When Working with Copilot

1. Be explicit about game mechanics when requesting features
2. Specify if changes affect game logic, UI, or both
3. Mention if Firestore schema changes are needed
4. Indicate if new assets or resources are required
5. State if changes impact offline functionality
