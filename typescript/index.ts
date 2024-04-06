import baseConfig from '@lzear/eslint-config'
import eslintTypescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import type { FlatESLintConfig } from 'eslint-define-config'
import { defineFlatConfig } from 'eslint-define-config'

const configs: FlatESLintConfig[] = [
  // @ts-expect-error ...
  ...baseConfig,
  {
    files: ['**/*.ts', '**/*.tsx'],

    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        tsconfigRootDir: process.cwd(),
        project: ['./tsconfig.json'],
      },
    },
    // @ts-expect-error ...
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
