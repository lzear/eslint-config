import type { FlatESLintConfig } from 'eslint-define-config'

import eslintTypescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import { defineFlatConfig } from 'eslint-define-config'
import baseConfig from '@lzear/eslint-config'

const configs: FlatESLintConfig[] = [
  // @ts-expect-error ...
  ...baseConfig,
  // @ts-expect-error https://github.com/typescript-eslint/typescript-eslint/issues/7694
  {
    files: ['**/*.ts', '**/*.tsx'],

    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        tsconfigRootDir: process.cwd(),
        project: ['./tsconfig.json'],
      },
    },
    plugins: {
      '@typescript-eslint': eslintTypescript,
    },

    settings: {
      'import/resolver': {
        typescript: { alwaysTryTypes: true },
        node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
      },
    },
    rules: eslintTypescript.configs.recommended.rules,
  },
]

const config = defineFlatConfig(configs)

export default config
