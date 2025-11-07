import { describe, it, expect } from 'vitest'

describe('Dungeon General Store', () => {
  it('should have a valid project setup', () => {
    expect(true).toBe(true)
  })

  it('should define game constants', () => {
    const GAME_WIDTH = 1280
    const GAME_HEIGHT = 720

    expect(GAME_WIDTH).toBeGreaterThan(0)
    expect(GAME_HEIGHT).toBeGreaterThan(0)
  })
})
