import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const tsconfigRootDir = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig([
  globalIgnores(['dist', 'coverage']),
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    extends: [
      js.configs.recommended,
    ],
  },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.recommendedTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir,
      },
    },
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    extends: [
      react.configs.flat.recommended,
      react.configs.flat['jsx-runtime'],
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: '19.2',
      },
    },
    rules: {
      'react/prop-types': 'off',
    },
  },
  {
    files: ['*.config.{js,ts}', 'eslint.config.js'],
    languageOptions: {
      globals: globals.node,
    },
  },
])
