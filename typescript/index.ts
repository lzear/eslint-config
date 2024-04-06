import baseConfig from '@lzear/eslint-config'
import eslintTypescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import type { FlatESLintConfig } from 'eslint-define-config'
import { defineFlatConfig } from 'eslint-define-config'

const configs: FlatESLintConfig[] = [
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
    plugins: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      '@typescript-eslint': eslintTypescript as any,
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
