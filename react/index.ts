import type { FlatESLintConfig } from 'eslint-define-config'

import typescriptConfig from '@lzear/eslint-config-typescript'
import testingLibrary from 'eslint-plugin-testing-library'
import { defineFlatConfig } from 'eslint-define-config'
import reactHooks from 'eslint-plugin-react-hooks'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import react from 'eslint-plugin-react'

export default defineFlatConfig([
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
      'jsx-a11y/alt-text': 2,
      'jsx-a11y/anchor-has-content': 2,
      'jsx-a11y/anchor-is-valid': 2,
      'jsx-a11y/aria-props': 2,
      'jsx-a11y/aria-proptypes': 2,
      'jsx-a11y/aria-role': 2,
      'jsx-a11y/heading-has-content': 2,
      'jsx-a11y/no-aria-hidden-on-focusable': 2,
      'jsx-a11y/prefer-tag-over-role': 2,
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

    rules: {
      'testing-library/await-async-queries': 2,
      'testing-library/await-async-utils': 2,
      'testing-library/no-await-sync-events': [
        2,
        {
          eventModules: ['fire-event'],
        },
      ],
      'testing-library/no-await-sync-queries': 2,
      'testing-library/no-container': 2,
      'testing-library/no-debugging-utils': 2,
      'testing-library/no-dom-import': 2,
      'testing-library/no-global-regexp-flag-in-query': 2,
      'testing-library/no-render-in-lifecycle': 2,
      'testing-library/no-unnecessary-act': 2,
      'testing-library/no-wait-for-multiple-assertions': 2,
      'testing-library/no-wait-for-side-effects': 2,
      'testing-library/prefer-find-by': 2,
      'testing-library/prefer-presence-queries': 2,
      'testing-library/prefer-query-by-disappearance': 2,
      'testing-library/prefer-screen-queries': 2,
      'testing-library/prefer-user-event': 2,
    },
  },
]) as unknown as FlatESLintConfig[]
