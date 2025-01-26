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

export const react = async (config: ConfigOptions): Promise<Linter.Config> => {
  if (!config.react) {
    return {}
  }

  const [
    reactCompilerPlugin,
    reactHooksPlugin,
    reactPerfPlugin,
    reactPlugin,
    nextPlugin,
  ] = await Promise.all([
    interopDefault(import('eslint-plugin-react-compiler')),
    interopDefault(import('eslint-plugin-react-hooks')),
    interopDefault(import('eslint-plugin-react-perf')),
    interopDefault(import('eslint-plugin-react')),
    interopDefault(import('@next/eslint-plugin-next')),
  ] as const)

  const files = ['**/*.jsx']

  if (config.typescript) {
    files.push('**/*.tsx')
  }

  return {
    name: 'lzear/react',

    files,

    plugins: {
      '@next/next': nextPlugin,
      react: reactPlugin,
      'react-compiler': reactCompilerPlugin,
      'react-hooks': reactHooksPlugin,
      'react-perf': reactPerfPlugin,
    },

    rules: {
      'react-compiler/react-compiler': 2,
      ...reactHooksPlugin.configs.recommended.rules,
      ...reactPerfPlugin.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },

    settings: {
      react: {
        fragment: 'Fragment',
        pragma: 'React',
        version: 'detect',
      },
    },
  }
}
