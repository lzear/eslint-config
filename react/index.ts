import type { FlatESLintConfig } from 'eslint-define-config'

import typescriptConfig from '@lzear/eslint-config-typescript'
// @ts-expect-error - no types
import testingLibrary from 'eslint-plugin-testing-library'
import { defineFlatConfig } from 'eslint-define-config'
// @ts-expect-error - no types
import reactHooks from 'eslint-plugin-react-hooks'
// @ts-expect-error - no types
import jsxA11y from 'eslint-plugin-jsx-a11y'
// @ts-expect-error - no types
import react from 'eslint-plugin-react'
// @ts-expect-error - no types
import tailwindcss from 'eslint-plugin-tailwindcss'

const config = defineFlatConfig([
  ...typescriptConfig,

  {
    files: ['**/*.jsx', '**/*.tsx', '**/*.js', '**/*.ts'],

    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    plugins: {
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      react,
      tailwindcss,
    },

    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      ...tailwindcss.configs.recommended.rules,
    },

    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  {
    files: [
      '**/test/*.js',
      '**/test/*.ts',
      '**/test/*.jsx',
      '**/test/*.tsx',
      '**/*.test.js',
      '**/*.test.ts',
      '**/*.test.jsx',
      '**/*.test.tsx',
    ],

    plugins: {
      'testing-library': testingLibrary,
    },

    rules: testingLibrary.configs.react.rules,
  },
]) as unknown as FlatESLintConfig[]

export default config
