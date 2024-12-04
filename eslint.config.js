import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import pluginVitest from '@vitest/eslint-plugin'
import oxlint from 'eslint-plugin-oxlint'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import typescriptEslint from '@typescript-eslint/eslint-plugin'

export default [
  // Lint specific file types
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },
  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  // Vue Essential Config
  ...pluginVue.configs['flat/essential'],

  // TypeScript Linting Config for Vue
  ...vueTsEslintConfig(),

  // Add Vitest-specific rules for test files
  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__vitests__/*'],
  },

  // TypeScript-specific linting
  {
    name: 'typescript',
    files: ['**/*.{ts,tsx,mts,cts}'],
    languageOptions: {
      parser: '@typescript-eslint/parser',
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
    },
    rules: {
      // Example rules, customize as needed
      '@typescript-eslint/no-require-imports': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'warn',
    },
  },

  // Recommended rules for Oxlint
  oxlint.configs['flat/recommended'],

  // Skip formatting conflicts with Prettier
  skipFormatting,
]
