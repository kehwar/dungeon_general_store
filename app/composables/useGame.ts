import Phaser from 'phaser'
import { createGameConfig } from '~/game/config'
import { MainScene } from '~/game/scenes/MainScene'

export function useGame() {
  const game = ref<Phaser.Game | null>(null)

  const initGame = (parentId: string) => {
    if (game.value) {
      return
    }

    const config = createGameConfig(parentId)
    config.scene = [MainScene]

    game.value = new Phaser.Game(config)
  }

  const destroyGame = () => {
    if (game.value) {
      game.value.destroy(true)
      game.value = null
    }
  }

  onUnmounted(() => {
    destroyGame()
  })

  return {
    game: readonly(game),
    initGame,
    destroyGame,
  }
}
