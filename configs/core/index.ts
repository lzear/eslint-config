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
import type { ConfigOptions } from '../..'

export const core = (config: ConfigOptions): Linter.Config => {
  const files = ['**/*.js', '**/*.cjs', '**/*.mjs']

  if (config.typescript) {
    files.push('**/*.ts', '**/*.cts', '**/*.mts')
  }

  if (config.react) {
    files.push('**/*.jsx')

    if (config.typescript) {
      files.push('**/*.tsx')
    }
  }

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

    rules: {
      ...js.configs.recommended.rules,
      ...eslintCommentsPlugin.configs.recommended.rules,
      ...importXPlugin.configs.recommended.rules,
      'import-x/no-unresolved': 0,
      'import-x/order': [
        2,
        {
          alphabetize: {
            order: 'asc',
            orderImportKind: 'asc',
          },
          'newlines-between': 'never',
        },
      ],
      ...jsdocPlugin.configs['flat/recommended-typescript'].rules,
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
      ...unicornPlugin.configs.recommended.rules,
    },

    settings: {
      jsdoc: {
        mode: 'jsdoc',
      },
    },
  }
}
