import eslintTypescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import { defineFlatConfig } from 'eslint-define-config'
import baseConfig from '@azat-io/eslint-config'

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
      '@typescript-eslint/adjacent-overload-signatures': 'error',
      '@typescript-eslint/array-type': 'error',
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/consistent-generic-constructors': 'error',
      '@typescript-eslint/consistent-type-definitions': 'error',
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/method-signature-style': 'error',
      '@typescript-eslint/no-duplicate-type-constituents': 'error',
      '@typescript-eslint/no-empty-interface': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-extra-non-null-assertion': 'error',
      '@typescript-eslint/no-for-in-array': 'error',
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/no-mixed-enums': 'error',
      '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-require-imports': 'error',
      '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
      '@typescript-eslint/no-unnecessary-condition': 'error',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/restrict-plus-operands': 'error',
      '@typescript-eslint/unified-signatures': 'error',
      '@typescript-eslint/dot-notation': 'error',
      '@typescript-eslint/no-array-constructor': 'error',
      '@typescript-eslint/no-dupe-class-members': 'error',
      '@typescript-eslint/no-implied-eval': 'error',
      '@typescript-eslint/no-throw-literal': 'error',
      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
          allowTernary: true,
          allowTaggedTemplates: true,
        },
      ],
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-use-before-define': [
        'error',
        {
          functions: false,
          classes: false,
          variables: false,
        },
      ],
      '@typescript-eslint/no-useless-constructor': 'error',
      '@typescript-eslint/block-spacing': ['error', 'always'],
      '@typescript-eslint/brace-style': [
        'error',
        '1tbs',
        {
          allowSingleLine: true,
        },
      ],
      '@typescript-eslint/comma-dangle': [
        'error',
        {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          functions: 'always-multiline',
        },
      ],
      '@typescript-eslint/comma-spacing': [
        'error',
        {
          before: false,
          after: true,
        },
      ],
      '@typescript-eslint/func-call-spacing': ['error', 'never'],
      '@typescript-eslint/indent': ['error', 2],
      '@typescript-eslint/key-spacing': [
        'error',
        {
          beforeColon: false,
          afterColon: true,
        },
      ],
      '@typescript-eslint/lines-between-class-members': [
        'error',
        'always',
        {
          exceptAfterSingleLine: true,
        },
      ],
      '@typescript-eslint/no-extra-parens': ['error', 'functions'],
      '@typescript-eslint/object-curly-spacing': ['error', 'always'],
      '@typescript-eslint/quotes': [
        'error',
        'single',
        {
          avoidEscape: true,
          allowTemplateLiterals: false,
        },
      ],
      '@typescript-eslint/semi': ['error', 'never'],
      '@typescript-eslint/space-before-blocks': ['error', 'always'],
      '@typescript-eslint/space-before-function-paren': ['error', 'always'],
      '@typescript-eslint/space-infix-ops': 'error',

      'dot-notation': 'off',
      'no-array-constructor': 'off',
      'no-dupe-class-members': 'off',
      'no-implied-eval': 'off',
      'no-throw-literal': 'off',
      'no-unused-expressions': 'off',
      'no-unused-vars': 'off',
      'no-use-before-define': 'off',
      'no-useless-constructor': 'off',
      'block-spacing': 'off',
      'brace-style': 'off',
      'comma-dangle': 'off',
      'comma-spacing': 'off',
      'func-call-spacing': 'off',
      indent: 'off',
      'key-spacing': 'off',
      'lines-between-class-members': 'off',
      'no-extra-parens': 'off',
      'object-curly-spacing': 'off',
      quotes: 'off',
      semi: 'off',
      'space-before-blocks': 'off',
      'space-before-function-paren': 'off',
      'space-infix-ops': 'off',

      'import/no-commonjs': 'error',
    },

    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
  },
])