// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  {
    rules: {
      // Customize rules as needed
      'vue/multi-word-component-names': 'off',
      // Prettier integration - disable formatting rules that conflict with Prettier
      'vue/max-attributes-per-line': 'off',
      'vue/singleline-html-element-content-newline': 'off',
    },
  }
)
