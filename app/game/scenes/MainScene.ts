import Phaser from 'phaser'

export class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' })
  }

  preload() {
    // Load game assets here
  }

  create() {
    // Initialize game objects
    this.add
      .text(640, 360, 'Dungeon General Store', {
        fontSize: '48px',
        color: '#ffd700',
      })
      .setOrigin(0.5)

    this.add
      .text(640, 420, 'Game scene ready', {
        fontSize: '24px',
        color: '#f5f5dc',
      })
      .setOrigin(0.5)
  }

  override update() {
    // Game loop
  }
}
