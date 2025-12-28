// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  {
    rules: {
      // Customize rules as needed
      'vue/multi-word-component-names': 'off',
    },
  }
)
