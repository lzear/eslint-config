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

import eslint from '@eslint/js'
import type { Linter } from 'eslint'
import tseslint from 'typescript-eslint'
import type { ConfigOptions } from '../..'
import { interopDefault } from '../../utils'

export const typescript = async (
  config: ConfigOptions,
): Promise<Linter.Config[]> => {
  if (!config.typescript) {
    return []
  }

  const { parser: typescriptParser } = await interopDefault(
    import('typescript-eslint'),
  )

  const files = ['**/*.ts', '**/*.cts', '**/*.mts']

  if (config.react) {
    files.push('**/*.tsx')
  }

  return tseslint.config({
    name: 'lzear/typescript',

    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommendedTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],

    files,

    languageOptions: {
      parser: typescriptParser as unknown as Linter.Parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: config.react,
        },
        ecmaVersion: 'latest',
        projectService: true,
        sourceType: 'module',
        tsconfigRootDir: process.cwd(),
      },
    },

    settings: {
      jsdoc: {
        mode: 'typescript',
      },
    },
  }) as Linter.Config[]
}
