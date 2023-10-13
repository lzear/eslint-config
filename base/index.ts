import perfectionistLineLength from 'eslint-plugin-perfectionist/configs/recommended-line-length'
import { defineFlatConfig } from 'eslint-define-config'
import preferArrow from 'eslint-plugin-prefer-arrow'
import nodeImport from 'eslint-plugin-node-import'
import eslintImport from 'eslint-plugin-import'
import promise from 'eslint-plugin-promise'
import unicorn from 'eslint-plugin-unicorn'
import sonarjs from 'eslint-plugin-sonarjs'
import vitest from 'eslint-plugin-vitest'
import n from 'eslint-plugin-n'
import globals from 'globals'
import js from '@eslint/js'

const config = defineFlatConfig([
  {
    ignores: ['**/node_modules/**', '**/dist/**', '.git/**'],
  },
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
    },

    plugins: {
      'prefer-arrow': preferArrow,
      'node-import': nodeImport,
      import: eslintImport,
      promise,
      sonarjs,
      unicorn,
      vitest,
      n,
    },

    rules: {
      ...eslintImport.configs.recommended.rules,

      ...n.configs.recommended.rules,

      'node-import/prefer-node-protocol': 2,

      'prefer-arrow/prefer-arrow-functions': [
        2,
        {
          disallowPrototype: true,
          singleReturnOnly: false,
          classPropertiesAllowed: false,
        },
      ],
      ...promise.configs.recommended.rules,
      ...sonarjs.configs.recommended.rules,
      ...unicorn.configs.recommended.rules,
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
      vitest,
    },

    rules: {
      'vitest/consistent-test-filename': 2,
      'vitest/consistent-test-it': [2, { fn: 'it' }],
      'vitest/no-alias-methods': 2,
      'vitest/no-commented-out-tests': 2,
      'vitest/no-conditional-expect': 2,
      'vitest/no-conditional-in-test': 2,
      'vitest/no-conditional-tests': 2,
      'vitest/no-disabled-tests': 2,
      'vitest/no-duplicate-hooks': 2,
      'vitest/no-focused-tests': 2,
      'vitest/no-identical-title': 2,
      'vitest/no-standalone-expect': 2,
      'vitest/no-test-return-statement': 2,
      'vitest/prefer-comparison-matcher': 2,
      'vitest/prefer-expect-resolves': 2,
      'vitest/prefer-hooks-in-order': 2,
      'vitest/prefer-hooks-on-top': 2,
      'vitest/prefer-lowercase-title': 2,
      'vitest/prefer-spy-on': 2,
      'vitest/prefer-to-be-falsy': 2,
      'vitest/prefer-to-be-truthy': 2,
      'vitest/prefer-to-be': 2,
      'vitest/prefer-to-contain': 2,
      'vitest/prefer-to-have-length': 2,
      'vitest/require-top-level-describe': 2,
      'vitest/valid-describe-callback': 2,
      'vitest/valid-expect': 2,
    },
  },
  perfectionistLineLength,
  {
    rules: {
      'unicorn/prevent-abbreviations': [0, { checkProperties: true }],
    },
  },
])

export default config
