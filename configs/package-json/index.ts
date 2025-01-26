/*
  eslint perfectionist/sort-objects: [
    'error',
    {
      type: 'alphabetical',
      order: 'asc',
      partitionByNewLine: true
    }
  ]
*/

import type { ESLint, Linter } from 'eslint'
import * as packageJsonPlugin from 'eslint-plugin-package-json'
import jsoncParser from 'jsonc-eslint-parser'

export const packageJson = (): Linter.Config => ({
  name: 'lzear/package-json',

  files: ['**/package.json'],

  plugins: {
    'package-json': packageJsonPlugin as ESLint.Plugin,
  },

  languageOptions: {
    parser: jsoncParser,
  },

  rules: packageJsonPlugin.configs.recommended.rules,
})
