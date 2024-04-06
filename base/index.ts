import { defineFlatConfig, type FlatESLintConfig } from 'eslint-define-config'
// @ts-expect-error - no types
import preferArrow from 'eslint-plugin-prefer-arrow'
// @ts-expect-error - no types
import nodeImport from 'eslint-plugin-node-import'
// @ts-expect-error - no types
import eslintImport from 'eslint-plugin-import'
import prettier from 'eslint-plugin-prettier'
// @ts-expect-error - no types
import promise from 'eslint-plugin-promise'
// @ts-expect-error - no types
import unicorn from 'eslint-plugin-unicorn'
import sonarjs from 'eslint-plugin-sonarjs'
// @ts-expect-error - no types
import n from 'eslint-plugin-n'
import globals from 'globals'
import js from '@eslint/js'

const configs: FlatESLintConfig[] = [
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
    rules: {
      'n/no-missing-import': 0, // false positives
      'prefer-const': 2,
      'unicorn/no-abusive-eslint-disable': 0,
      'unicorn/no-null': 0,
      'unicorn/prevent-abbreviations': [0, { checkProperties: true }],
    },
  },
  {
    plugins: { prettier },
    // @ts-expect-error - no types
    rules: prettier.configs.recommended.rules,
  },
]

const config = defineFlatConfig(configs)

export default config
