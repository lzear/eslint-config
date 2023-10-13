import eslintTypescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import { defineFlatConfig } from 'eslint-define-config'
import baseConfig from '@lzear/eslint-config'

export default defineFlatConfig([
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
      '@typescript-eslint': eslintTypescript,
    },

    rules: {
      '@typescript-eslint/array-type': 2,
      '@typescript-eslint/await-thenable': 2,
      '@typescript-eslint/consistent-generic-constructors': 2,
      '@typescript-eslint/consistent-type-definitions': 2,
      '@typescript-eslint/consistent-type-exports': 2,
      '@typescript-eslint/consistent-type-imports': 2,
      '@typescript-eslint/method-signature-style': 2,
      '@typescript-eslint/no-duplicate-type-constituents': 2,
      '@typescript-eslint/no-empty-interface': 2,
      '@typescript-eslint/no-explicit-any': 2,
      '@typescript-eslint/no-extra-non-null-assertion': 2,
      '@typescript-eslint/no-for-in-array': 2,
      '@typescript-eslint/no-import-type-side-effects': 2,
      '@typescript-eslint/no-mixed-enums': 2,
      '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 2,
      '@typescript-eslint/no-non-null-asserted-optional-chain': 2,
      '@typescript-eslint/no-redeclare': 2,
      '@typescript-eslint/no-require-imports': 2,
      '@typescript-eslint/no-shadow': 2,
      '@typescript-eslint/no-unnecessary-boolean-literal-compare': 2,
      '@typescript-eslint/no-unnecessary-condition': 2,
      '@typescript-eslint/no-unnecessary-type-assertion': 2,
      '@typescript-eslint/prefer-optional-chain': 2,
      '@typescript-eslint/restrict-plus-operands': 2,
      '@typescript-eslint/unified-signatures': 2,
      '@typescript-eslint/dot-notation': 2,
      '@typescript-eslint/no-array-constructor': 2,
      '@typescript-eslint/no-dupe-class-members': 2,
      '@typescript-eslint/no-implied-eval': 2,
      '@typescript-eslint/no-unused-expressions': [
        2,
        {
          allowShortCircuit: true,
          allowTernary: true,
          allowTaggedTemplates: true,
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        2,
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/no-use-before-define': [
        2,
        {
          functions: false,
          classes: false,
          variables: false,
        },
      ],
      '@typescript-eslint/no-useless-constructor': 2,
      '@typescript-eslint/block-spacing': [2, 'always'],
      '@typescript-eslint/func-call-spacing': [2, 'never'],
      '@typescript-eslint/no-extra-parens': [2, 'functions'],

      'dot-notation': 'off',
      'no-array-constructor': 'off',
      'no-dupe-class-members': 'off',
      'no-implied-eval': 'off',
      'no-redeclare': 'off',
      'no-shadow': 'off',
      'no-unused-expressions': 'off',
      'no-unused-vars': 'off',
      'no-use-before-define': 'off',
      'no-useless-constructor': 'off',
      'block-spacing': 'off',
      'func-call-spacing': 'off',
      'no-extra-parens': 'off',
      'no-undef': 'off',

      'import/no-unresolved': 2,
    },

    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  },
])
