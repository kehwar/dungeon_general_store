# Copilot Instructions for Dungeon General Store

## Project Overview

Dungeon General Store is a minimalist, input-driven management game where players run a cozy dungeon-town shop, shape spawns as a secret DM, trade everything, and guide delvers' fates.

## Technology Stack

- **Framework**: Nuxt 4 (Vue 3-based full-stack framework)
- **Game Engine**: Phaser 3 (for web game rendering and game logic)
- **Database**: Firebase Firestore (NoSQL cloud database)
- **PWA**: PWABuilder via @vite-pwa/nuxt (Progressive Web App capabilities)
- **Language**: TypeScript (strict mode)
- **Package Manager**: npm

## Implementation Plan

### Phase 1: Project Foundation (Week 1)

#### 1.1 Initial Setup
- [ ] Initialize Nuxt 4 project with TypeScript
- [ ] Configure package.json with all required dependencies
- [ ] Set up .gitignore for Node.js/Nuxt projects
- [ ] Create basic project structure (app/, server/, public/ directories)

#### 1.2 Development Tools
- [ ] Configure ESLint with Nuxt recommended settings
- [ ] Set up Prettier for code formatting
- [ ] Configure TypeScript with strict mode
- [ ] Set up Vitest for unit testing with happy-dom

#### 1.3 CI/CD Pipeline
- [ ] Create GitHub Actions workflow for:
  - Automated linting (ESLint)
  - Automated testing (Vitest)
  - Type checking (TypeScript)
  - Build verification
  - Security scanning (CodeQL)
- [ ] Configure proper GitHub token permissions
- [ ] Add dependency installation with --legacy-peer-deps if needed

### Phase 2: Core Infrastructure (Week 2)

#### 2.1 Styling & UI Framework
- [ ] Install and configure Tailwind CSS
- [ ] Create custom color palette (dungeon theme)
- [ ] Set up base CSS with theme variables
- [ ] Create layout components

#### 2.2 Firebase Integration
- [ ] Install Firebase SDK (v11+)
- [ ] Create Firebase client plugin
- [ ] Set up environment variables template (.env.example)
- [ ] Configure Firestore initialization
- [ ] Design initial Firestore collections schema:
  - shops (shop state, inventory, reputation)
  - delvers (NPC data, traits, history)
  - items (item catalog with properties)
  - runs (dungeon run records)

#### 2.3 PWA Configuration
- [ ] Install and configure @vite-pwa/nuxt
- [ ] Create PWA manifest with app metadata
- [ ] Configure service worker for offline support
- [ ] Generate or create placeholder PWA icons (192x192, 512x512)
- [ ] Set up offline fallback strategies

### Phase 3: Game Engine Setup (Week 3)

#### 3.1 Phaser Integration
- [ ] Install Phaser 3 (v3.87+)
- [ ] Create Phaser game configuration (app/game/config.ts)
- [ ] Set up game container component
- [ ] Create useGame composable for lifecycle management
- [ ] Configure game canvas sizing and responsiveness

#### 3.2 Core Game Scenes
- [ ] Create MainScene (game entry point)
- [ ] Create ShopScene (shop management interface)
- [ ] Create DMControlScene (dungeon master panel)
- [ ] Create InventoryScene (item management)
- [ ] Set up scene transitions and state passing

#### 3.3 Game Asset Management
- [ ] Set up asset loading system
- [ ] Create asset directory structure
- [ ] Implement lazy loading for game assets
- [ ] Add loading screens/states

### Phase 4: Game Mechanics - Shop System (Week 4-5)

#### 4.1 Inventory System
- [ ] Design item type system (weapons, armor, potions, etc.)
- [ ] Create Item class/interface with properties
- [ ] Implement inventory storage (Firestore + local state)
- [ ] Build inventory UI component
- [ ] Add item sorting and filtering

#### 4.2 Trading Mechanics
- [ ] Implement buy/sell system
- [ ] Create pricing algorithm (supply/demand)
- [ ] Add bartering/negotiation mechanics
- [ ] Build transaction history
- [ ] Create shop UI for customer interactions

#### 4.3 Shop Management
- [ ] Implement shop reputation system
- [ ] Track customer relationships
- [ ] Add shop upgrade system
- [ ] Create shop customization options
- [ ] Build shop statistics dashboard

### Phase 5: Game Mechanics - Delver System (Week 6-7)

#### 5.1 NPC Delvers
- [ ] Create Delver class with traits and stats
- [ ] Implement NPC generation system
- [ ] Add personality/behavior patterns
- [ ] Build delver profile UI
- [ ] Track delver relationships with shop

#### 5.2 Quest System
- [ ] Design quest structure and types
- [ ] Create quest generation system
- [ ] Implement quest progression tracking
- [ ] Add quest rewards/consequences
- [ ] Build quest log UI

#### 5.3 Delver Progression
- [ ] Track delver experience and levels
- [ ] Implement equipment effects on success rates
- [ ] Add permadeath/failure consequences
- [ ] Create delver history/memorial system

### Phase 6: Game Mechanics - DM Mode (Week 8-9)

#### 6.1 Spawn Control System
- [ ] Create monster/encounter database
- [ ] Build spawn configuration interface
- [ ] Implement difficulty scaling
- [ ] Add encounter templates
- [ ] Create DM control panel UI

#### 6.2 Consequence System
- [ ] Track DM choices and their effects
- [ ] Implement karma/balance system
- [ ] Add story event triggers
- [ ] Create consequence visualization
- [ ] Build moral choice system

#### 6.3 Secret DM Features
- [ ] Implement hidden influence mechanics
- [ ] Add subtle UI hints (not revealing DM role)
- [ ] Create achievement system for DM choices
- [ ] Build DM statistics tracking

### Phase 7: Game Loop & Polish (Week 10-11)

#### 7.1 Core Game Loop
- [ ] Implement day/night cycle or time system
- [ ] Add customer visit patterns
- [ ] Create event system (random/scheduled)
- [ ] Build save/load system (Firestore)
- [ ] Add auto-save functionality

#### 7.2 UI/UX Polish
- [ ] Create consistent UI theme
- [ ] Add animations and transitions
- [ ] Implement sound effects (optional)
- [ ] Add haptic feedback for mobile
- [ ] Create tutorial/onboarding flow

#### 7.3 Optimization
- [ ] Optimize Firestore queries
- [ ] Implement proper caching strategies
- [ ] Add code splitting for routes
- [ ] Optimize asset loading
- [ ] Test and improve mobile performance

### Phase 8: Testing & Deployment (Week 12)

#### 8.1 Testing
- [ ] Write unit tests for game logic
- [ ] Create component tests for UI
- [ ] Add integration tests for Firestore
- [ ] Perform manual gameplay testing
- [ ] Test PWA functionality offline

#### 8.2 Documentation
- [ ] Write comprehensive README
- [ ] Create setup guide (SETUP.md)
- [ ] Document game mechanics
- [ ] Add code comments where needed
- [ ] Create contributing guide

#### 8.3 Deployment
- [ ] Set up Firebase hosting (or alternative)
- [ ] Configure production environment
- [ ] Set up monitoring and analytics
- [ ] Create deployment pipeline
- [ ] Perform final security audit

## Project Structure

```
dungeon_general_store/
├── .github/
│   ├── copilot-instructions.md    # This file
│   └── workflows/
│       └── ci.yml                 # CI/CD pipeline
├── app/
│   ├── assets/
│   │   ├── css/
│   │   │   └── main.css          # Tailwind + custom styles
│   │   ├── images/               # Game images
│   │   └── sounds/               # Audio files (optional)
│   ├── components/
│   │   ├── shop/                 # Shop UI components
│   │   ├── delver/               # Delver-related components
│   │   ├── dm/                   # DM control components
│   │   └── ui/                   # Shared UI components
│   ├── composables/
│   │   ├── useGame.ts            # Game lifecycle
│   │   ├── useShopInventory.ts   # Inventory management
│   │   ├── useDelvers.ts         # Delver state
│   │   └── useFirestore.ts       # Firestore helpers
│   ├── game/
│   │   ├── config.ts             # Phaser configuration
│   │   ├── scenes/
│   │   │   ├── MainScene.ts      # Entry scene
│   │   │   ├── ShopScene.ts      # Shop management
│   │   │   ├── DMControlScene.ts # DM panel
│   │   │   └── InventoryScene.ts # Inventory view
│   │   ├── entities/
│   │   │   ├── Item.ts           # Item class
│   │   │   ├── Delver.ts         # Delver class
│   │   │   └── Monster.ts        # Monster/encounter class
│   │   └── systems/
│   │       ├── TradingSystem.ts  # Buy/sell logic
│   │       ├── SpawnSystem.ts    # DM spawn control
│   │       └── QuestSystem.ts    # Quest management
│   ├── layouts/
│   │   └── default.vue           # Main layout
│   ├── pages/
│   │   ├── index.vue             # Landing/menu
│   │   ├── game.vue              # Main game view
│   │   └── settings.vue          # Settings page
│   ├── plugins/
│   │   └── firebase.client.ts    # Firebase initialization
│   ├── types/
│   │   ├── game.ts               # Game type definitions
│   │   ├── shop.ts               # Shop types
│   │   └── delver.ts             # Delver types
│   └── utils/
│       ├── calculations.ts       # Game calculations
│       └── helpers.ts            # Utility functions
├── server/
│   ├── api/
│   │   ├── save.post.ts          # Save game endpoint
│   │   └── load.get.ts           # Load game endpoint
│   └── utils/
│       └── firestore-admin.ts    # Server-side Firestore
├── public/
│   ├── favicon.ico
│   ├── icon-192x192.png          # PWA icon
│   ├── icon-512x512.png          # PWA icon
│   └── manifest.webmanifest      # PWA manifest
├── tests/
│   ├── unit/
│   │   ├── composables/          # Composable tests
│   │   └── utils/                # Utility tests
│   └── integration/
│       └── game-flow.test.ts     # Integration tests
├── .env.example                   # Environment template
├── .gitignore
├── .prettierrc
├── eslint.config.mjs
├── nuxt.config.ts                # Nuxt configuration
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vitest.config.ts
└── README.md
```

## Coding Guidelines

### General Principles

1. **Minimalist Design**: Keep code simple and focused. Avoid over-engineering.
2. **Type Safety**: Use TypeScript throughout. Define proper types and interfaces.
3. **Composition API**: Use Vue 3 Composition API with `<script setup>` syntax.
4. **Responsive Design**: Ensure the game works on mobile and desktop.
5. **Performance**: Optimize for web performance (lazy loading, code splitting).

### Game Development

#### Phaser Integration

- Use Phaser 3 for game rendering
- Keep game logic separate from Vue components
- Use events to communicate between Phaser and Vue
- Example event pattern:
  ```typescript
  // In Phaser scene
  this.events.emit('item-purchased', itemData)
  
  // In Vue component
  gameInstance.scene.getScene('ShopScene').events.on('item-purchased', handlePurchase)
  ```

#### Game State Management

- Use composables for shared game state
- Persist important state to Firestore
- Keep local state for real-time interactions
- Sync to Firestore on significant changes
- Example composable pattern:
  ```typescript
  export function useShopInventory() {
    const items = ref<Item[]>([])
    const loading = ref(false)
    
    async function loadInventory() {
      loading.value = true
      // Load from Firestore
      loading.value = false
    }
    
    async function saveInventory() {
      // Save to Firestore
    }
    
    return { items, loading, loadInventory, saveInventory }
  }
  ```

#### Input-Driven Design

- Focus on keyboard and touch input
- Minimize unnecessary UI chrome
- Use keyboard shortcuts for common actions
- Support touch gestures on mobile

### Firebase/Firestore

#### Data Structure

Design flat, denormalized collections for performance:

```typescript
// Good: Flat structure
shops/{shopId}
  - inventory: Item[]
  - gold: number
  - reputation: number
  - lastUpdated: timestamp

delvers/{delverId}
  - name: string
  - stats: Stats
  - equipment: string[]  // Item IDs
  - history: RunRecord[]
  - relationship: number

// Avoid: Deep nesting
shops/{shopId}/inventory/{itemId}  // Too granular
```

#### Security

- Never expose Firebase config secrets in client code
- Use environment variables for sensitive data
- Implement proper Firestore security rules:
  ```javascript
  rules_version = '2';
  service cloud.firestore {
    match /databases/{database}/documents {
      match /shops/{shopId} {
        allow read: if request.auth != null;
        allow write: if request.auth != null && request.auth.uid == shopId;
      }
    }
  }
  ```

#### Real-time Updates

- Use Firestore listeners for real-time game state
- Handle offline scenarios gracefully
- Implement optimistic updates for better UX
- Clean up listeners on component unmount

### PWA Best Practices

1. **Offline Support**: 
   - Cache game assets for offline play
   - Store game state locally and sync when online
   - Provide clear offline indicators

2. **Install Prompts**: 
   - Implement smart install prompts
   - Show after user engagement (e.g., after first session)
   - Make dismissible and non-intrusive

3. **Service Worker**: 
   - Use Nuxt PWA module for service worker generation
   - Configure caching strategies per asset type
   - Implement background sync for saves

4. **App Manifest**: 
   - Configure proper icons (192x192, 512x512)
   - Set theme colors matching game aesthetic
   - Use standalone display mode

### Testing

1. **Unit Tests**: 
   - Test composables and utility functions
   - Mock Firestore and Phaser dependencies
   - Focus on business logic

2. **Component Tests**: 
   - Test Vue components with Vitest
   - Use happy-dom for DOM testing
   - Test user interactions

3. **E2E Tests**: 
   - Test critical user flows
   - Verify save/load functionality
   - Test PWA installation

4. **Game Logic Tests**: 
   - Test game mechanics separately from rendering
   - Verify trading calculations
   - Test spawn system logic

### Code Style

1. **Formatting**: Use Prettier with these settings:
   ```json
   {
     "semi": false,
     "singleQuote": true,
     "tabWidth": 2,
     "trailingComma": "es5",
     "printWidth": 100
   }
   ```

2. **Linting**: Follow ESLint rules configured in the project

3. **Naming Conventions**:
   - Components: PascalCase (e.g., `ShopInventory.vue`)
   - Composables: camelCase with `use` prefix (e.g., `useShopInventory.ts`)
   - Files: kebab-case for most files
   - Constants: UPPER_SNAKE_CASE
   - Classes: PascalCase (e.g., `class Item`)
   - Interfaces: PascalCase with `I` prefix (e.g., `interface IItemData`)

4. **File Organization**:
   - Group related files together
   - Use index files for cleaner imports
   - Keep files small and focused (< 300 lines)

### Git Workflow

1. **Commits**: 
   - Write clear, descriptive commit messages
   - Use conventional commit format:
     - `feat:` for new features
     - `fix:` for bug fixes
     - `docs:` for documentation
     - `refactor:` for code refactoring
     - `test:` for adding tests
     - `chore:` for maintenance

2. **Branches**: 
   - Use feature branches for new functionality
   - Name format: `feature/shop-inventory`, `fix/trading-bug`
   - Keep branches short-lived

3. **PRs**: 
   - Include description of changes and testing done
   - Reference related issues
   - Request review before merging

## Game-Specific Guidelines

### Shop Management

#### Inventory System
- Keep inventory system flexible for various item types
- Support item stacking for consumables
- Implement rarity tiers (common, rare, legendary)
- Add item durability for equipment
- Track item provenance (who sold it, where it came from)

#### Trading Mechanics
- Implement dynamic pricing based on supply/demand
- Add reputation-based discounts
- Support bartering and negotiation mini-games
- Track transaction history for analytics
- Add special deals and limited-time offers

#### Shop Upgrades
- Expandable inventory space
- Better display cases (affects customer interest)
- Security upgrades (reduces theft risk)
- Storage expansions
- Aesthetic customizations

### Dungeon Master Mode

#### Spawn Control
- Secret DM controls should feel powerful but balanced
- Provide difficulty presets (easy, medium, hard)
- Allow custom encounter creation
- Show success probability predictions
- Track historical spawn decisions

#### Balance System
- Implement karma system for DM choices
- Too easy: reduces shop reputation (word spreads)
- Too hard: causes delver deaths, guilt effects
- Balanced: optimal for long-term success
- Add achievement system for balanced play

#### Consequence Tracking
- Track consequences of DM choices
- Show indirect effects on town economy
- Affect delver trust and relationships
- Influence story events and random encounters

### Delver System

#### NPC Generation
- Create diverse delver personalities
- Assign random traits affecting behavior
- Generate backstories (simple templates)
- Add memorable quirks or catchphrases
- Implement relationship memory

#### Traits & Stats
- Strength, Dexterity, Constitution, etc.
- Personality traits (brave, cautious, greedy)
- Equipment preferences
- Success history affects confidence
- Relationship level with shopkeeper

#### Quest Outcomes
- NPCs should have persistent traits and histories
- Quest outcomes should impact shop dynamics
- Successful delvers bring more gold and reputation
- Failed quests affect equipment returns (or not)
- Death/failure should have meaningful consequences

#### Permadeath System
- Implement permadeath for realism and weight
- Create memorial system for fallen delvers
- Affects town morale and shop traffic
- Items from deceased may return as "cursed" or sought-after
- Build emotional investment through stories

## Dependencies Management

### Core Dependencies
```json
{
  "dependencies": {
    "nuxt": "^4.2.1",
    "vue": "^3.5.0",
    "phaser": "^3.87.0",
    "firebase": "^11.0.2",
    "@pinia/nuxt": "^0.5.5",
    "@vueuse/nuxt": "^11.2.0"
  }
}
```

### Development Dependencies
```json
{
  "devDependencies": {
    "@nuxt/eslint": "^0.5.7",
    "@nuxtjs/tailwindcss": "^6.12.2",
    "@vite-pwa/nuxt": "^0.10.5",
    "vitest": "^2.1.8",
    "happy-dom": "^15.11.7",
    "typescript": "^5.6.3",
    "vue-tsc": "^2.2.1",
    "prettier": "^3.3.3"
  }
}
```

### Dependency Notes
- Keep dependencies up to date
- Prefer well-maintained, popular packages
- Document why each dependency is needed
- Review security advisories regularly
- Use `--legacy-peer-deps` for npm install if needed

## Performance Considerations

### Asset Loading
- Lazy load Phaser and heavy game assets
- Use dynamic imports for code splitting
- Implement progressive image loading
- Compress images (use WebP where supported)
- Load audio on demand

### Optimization Strategies
- Implement loading states for async operations
- Use virtual scrolling for long lists
- Debounce frequent operations (search, filters)
- Cache Firestore queries appropriately
- Minimize re-renders with proper Vue reactivity

### Mobile Optimization
- Test on actual mobile devices
- Optimize touch targets (min 44x44px)
- Reduce bundle size for faster loading
- Use service worker caching aggressively
- Consider reducing visual effects on mobile

## Accessibility

### Keyboard Navigation
- Provide keyboard navigation for all UI
- Support tab navigation
- Implement keyboard shortcuts for actions
- Add visible focus indicators
- Support Escape key to close modals

### Semantic HTML
- Use semantic HTML elements
- Proper heading hierarchy (h1, h2, h3)
- Use button elements for clickable actions
- Use form elements appropriately
- Add alt text for images

### ARIA Support
- Include ARIA labels where appropriate
- Use ARIA live regions for dynamic content
- Add ARIA descriptions for complex interactions
- Support screen readers where feasible
- Test with screen reader software

### Visual Accessibility
- Maintain sufficient color contrast (WCAG AA)
- Don't rely solely on color to convey information
- Provide text alternatives for icons
- Support browser zoom up to 200%
- Consider colorblind-friendly palette

## When Working with Copilot

### Feature Requests
1. Be explicit about game mechanics when requesting features
2. Specify if changes affect game logic, UI, or both
3. Mention if Firestore schema changes are needed
4. Indicate if new assets or resources are required
5. State if changes impact offline functionality

### Code Generation
- Request type-safe code with proper TypeScript types
- Ask for comprehensive error handling
- Request unit tests for business logic
- Specify performance requirements
- Mention mobile compatibility needs

### Debugging
- Provide relevant error messages and stack traces
- Describe expected vs actual behavior
- Mention what you've already tried
- Include relevant code context
- Specify which phase of implementation you're in

## Quick Start Commands

### Development
```bash
npm install --legacy-peer-deps  # Install dependencies
npm run dev                      # Start dev server
npm run build                    # Build for production
npm run preview                  # Preview production build
```

### Quality Assurance
```bash
npm run lint                     # Run ESLint
npm run lint:fix                 # Fix ESLint issues
npm run format                   # Format code with Prettier
npm run format:check             # Check formatting
npm run test                     # Run tests
npm run test:ui                  # Run tests with UI
npm run typecheck                # Type check TypeScript
```

## Resources

### Documentation
- [Nuxt 4 Documentation](https://nuxt.com/)
- [Phaser 3 Documentation](https://photonstorm.github.io/phaser3-docs/)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Vue 3 Documentation](https://vuejs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

### Tutorials
- [Nuxt 4 Tutorial](https://nuxt.com/docs/getting-started/introduction)
- [Phaser 3 Examples](https://phaser.io/examples)
- [Firebase Firestore Tutorial](https://firebase.google.com/docs/firestore)
- [PWA Guide](https://web.dev/learn/pwa/)

### Community
- [Nuxt Discord](https://discord.com/invite/nuxt)
- [Phaser Discord](https://discord.gg/phaser)
- [Vue Discord](https://discord.com/invite/vue)
