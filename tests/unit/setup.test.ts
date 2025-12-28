import { describe, it, expect } from 'vitest'

describe('Basic setup test', () => {
  it('should pass a simple test', () => {
    expect(1 + 1).toBe(2)
  })

  it('should verify TypeScript is working', () => {
    const message: string = 'Hello, Dungeon General Store!'
    expect(message).toBeTruthy()
    expect(typeof message).toBe('string')
  })
})
