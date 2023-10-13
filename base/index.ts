import perfectionistLineLength from 'eslint-plugin-perfectionist/configs/recommended-line-length'
import { defineFlatConfig } from 'eslint-define-config'
import preferArrow from 'eslint-plugin-prefer-arrow'
import eslintImport from 'eslint-plugin-import'
import promise from 'eslint-plugin-promise'
import unicorn from 'eslint-plugin-unicorn'
import sonarjs from 'eslint-plugin-sonarjs'
import vitest from 'eslint-plugin-vitest'
import n from 'eslint-plugin-n'
import globals from 'globals'
import js from '@eslint/js'

const config = defineFlatConfig([
  {
    ignores: ['**/node_modules/**', '**/dist/**', '.git/**'],
  },
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
    },

    plugins: {
      'prefer-arrow': preferArrow,
      import: eslintImport,
      promise,
      sonarjs,
      unicorn,
      vitest,
      n,
    },

    rules: {
      ...eslintImport.configs.recommended.rules,
      ...n.configs.recommended.rules,
      'prefer-arrow/prefer-arrow-functions': [
        2,
        {
          disallowPrototype: true,
          singleReturnOnly: false,
          classPropertiesAllowed: false,
        },
      ],
      ...promise.configs.recommended.rules,

      'sonarjs/no-collapsible-if': 2,
      'sonarjs/no-duplicated-branches': 2,
      'sonarjs/no-extra-arguments': 2,
      'sonarjs/no-identical-conditions': 2,
      'sonarjs/no-identical-functions': 2,
      'sonarjs/no-ignored-return': 2,
      'sonarjs/no-inverted-boolean-check': 2,
      'sonarjs/no-redundant-boolean': 2,
      'sonarjs/no-same-line-conditional': 2,
      'sonarjs/no-small-switch': 2,
      'sonarjs/no-unused-collection': 2,
      'sonarjs/no-use-of-empty-return-value': 2,
      'sonarjs/prefer-immediate-return': 2,
      'sonarjs/prefer-single-boolean-return': 2,

      'unicorn/better-regex': 2,
      'unicorn/catch-error-name': 2,
      'unicorn/custom-error-definition': 2,
      'unicorn/no-for-loop': 2,
      'unicorn/no-instanceof-array': 2,
      'unicorn/no-invalid-remove-event-listener': 2,
      'unicorn/no-typeof-undefined': 2,
      'unicorn/no-unnecessary-await': 2,
      'unicorn/no-unused-properties': 2,
      'unicorn/no-useless-spread': 2,
      'unicorn/no-useless-undefined': [
        2,
        {
          checkArguments: false,
        },
      ],
      'unicorn/prefer-add-event-listener': 2,
      'unicorn/prefer-array-index-of': 2,
      'unicorn/prefer-array-some': 2,
      'unicorn/prefer-at': 2,
      'unicorn/prefer-date-now': 2,
      'unicorn/prefer-default-parameters': 2,
      'unicorn/prefer-includes': 2,
      'unicorn/prefer-keyboard-event-key': 2,
      'unicorn/prefer-logical-operator-over-ternary': 2,
      'unicorn/prefer-string-replace-all': 2,
      'unicorn/prefer-string-slice': 2,
      'unicorn/prefer-string-starts-ends-with': 2,
    },
  },

  {
    files: [
      '**/test/*.js',
      '**/test/*.ts',
      '**/test/*.jsx',
      '**/test/*.tsx',
      '**/*.test.js',
      '**/*.test.ts',
      '**/*.test.jsx',
      '**/*.test.tsx',
    ],

    plugins: {
      vitest,
    },

    rules: {
      'vitest/consistent-test-filename': 2,
      'vitest/consistent-test-it': [2, { fn: 'it' }],
      'vitest/no-alias-methods': 2,
      'vitest/no-commented-out-tests': 2,
      'vitest/no-conditional-expect': 2,
      'vitest/no-conditional-in-test': 2,
      'vitest/no-conditional-tests': 2,
      'vitest/no-disabled-tests': 2,
      'vitest/no-duplicate-hooks': 2,
      'vitest/no-focused-tests': 2,
      'vitest/no-identical-title': 2,
      'vitest/no-standalone-expect': 2,
      'vitest/no-test-return-statement': 2,
      'vitest/prefer-comparison-matcher': 2,
      'vitest/prefer-expect-resolves': 2,
      'vitest/prefer-hooks-in-order': 2,
      'vitest/prefer-hooks-on-top': 2,
      'vitest/prefer-lowercase-title': 2,
      'vitest/prefer-spy-on': 2,
      'vitest/prefer-to-be-falsy': 2,
      'vitest/prefer-to-be-truthy': 2,
      'vitest/prefer-to-be': 2,
      'vitest/prefer-to-contain': 2,
      'vitest/prefer-to-have-length': 2,
      'vitest/require-top-level-describe': 2,
      'vitest/valid-describe-callback': 2,
      'vitest/valid-expect': 2,
    },
  },
  perfectionistLineLength,
])

export default config
