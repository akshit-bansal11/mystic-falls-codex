import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
    // A retry above zero turns a defect into a green run (TEST-13).
    retry: 0,
    // Mock state is reset by configuration, not by convention (TEST-09).
    clearMocks: true,
    restoreMocks: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      include: ['src/lib/**/*.ts'],
      // theme.ts reads and writes document and matchMedia. Unit-testing it in a
      // node environment would only assert a jsdom shim; its real behaviour is
      // the theme toggle, verified in the browser suite.
      exclude: ['src/lib/theme.ts'],
      // Set at the level the suite actually reaches on this commit, to be
      // raised rather than aspired to (TEST-D03). Google's published guidance
      // is 60 acceptable / 75 commendable / 90 exemplary - guidance, not a
      // standard (TEST-D02).
      thresholds: {
        statements: 80,
        branches: 80,
        functions: 80,
        lines: 80,
      },
    },
  },
})
