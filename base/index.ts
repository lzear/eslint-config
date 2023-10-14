import perfectionistLineLength from 'eslint-plugin-perfectionist/configs/recommended-line-length'
import { defineFlatConfig } from 'eslint-define-config'
import preferArrow from 'eslint-plugin-prefer-arrow'
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
      import: eslintImport,
      promise,
      sonarjs,
      unicorn,
      n,
    },

    rules: {
      ...eslintImport.configs.recommended.rules,
      ...n.configs.recommended.rules,
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
  perfectionistLineLength,
  {
    rules: {
      'unicorn/prevent-abbreviations': [0, { checkProperties: true }],
    },
  },
  {
    plugins: { prettier },
    rules: prettier.configs.recommended.rules,
  },
])

export default config
