import { defineFlatConfig } from 'eslint-define-config'
import preferArrow from 'eslint-plugin-prefer-arrow'
import nodeImport from 'eslint-plugin-node-import'
import eslintImport from 'eslint-plugin-import'
import prettier from 'eslint-plugin-prettier'
import promise from 'eslint-plugin-promise'
import unicorn from 'eslint-plugin-unicorn'
import sonarjs from 'eslint-plugin-sonarjs'
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
      'prefer-const': 2,
      'unicorn/no-abusive-eslint-disable': 0,
      'unicorn/no-null': 0,
      'unicorn/prevent-abbreviations': [0, { checkProperties: true }],
    },
  },
  {
    plugins: { prettier },
    rules: prettier.configs.recommended.rules,
  },
])

export default config
