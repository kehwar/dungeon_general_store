// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-12-28',

  // Using Nuxt 4 compatibility version as per project requirements
  // This enables new features and patterns that will be standard in Nuxt 4
  future: {
    compatibilityVersion: 4,
  },

  // Enable static site generation for GitHub Pages
  ssr: false,

  // TypeScript configuration
  typescript: {
    strict: true,
    typeCheck: false, // Disabled during build to avoid conflicts with vitest's vite version
  },

  // Development tools
  devtools: { enabled: true },

  // ESLint module
  modules: ['@nuxt/eslint'],

  // App configuration
  app: {
    head: {
      title: 'Dungeon General Store',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'A minimalist, offline-first management game where you run a cozy dungeon-town shop',
        },
      ],
    },
  },

  // Vite configuration for better build performance
  vite: {
    build: {
      target: 'esnext',
    },
  },
})
