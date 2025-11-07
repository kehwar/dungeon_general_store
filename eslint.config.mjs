import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': 'off',
    '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
    '@stylistic/quote-props': 'off', // Allow both quoted and unquoted properties
  },
})
