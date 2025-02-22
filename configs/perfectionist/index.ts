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

import type { Linter } from 'eslint'
import type { ConfigOptions } from '../..'
import { interopDefault } from '../../utils'

export const perfectionist = async (
  config: ConfigOptions,
): Promise<Linter.Config> => {
  if (!config.perfectionist) {
    return {}
  }

  const perfectionistPlugin = await interopDefault(
    import('eslint-plugin-perfectionist'),
  )

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
    name: 'lzear/perfectionist',

    files,

    plugins: {
      perfectionist: perfectionistPlugin,
    },

    rules: {
      /**
       * Enforce sorted arrays before include method.
       */
      'perfectionist/sort-array-includes': ['error'],
      /**
       * Enforce sorted classes.
       */
      'perfectionist/sort-classes': ['error'],
      /**
       * Enforce sorted decorators.
       */
      'perfectionist/sort-decorators': ['error'],
      /**
       * Enforce sorted TypeScript enums.
       */
      'perfectionist/sort-enums': ['error'],
      /**
       * Enforce sorted exports.
       */
      'perfectionist/sort-exports': ['error'],
      /**
       * Enforce sorted heritage clauses.
       */
      'perfectionist/sort-heritage-clauses': ['error'],
      /**
       * Enforce sorted interface properties.
       */
      'perfectionist/sort-interfaces': ['error'],
      /**
       * Enforce sorted intersection types.
       */
      'perfectionist/sort-intersection-types': ['error'],
      /**
       * Enforce sorted JSX props.
       */
      'perfectionist/sort-jsx-props': ['error'],
      /**
       * Enforce sorted Map elements.
       */
      'perfectionist/sort-maps': ['error'],
      /**
       * Enforce sorted named exports.
       */
      'perfectionist/sort-named-exports': ['error'],
      /**
       * Enforce sorted named imports
       */
      'perfectionist/sort-named-imports': ['error'],
      /**
       * Enforce sorted object types.
       */
      'perfectionist/sort-object-types': ['error'],
      /**
       * Enforce sorted objects.
       */
      'perfectionist/sort-objects': ['error'],
      /**
       * Enforce sorted Set elements.
       */
      'perfectionist/sort-sets': ['error'],
      /**
       * Enforce sorted switch case statements.
       */
      'perfectionist/sort-switch-case': ['error'],
      /**
       * Enforce sorted union types.
       */
      'perfectionist/sort-union-types': ['error'],
      /**
       * Enforce sorted variable declarations.
       */
      'perfectionist/sort-variable-declarations': ['error'],
    },

    settings: {
      perfectionist: {
        order: 'desc',
        type: 'line-length',
      },
    },
  }
}
