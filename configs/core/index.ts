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

import js from '@eslint/js'
import eslintCommentsPlugin from '@eslint-community/eslint-plugin-eslint-comments'
import type { ESLint, Linter } from 'eslint'
import importXPlugin from 'eslint-plugin-import-x'
import jsdocPlugin from 'eslint-plugin-jsdoc'
import preferArrowPlugin from 'eslint-plugin-prefer-arrow'
import promisePlugin from 'eslint-plugin-promise'
import regexpPlugin from 'eslint-plugin-regexp'
import sonarjsPlugin from 'eslint-plugin-sonarjs'
import unicornPlugin from 'eslint-plugin-unicorn'
import globals from 'globals'

export const core = (): Linter.Config => {
  const files = [
    '**/*.js',
    '**/*.cjs',
    '**/*.mjs',
    '**/*.ts',
    '**/*.cts',
    '**/*.mts',
    '**/*.jsx',
    '**/*.tsx',
  ]

  const rules = {
    ...js.configs.recommended.rules,

    ...eslintCommentsPlugin.configs.recommended.rules,
    '@eslint-community/eslint-comments/disable-enable-pair': 0,
    '@eslint-community/eslint-comments/no-unlimited-disable': 0,

    ...importXPlugin.configs.recommended.rules,
    'import-x/no-unresolved': 0,
    'import-x/order': [
      2,
      {
        alphabetize: { order: 'asc', orderImportKind: 'asc' },
        'newlines-between': 'never',
      },
    ],

    ...jsdocPlugin.configs['flat/recommended-typescript'].rules,
    'jsdoc/require-jsdoc': 0,

    'prefer-arrow/prefer-arrow-functions': [
      2,
      {
        classPropertiesAllowed: false,
        disallowPrototype: true,
        singleReturnOnly: false,
      },
    ],

    ...promisePlugin.configs.recommended.rules,

    ...regexpPlugin.configs.recommended.rules,

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    ...(sonarjsPlugin.configs.recommended.rules as Linter.RulesRecord),
    'sonarjs/fixme-tag': 0,
    'sonarjs/pseudo-random': 0,
    'sonarjs/todo-tag': 0,
    'sonarjs/void-use': 0,

    ...unicornPlugin.configs.recommended.rules,
    'unicorn/no-abusive-eslint-disable': 0,
    'unicorn/no-nested-ternary': 0, // conflicts with Prettier
    'unicorn/no-null': 0,
    'unicorn/number-literal-case': 0, // conflicts with Prettier, sadly
    'unicorn/prevent-abbreviations': 0,
  } satisfies Linter.RulesRecord

  return {
    name: 'lzear/core',

    files,

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2025,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },

    plugins: {
      '@eslint-community/eslint-comments': eslintCommentsPlugin,
      'import-x': importXPlugin as unknown as ESLint.Plugin,
      jsdoc: jsdocPlugin,
      'prefer-arrow': preferArrowPlugin,
      promise: promisePlugin,
      regexp: regexpPlugin,
      sonarjs: sonarjsPlugin,
      unicorn: unicornPlugin,
    },

    rules: rules,

    settings: { jsdoc: { mode: 'jsdoc' } },
  }
}
