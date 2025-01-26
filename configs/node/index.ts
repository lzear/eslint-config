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

export const node = async (config: ConfigOptions): Promise<Linter.Config> => {
  if (!config.node) {
    return {}
  }

  const nodePlugin = await interopDefault(import('eslint-plugin-n'))

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
    name: 'lzear/node',

    files,

    plugins: {
      n: nodePlugin,
    },

    rules: {
      ...nodePlugin.configs['recommended-module'].rules,
      'n/no-missing-import': 0,
    },
  }
}
