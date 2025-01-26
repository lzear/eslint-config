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

export const vitest = async (config: ConfigOptions): Promise<Linter.Config> => {
  if (!config.vitest) {
    return {}
  }

  const vitestPlugin = await interopDefault(import('@vitest/eslint-plugin'))

  const files = [
    '**/test/*.js',
    '**/test/*.cjs',
    '**/test/*.mjs',
    '**/*.test.js',
    '**/*.test.cjs',
    '**/*.test.mjs',
  ]

  if (config.typescript) {
    files.push(
      '**/test/*.ts',
      '**/test/*.cts',
      '**/test/*.mts',
      '**/*.test.ts',
      '**/*.test.cts',
      '**/*.test.mts',
    )
  }

  if (config.react) {
    files.push('**/test/*.jsx', '**/*.test.jsx')

    if (config.typescript) {
      files.push('**/test/*.tsx', '**/*.test.tsx')
    }
  }

  return {
    name: 'lzear/vitest',

    files,

    plugins: {
      vitest: vitestPlugin,
    },

    rules: { ...vitestPlugin.configs.recommended.rules },

    settings: {
      vitest: {
        typecheck: true,
      },
    },
  }
}
