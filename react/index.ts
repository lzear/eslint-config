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
      'react/boolean-prop-naming': [
        2,
        {
          rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
        },
      ],
      'react/function-component-definition': [
        2,
        {
          namedComponents: 'arrow-function',
        },
      ],
      'react/hook-use-state': [
        2,
        {
          allowDestructuredState: true,
        },
      ],
      'react/jsx-boolean-value': 2,
      'react/jsx-closing-bracket-location': 2,
      'react/jsx-closing-tag-location': 2,
      'react/jsx-curly-brace-presence': [
        2,
        {
          props: 'never',
          children: 'never',
          propElementValues: 'always',
        },
      ],
      'react/jsx-curly-spacing': [2, 'never'],
      'react/jsx-equals-spacing': [2, 'never'],
      'react/jsx-filename-extension': [
        2,
        {
          extensions: ['.jsx', '.tsx'],
        },
      ],
      'react/jsx-fragments': 2,
      'react/jsx-handler-names': 2,
      'react/jsx-key': 2,
      'react/jsx-no-comment-textnodes': 2,
      'react/jsx-no-duplicate-props': 2,
      'react/jsx-no-target-blank': 2,
      'react/jsx-no-undef': 2,
      'react/jsx-no-useless-fragment': 2,
      'react/jsx-pascal-case': 2,
      'react/jsx-tag-spacing': 2,
      'react/jsx-uses-vars': 2,
      'react/no-children-prop': 2,
      'react/no-deprecated': 2,
      'react/no-unescaped-entities': 2,
      'react/no-unknown-property': 2,
      'react/self-closing-comp': [
        2,
        {
          component: true,
          html: true,
        },
      ],
      'react/style-prop-object': 2,
      'react/void-dom-elements-no-children': 2,

      'react-hooks/rules-of-hooks': 2,
      'react-hooks/exhaustive-deps': 2,

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
