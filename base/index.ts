import perfectionistLineLength from 'eslint-plugin-perfectionist/configs/recommended-line-length'
import { defineFlatConfig } from 'eslint-define-config'
import preferArrow from 'eslint-plugin-prefer-arrow'
import nodeImport from 'eslint-plugin-node-import'
import eslintImport from 'eslint-plugin-import'
import promise from 'eslint-plugin-promise'
import unicorn from 'eslint-plugin-unicorn'
import sonarjs from 'eslint-plugin-sonarjs'
import vitest from 'eslint-plugin-vitest'
import n from 'eslint-plugin-n'
import globals from 'globals'

const config = defineFlatConfig([
  {
    ignores: ['**/node_modules/**', '**/dist/**', '.git/**'],
  },
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
      'node-import': nodeImport,
      import: eslintImport,
      promise,
      sonarjs,
      unicorn,
      vitest,
      n,
    },

    rules: {
      'array-callback-return': [
        2,
        {
          allowImplicit: false,
          checkForEach: false,
        },
      ],
      'arrow-body-style': [2, 'as-needed'],
      camelcase: [
        2,
        {
          properties: 'always',
          ignoreGlobals: true,
        },
      ],
      'consistent-return': 2,
      'constructor-super': 2,
      curly: [2, 'all'],
      'default-case-last': 2,
      'dot-notation': [
        2,
        {
          allowKeywords: true,
        },
      ],
      eqeqeq: 2,
      'new-cap': [
        2,
        {
          newIsCap: true,
          capIsNew: false,
          properties: true,
        },
      ],
      'new-parens': 2,
      'no-array-constructor': 2,
      'no-async-promise-executor': 2,
      'no-caller': 2,
      'no-case-declarations': 2,
      'no-class-assign': 2,
      'no-compare-neg-zero': 2,
      'no-cond-assign': 2,
      'no-console': [
        2,
        {
          allow: ['warn', 'error'],
        },
      ],
      'no-const-assign': 2,
      'no-constant-condition': 2,
      'no-control-regex': 2,
      'no-debugger': 2,
      'no-delete-var': 2,
      'no-dupe-args': 2,
      'no-dupe-class-members': 2,
      'no-dupe-else-if': 2,
      'no-dupe-keys': 2,
      'no-duplicate-case': 2,
      'no-else-return': 2,
      'no-empty': [
        2,
        {
          allowEmptyCatch: true,
        },
      ],
      'no-empty-character-class': 2,
      'no-empty-pattern': 2,
      'no-eval': 2,
      'no-ex-assign': 2,
      'no-extend-native': 2,
      'no-extra-bind': 2,
      'no-extra-boolean-cast': 2,
      'no-extra-parens': [2, 'functions'],
      'no-fallthrough': 2,
      'no-floating-decimal': 2,
      'no-func-assign': 2,
      'no-global-assign': 2,
      'no-implied-eval': 2,
      'no-import-assign': 2,
      'no-invalid-regexp': 2,
      'no-irregular-whitespace': [
        2,
        {
          skipComments: true,
          skipJSXText: true,
          skipRegExps: true,
          skipStrings: true,
          skipTemplates: true,
        },
      ],
      'no-iterator': 2,
      'no-labels': [
        2,
        {
          allowLoop: false,
          allowSwitch: false,
        },
      ],
      'no-mixed-operators': [
        2,
        {
          groups: [
            ['===', '!==', '>', '>=', '<', '<='],
            ['&&', '||', '??'],
            ['in', 'instanceof'],
          ],
          allowSamePrecedence: true,
        },
      ],
      'no-multi-str': 2,
      'no-nested-ternary': 2,
      'no-new': 2,
      'no-new-func': 2,
      'no-new-object': 2,
      'no-new-symbol': 2,
      'no-new-wrappers': 2,
      'no-obj-calls': 2,
      'no-octal': 2,
      'no-octal-escape': 2,
      'no-redeclare': 2,
      'no-regex-spaces': 2,
      'no-return-assign': [2, 'except-parens'],
      'no-self-assign': [
        2,
        {
          props: true,
        },
      ],
      'no-self-compare': 2,
      'no-shadow': 2,
      'no-shadow-restricted-names': 2,
      'no-sparse-arrays': 2,
      'no-template-curly-in-string': 2,
      'no-undef': 2,
      'no-undef-init': 2,
      'no-unexpected-multiline': 2,
      'no-unneeded-ternary': [
        2,
        {
          defaultAssignment: false,
        },
      ],
      'no-unreachable-loop': 2,
      'no-unsafe-finally': 2,
      'no-unsafe-negation': 2,
      'no-unsafe-optional-chaining': 2,
      'no-unused-expressions': [
        2,
        {
          allowShortCircuit: true,
          allowTernary: true,
          allowTaggedTemplates: true,
        },
      ],
      'no-unused-vars': [
        2,
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      'no-use-before-define': [
        2,
        {
          functions: false,
          classes: false,
          variables: false,
        },
      ],
      'no-useless-backreference': 2,
      'no-useless-call': 2,
      'no-useless-catch': 2,
      'no-useless-computed-key': 2,
      'no-useless-constructor': 2,
      'no-useless-escape': 2,
      'no-useless-rename': 2,
      'no-useless-return': 2,
      'no-var': 2,
      'no-void': 2,
      'no-with': 2,
      'object-shorthand': [2, 'always'],
      'one-var': [
        2,
        {
          initialized: 'never',
        },
      ],
      'prefer-destructuring': 2,
      'prefer-exponentiation-operator': 2,
      'prefer-promise-reject-errors': 2,
      'prefer-regex-literals': [
        2,
        {
          disallowRedundantWrapping: true,
        },
      ],
      'prefer-rest-params': 2,
      'quote-props': [2, 'as-needed'],
      'use-isnan': [
        2,
        {
          enforceForSwitchCase: true,
          enforceForIndexOf: true,
        },
      ],
      'valid-typeof': [
        2,
        {
          requireStringLiterals: true,
        },
      ],
      'wrap-iife': [
        2,
        'any',
        {
          functionPrototypeMethods: true,
        },
      ],
      yoda: [2, 'never'],

      'import/consistent-type-specifier-style': [2, 'prefer-top-level'],
      'import/export': 2,
      'import/first': 2,
      'import/named': 2,
      'import/no-duplicates': 2,
      'import/no-empty-named-blocks': 2,
      'import/no-extraneous-dependencies': [
        2,
        {
          devDependencies: true,
          optionalDependencies: false,
          peerDependencies: false,
        },
      ],
      'import/no-named-default': 2,
      'import/no-self-import': 2,
      'import/no-useless-path-segments': 2,
      'import/no-webpack-loader-syntax': 2,

      'n/handle-callback-err': [2, '^(err|error)$'],
      'n/no-deprecated-api': 2,
      'n/no-exports-assign': 2,
      'n/no-path-concat': 2,
      'n/process-exit-as-throw': 2,

      'node-import/prefer-node-protocol': 2,

      'prefer-arrow/prefer-arrow-functions': [
        2,
        {
          disallowPrototype: true,
          singleReturnOnly: false,
          classPropertiesAllowed: false,
        },
      ],

      'promise/no-multiple-resolved': 2,
      'promise/no-nesting': 2,
      'promise/no-promise-in-callback': 2,
      'promise/param-names': 2,
      'promise/prefer-await-to-then': 2,
      'promise/valid-params': 2,

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
