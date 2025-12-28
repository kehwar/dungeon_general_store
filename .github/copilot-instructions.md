# Copilot Instructions for Dungeon General Store

## Project Overview

Dungeon General Store is a minimalist, input-driven management game where players run a cozy dungeon-town shop, shape spawns as a secret DM, trade everything, and guide delvers' fates.

**Architecture Philosophy**: This game is designed as **offline-first**, with all core functionality working without internet connectivity. While multiplayer features are planned for the future, the architecture is designed with state streaming and synchronization in mind to make future multiplayer integration seamless.

## Technology Stack

- **Framework**: Nuxt 4 (Vue 3-based full-stack framework)
- **Game Engine**: Phaser 3 (for web game rendering and game logic)
- **Local Storage**: IndexedDB/LocalStorage (primary game state storage)
- **Optional Cloud Sync**: Firebase Firestore (optional cloud backup and future multiplayer state sync)
- **PWA**: PWABuilder via @vite-pwa/nuxt (Progressive Web App capabilities for offline-first experience)
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

#### 2.2 Local Storage System
- [ ] Set up IndexedDB wrapper/abstraction layer
- [ ] Design game state schema with serialization support
- [ ] Create local storage utilities with versioning
- [ ] Implement state import/export for backup
- [ ] Design data structures for easy state diffing (multiplayer-ready)
- [ ] Initial collections/stores:
  - shops (shop state, inventory, reputation)
  - delvers (NPC data, traits, history)
  - items (item catalog with properties)
  - runs (dungeon run records)

#### 2.3 Optional Firebase Integration (Future Multiplayer)
- [ ] Install Firebase SDK (v11+) as optional dependency
- [ ] Create Firebase client plugin (lazy-loaded)
- [ ] Set up environment variables template (.env.example)
- [ ] Configure optional Firestore sync layer
- [ ] Design state synchronization strategy for future multiplayer
- [ ] Implement cloud backup feature (opt-in)

#### 2.4 PWA Configuration
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
- [ ] Implement inventory storage (IndexedDB + local state)
- [ ] Add optional cloud sync for inventory
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
- [ ] Build save/load system (IndexedDB primary)
- [ ] Add auto-save functionality (local)
- [ ] Implement optional cloud backup
- [ ] Design state snapshot system for future multiplayer sync

#### 7.2 UI/UX Polish
- [ ] Create consistent UI theme
- [ ] Add animations and transitions
- [ ] Implement sound effects (optional)
- [ ] Add haptic feedback for mobile
- [ ] Create tutorial/onboarding flow

#### 7.3 Optimization
- [ ] Optimize IndexedDB queries
- [ ] Implement proper caching strategies for game assets
- [ ] Add code splitting for routes
- [ ] Optimize asset loading
- [ ] Test and improve mobile performance
- [ ] Ensure offline performance is optimal

### Phase 8: Testing & Deployment (Week 12)

#### 8.1 Testing
- [ ] Write unit tests for game logic
- [ ] Create component tests for UI
- [ ] Add integration tests for local storage
- [ ] Test offline functionality thoroughly
- [ ] Perform manual gameplay testing
- [ ] Test PWA functionality offline
- [ ] Verify optional cloud sync works correctly

#### 8.2 Documentation
- [ ] Write comprehensive README
- [ ] Create setup guide (SETUP.md)
- [ ] Document game mechanics
- [ ] Add code comments where needed
- [ ] Create contributing guide

#### 8.3 Deployment
- [ ] Set up static hosting (Netlify, Vercel, or GitHub Pages)
- [ ] Configure production environment
- [ ] Set up monitoring and analytics (privacy-respecting)
- [ ] Create deployment pipeline
- [ ] Perform final security audit
- [ ] Configure optional Firebase backend for cloud features

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
│   │   ├── useLocalStorage.ts    # IndexedDB helpers
│   │   └── useCloudSync.ts       # Optional cloud sync
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
│   │       ├── QuestSystem.ts    # Quest management
│   │       └── StateManager.ts   # State sync/diff system
│   ├── layouts/
│   │   └── default.vue           # Main layout
│   ├── pages/
│   │   ├── index.vue             # Landing/menu
│   │   ├── game.vue              # Main game view
│   │   └── settings.vue          # Settings page
│   ├── plugins/
│   │   └── firebase.client.ts    # Optional Firebase initialization
│   ├── types/
│   │   ├── game.ts               # Game type definitions
│   │   ├── shop.ts               # Shop types
│   │   └── delver.ts             # Delver types
│   └── utils/
│       ├── calculations.ts       # Game calculations
│       ├── helpers.ts            # Utility functions
│       └── storage.ts            # Storage abstraction layer
├── server/
│   ├── api/
│   │   ├── save.post.ts          # Optional cloud save endpoint
│   │   └── load.get.ts           # Optional cloud load endpoint
│   └── utils/
│       └── firestore-admin.ts    # Optional server-side Firestore
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
6. **Offline-First**: All core functionality must work without internet connectivity.
7. **Multiplayer-Ready**: Design state management for easy streaming and synchronization.

### Architecture Principles

#### Offline-First Design

The game must be fully functional offline. This is not a fallback mode - it's the primary mode of operation.

- **Local Storage as Primary**: All game state is stored in IndexedDB/LocalStorage
- **No Network Dependencies**: Core gameplay never requires network access
- **Optional Cloud Features**: Cloud sync and multiplayer are opt-in enhancements
- **Progressive Enhancement**: Online features enhance rather than enable gameplay

#### Multiplayer-Ready Architecture

While multiplayer is a future feature, design decisions should facilitate its eventual implementation:

- **State Serialization**: All game state must be serializable to JSON
- **Deterministic Logic**: Game logic should be deterministic for state replication
- **Event Sourcing**: Consider event-based state changes for easier sync
- **State Diffing**: Design state structure for efficient diff/patch operations
- **Conflict Resolution**: Plan for eventual consistency patterns
- **Timestamping**: Include timestamps on all state changes for ordering

Example state structure:
```typescript
interface GameState {
  version: number
  timestamp: number
  playerId: string
  entities: {
    shops: Record<string, Shop>
    delvers: Record<string, Delver>
    items: Record<string, Item>
  }
  events: GameEvent[]  // For event sourcing
  checksum?: string    // For state validation
}
```

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
- Store all game state in IndexedDB for persistence
- Keep reactive refs for real-time UI updates
- Design state for easy serialization and deserialization
- Implement state versioning for migrations
- Add state snapshot/restore capabilities for save/load
- Example composable pattern:
  ```typescript
  export function useShopInventory() {
    const items = ref<Item[]>([])
    const loading = ref(false)
    
    async function loadInventory() {
      loading.value = true
      // Load from IndexedDB
      const stored = await db.get('inventory')
      items.value = stored || []
      loading.value = false
    }
    
    async function saveInventory() {
      // Save to IndexedDB
      await db.set('inventory', items.value)
      
      // Optionally sync to cloud if enabled
      if (isCloudSyncEnabled()) {
        await syncToCloud(items.value)
      }
    }
    
    // Create state snapshot for multiplayer sync
    function createSnapshot() {
      return {
        timestamp: Date.now(),
        items: JSON.parse(JSON.stringify(items.value))
      }
    }
    
    return { 
      items, 
      loading, 
      loadInventory, 
      saveInventory,
      createSnapshot 
    }
  }
  ```

#### Input-Driven Design

- Focus on keyboard and touch input
- Minimize unnecessary UI chrome
- Use keyboard shortcuts for common actions
- Support touch gestures on mobile

### Local Storage

#### IndexedDB as Primary Storage

Use IndexedDB for all game state persistence:

```typescript
// Good: Using IndexedDB wrapper
interface StorageLayer {
  get<T>(key: string): Promise<T | null>
  set<T>(key: string, value: T): Promise<void>
  delete(key: string): Promise<void>
  clear(): Promise<void>
}

// Example implementation
class GameStorage implements StorageLayer {
  private db: IDBDatabase
  
  async get<T>(key: string): Promise<T | null> {
    // IndexedDB get operation
  }
  
  async set<T>(key: string, value: T): Promise<void> {
    // IndexedDB set operation with versioning
  }
}
```

#### State Structure

Design state for easy serialization and synchronization:

```typescript
// Good: Flat, serializable structure
interface GameData {
  shop: {
    id: string
    inventory: Item[]
    gold: number
    reputation: number
    lastSaved: number
  }
  delvers: Record<string, {
    id: string
    name: string
    stats: Stats
    equipment: string[]
    history: RunRecord[]
    relationship: number
  }>
  metadata: {
    version: number
    playerId: string
    lastModified: number
  }
}
```

### Firebase/Firestore (Optional)

Firebase is **optional** and used only for:
- Cloud backup (opt-in)
- Future multiplayer state synchronization
- Cross-device save sync

#### Data Structure

When cloud sync is enabled, mirror local structure:

```typescript
// Firestore structure (when sync enabled)
players/{playerId}/
  - gameState: GameData
  - lastSync: timestamp
  - version: number
```

#### Security

- Never expose Firebase config secrets in client code
- Use environment variables for sensitive data
- Implement proper Firestore security rules:
  ```javascript
  rules_version = '2';
  service cloud.firestore {
    match /databases/{database}/documents {
      match /players/{playerId} {
        allow read, write: if request.auth != null && request.auth.uid == playerId;
      }
    }
  }
  ```

#### Optional Cloud Sync

- Make cloud features completely optional
- Game must work perfectly without Firebase
- Lazy-load Firebase SDK only when needed
- Provide clear UI for enabling/disabling sync
- Handle offline scenarios gracefully (already offline by default)
- Implement conflict resolution for sync conflicts

Example sync pattern:
```typescript
// Only sync if explicitly enabled
async function syncState(localState: GameState) {
  if (!isCloudSyncEnabled() || !isOnline()) {
    return // Skip sync, game continues normally
  }
  
  try {
    const cloudState = await fetchCloudState()
    const merged = mergeStates(localState, cloudState)
    await saveToCloud(merged)
  } catch (error) {
    // Sync failed, but game continues offline
    console.warn('Cloud sync failed, continuing offline')
  }
}

### PWA Best Practices

1. **Offline-First by Design**: 
   - The game IS an offline application that happens to run in a browser
   - All core features work without network connectivity
   - Network is only used for optional cloud sync
   - Cache ALL game assets for instant offline availability
   - Store ALL game state locally (IndexedDB)
   - No "offline mode" vs "online mode" - it's always offline-capable

2. **Install Prompts**: 
   - Implement smart install prompts
   - Show after user engagement (e.g., after first session)
   - Make dismissible and non-intrusive
   - Emphasize offline playability in install prompt

3. **Service Worker**: 
   - Use Nuxt PWA module for service worker generation
   - Configure aggressive caching for all game assets
   - Use Cache-First strategy for game resources
   - Implement background sync only for optional cloud features
   - Handle failed syncs gracefully

4. **App Manifest**: 
   - Configure proper icons (192x192, 512x512)
   - Set theme colors matching game aesthetic
   - Use standalone display mode
   - Emphasize offline capability in description

### Multiplayer-Ready Architecture (Future)

While multiplayer is not part of the current implementation, the architecture should facilitate future multiplayer features:

#### State Design Patterns

1. **Serializable State**:
   - All game state must be JSON-serializable
   - No circular references
   - No functions stored in state
   - Use plain objects and arrays

2. **Deterministic Game Logic**:
   - Same inputs should produce same outputs
   - Avoid using `Math.random()` directly - use seeded RNG
   - Timestamp-based logic should use synchronized time
   - Make calculations reproducible

3. **Event Sourcing**:
   ```typescript
   interface GameEvent {
     id: string
     type: string
     timestamp: number
     playerId: string
     data: any
     version: number
   }
   
   // Store events for replay/sync
   class EventStore {
     private events: GameEvent[] = []
     
     addEvent(event: GameEvent) {
       this.events.push(event)
     }
     
     replayEvents(fromTimestamp: number): GameState {
       // Rebuild state from events
     }
   }
   ```

4. **State Diffing and Patching**:
   ```typescript
   interface StateDiff {
     timestamp: number
     changes: {
       path: string[]
       oldValue: any
       newValue: any
     }[]
   }
   
   function createDiff(oldState: GameState, newState: GameState): StateDiff {
     // Generate minimal diff
   }
   
   function applyPatch(state: GameState, diff: StateDiff): GameState {
     // Apply diff to state
   }
   ```

5. **Conflict Resolution Strategy**:
   - Plan for Last-Write-Wins or Operational Transform
   - Include version vectors or Lamport timestamps
   - Design state to minimize conflicts
   - Separate player-specific and shared state

6. **State Validation**:
   ```typescript
   interface StateChecksum {
     version: number
     timestamp: number
     hash: string
   }
   
   function validateState(state: GameState, checksum: StateChecksum): boolean {
     // Verify state integrity
   }
   ```

#### Network Considerations

- Design APIs for state streaming (WebSocket or Server-Sent Events)
- Plan for bandwidth-efficient state sync (diffs, not full state)
- Consider delta compression for state updates
- Design for high latency scenarios (100-500ms)
- Plan for temporary disconnections

#### Example Multiplayer-Ready Structure

```typescript
// State designed for sync
interface SyncableGameState {
  // Metadata for sync
  meta: {
    version: number
    lastModified: number
    playerId: string
    sessionId: string
  }
  
  // Player-specific state (no conflicts)
  player: {
    shop: Shop
    inventory: Item[]
    decisions: DMDecision[]
  }
  
  // Potentially shared state
  world: {
    delvers: Record<string, Delver>
    economy: EconomyState
    events: WorldEvent[]
  }
  
  // Event log for replay
  eventLog: GameEvent[]
}
```

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
    "idb": "^8.0.0",
    "@pinia/nuxt": "^0.5.5",
    "@vueuse/nuxt": "^11.2.0"
  },
  "optionalDependencies": {
    "firebase": "^11.0.2"
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
3. Mention if local storage schema changes are needed
4. Indicate if new assets or resources are required
5. State if changes impact offline functionality (they shouldn't!)
6. Clarify if optional cloud sync is involved

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
