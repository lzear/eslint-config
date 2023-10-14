import type { FlatESLintConfig } from 'eslint-define-config'

import typescriptConfig from '@lzear/eslint-config-typescript'
import testingLibrary from 'eslint-plugin-testing-library'
import { defineFlatConfig } from 'eslint-define-config'
import reactHooks from 'eslint-plugin-react-hooks'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import react from 'eslint-plugin-react'

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
    },

    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
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

    rules: testingLibrary.configs.recommended.rules,
  },
]) as unknown as FlatESLintConfig[]

export default config
