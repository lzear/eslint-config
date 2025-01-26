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

import type { ESLint, Linter } from 'eslint'

import eslintCommentsPlugin from '@eslint-community/eslint-plugin-eslint-comments'
import preferArrowPlugin from 'eslint-plugin-prefer-arrow'
import importXPlugin from 'eslint-plugin-import-x'
import promisePlugin from 'eslint-plugin-promise'
import sonarjsPlugin from 'eslint-plugin-sonarjs'
import unicornPlugin from 'eslint-plugin-unicorn'
import regexpPlugin from 'eslint-plugin-regexp'
import jsdocPlugin from 'eslint-plugin-jsdoc'
import globals from 'globals'

import type { ConfigOptions } from '../..'

export const core = (config: ConfigOptions): Linter.Config => {
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
    name: 'lzear/core',

    files,

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2025,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },

    plugins: {
      '@eslint-community/eslint-comments': eslintCommentsPlugin,
      'import-x': importXPlugin as unknown as ESLint.Plugin,
      jsdoc: jsdocPlugin,
      'prefer-arrow': preferArrowPlugin,
      promise: promisePlugin,
      regexp: regexpPlugin,
      sonarjs: sonarjsPlugin,
      unicorn: unicornPlugin,
    },

    rules: {
      /**
       * Require property getters and setters to come in pairs.
       */
      'accessor-pairs': 'error',
      /**
       * Enforce `return` statements in callbacks of array methods.
       */
      'array-callback-return': [
        'error',
        {
          allowImplicit: false,
          checkForEach: false,
        },
      ],
      /**
       * Require braces around arrow function bodies only if needed.
       */
      'arrow-body-style': ['error', 'as-needed'],
      /**
       * Require to use camelcase.
       */
      camelcase: [
        'error',
        {
          ignoreGlobals: true,
          properties: 'always',
        },
      ],
      /**
       * Enforce capitalization of the first letter of a comment
       */
      'capitalized-comments': [
        'error',
        'always',
        {
          ignorePattern: 'c8|v8|spell-checker',
        },
      ],
      /**
       * Enforce that class methods utilize `this` or use `static` methods.
       */
      'class-methods-use-this': 'error',
      /**
       * Require `return` statements to either always or never specify values.
       */
      'consistent-return': 'error',
      /**
       * Require `super()` calls in constructors.
       */
      'constructor-super': 'error',
      /**
       * Require to use curly braces.
       */
      curly: ['error', 'all'],
      /**
       * Require `default` clauses in `switch` statements to be last.
       */
      'default-case-last': 'error',
      /**
       * Enforce default parameters to be last.
       */
      'default-param-last': 'error',
      /**
       * Require to use dot notation whenever possible.
       */
      'dot-notation': 'error',
      /**
       * Require the use of `===` and `!==`.
       */
      eqeqeq: 'error',
      /**
       * Enforce `for` loop update clause moving the counter in the right
       * direction.
       */
      'for-direction': 'error',
      /**
       * Disallow named function expressions.
       */
      'func-names': ['error', 'never'],
      /**
       * Enforce return statements in getters.
       */
      'getter-return': 'error',
      /**
       * Enforce minimum identifier lengths.
       */
      'id-length': [
        'error',
        {
          exceptions: ['_', 'a', 'b', 'i', 'j', 't', 'x', 'y', 'z'],
          min: 2,
          properties: 'never',
        },
      ],
      /**
       * Require logical assignment operator shorthand.
       */
      'logical-assignment-operators': ['error', 'always'],
      /**
       * Enforce a maximum number of parameters in function definitions.
       */
      'max-params': [
        'error',
        {
          max: 3,
        },
      ],
      /**
       * Require constructor names to begin with a capital letter.
       */
      'new-cap': [
        'error',
        {
          capIsNew: false,
          newIsCap: true,
          properties: true,
        },
      ],
      /**
       * Disallow the use of `alert`, `confirm`, and `prompt`.
       */
      'no-alert': 'error',
      /**
       * Disallow `Array` constructors.
       */
      'no-array-constructor': 'error',
      /**
       * Disallow using an async function as a Promise executor.
       */
      'no-async-promise-executor': 'error',
      /**
       * Disallow await inside of loops.
       */
      'no-await-in-loop': 'error',
      /**
       * Disallow the use of `arguments.caller` or `arguments.callee`.
       */
      'no-caller': 'error',
      /**
       * Disallow lexical declarations in case clauses.
       */
      'no-case-declarations': 'error',
      /**
       * Disallow reassigning class members.
       */
      'no-class-assign': 'error',
      /**
       * Disallow comparing against -0.
       */
      'no-compare-neg-zero': 'error',
      /**
       * Disallow assignment operators in conditional expressions.
       */
      'no-cond-assign': 'error',
      /**
       * Disallow the use of `console`.
       */
      'no-console': [
        'error',
        {
          allow: ['error', 'warn', 'info'],
        },
      ],
      /**
       * Disallow reassigning `const` variables.
       */
      'no-const-assign': 'error',
      /**
       * Disallow expressions where the operation doesn't affect the value.
       */
      'no-constant-binary-expression': 'error',
      /**
       * Disallow constant expressions in conditions.
       */
      'no-constant-condition': 'error',
      /**
       * Disallow returning value from constructor.
       */
      'no-constructor-return': 'error',
      /**
       * Disallow control characters in regular expressions.
       */
      'no-control-regex': 'error',
      /**
       * Disallow the use of `debugger`.
       */
      'no-debugger': 'error',
      /**
       * Disallow deleting variables.
       */
      'no-delete-var': 'error',
      /**
       * Disallow duplicate `arguments` in function definitions.
       */
      'no-dupe-args': 'error',
      /**
       * Disallow duplicate class members.
       */
      'no-dupe-class-members': 'error',
      /**
       * Disallow duplicate conditions in if-else-if chains.
       */
      'no-dupe-else-if': 'error',
      /**
       * Disallow duplicate keys in object literals.
       */
      'no-dupe-keys': 'error',
      /**
       * Disallow duplicate case labels.
       */
      'no-duplicate-case': 'error',
      /**
       * Disallow `else` blocks after return statements in `if` statements.
       */
      'no-else-return': 'error',
      /**
       * Disallow empty block statements.
       */
      'no-empty': [
        'error',
        {
          allowEmptyCatch: true,
        },
      ],
      /**
       * Disallow empty character classes in regular expressions.
       */
      'no-empty-character-class': 'error',
      /**
       * Disallow empty destructuring patterns.
       */
      'no-empty-pattern': 'error',
      /**
       * Disallow empty static blocks.
       */
      'no-empty-static-block': 'error',
      /**
       * Disallow the use of `eval()`.
       */
      'no-eval': 'error',
      /**
       * Disallow reassigning exceptions in catch clauses.
       */
      'no-ex-assign': 'error',
      /**
       * Disallow extending native types.
       */
      'no-extend-native': 'error',
      /**
       * Disallow unnecessary calls to `.bind()`.
       */
      'no-extra-bind': 'error',
      /**
       * Disallow unnecessary boolean casts.
       */
      'no-extra-boolean-cast': 'error',
      /**
       * Disallow unnecessary labels.
       */
      'no-extra-label': 'error',
      /**
       * Disallow fallthrough of case statements.
       */
      'no-fallthrough': 'error',
      /**
       * Disallow reassigning `function` declarations.
       */
      'no-func-assign': 'error',
      /**
       * Disallow assignments to native objects or read-only global variables.
       */
      'no-global-assign': 'error',
      /**
       * Disallow the use of `eval()`-like methods.
       */
      'no-implied-eval': 'error',
      /**
       * Disallow assigning to imported bindings.
       */
      'no-import-assign': 'error',
      /**
       * Disallow invalid regular expression strings in `RegExp` constructors.
       */
      'no-invalid-regexp': 'error',
      /**
       * Disallow irregular whitespace.
       */
      'no-irregular-whitespace': [
        'error',
        {
          skipComments: true,
          skipJSXText: true,
          skipRegExps: true,
          skipStrings: true,
          skipTemplates: true,
        },
      ],
      /**
       * Disallow the use of the `__iterator__` property.
       */
      'no-iterator': 'error',
      /**
       * Disallow labels that share a name with a variable.
       */
      'no-label-var': 'error',
      /**
       * Disallow labeled statements.
       */
      'no-labels': [
        'error',
        {
          allowLoop: false,
          allowSwitch: false,
        },
      ],
      /**
       * Disallow unnecessary nested blocks.
       */
      'no-lone-blocks': 'error',
      /**
       * Disallow function declarations that contain unsafe references inside
       * loop statements.
       */
      'no-loop-func': 'error',
      /**
       * Disallow literal numbers that lose precision.
       */
      'no-loss-of-precision': 'error',
      /**
       * Disallow use of chained assignment expressions.
       */
      'no-multi-assign': 'error',
      /**
       * Disallow multiline strings.
       */
      'no-multi-str': 'error',
      /**
       * Disallow nested ternary expressions.
       */
      'no-nested-ternary': 'error',
      /**
       * Disallow `new` operators outside of assignments or comparisons.
       */
      'no-new': 'error',
      /**
       * Disallow `new` operators with the Function object.
       */
      'no-new-func': 'error',
      /**
       * Disallow `new` operators with global non-constructor functions.
       */
      'no-new-native-nonconstructor': 'error',
      /**
       * Disallow `new` operators with the `String`, `Number`, and `Boolean`
       * objects.
       */
      'no-new-wrappers': 'error',
      /**
       * Disallow `\8` and `\9` escape sequences in string literals.
       */
      'no-nonoctal-decimal-escape': 'error',
      /**
       * Disallow calling global object properties as functions.
       */
      'no-obj-calls': 'error',
      /**
       * Disallow calls to the Object constructor without an argument.
       */
      'no-object-constructor': 'error',
      /**
       * Disallow octal literals.
       */
      'no-octal': 'error',
      /**
       * Disallow octal escape sequences in string literals.
       */
      'no-octal-escape': 'error',
      /**
       * Disallow reassigning function parameters.
       */
      'no-param-reassign': 'error',
      /**
       * Disallow returning values from Promise executor functions.
       */
      'no-promise-executor-return': 'error',
      /**
       * Disallow the use of the `__proto__` property.
       */
      'no-proto': 'error',
      /**
       * Disallow calling some `Object.prototype` methods directly on objects.
       */
      'no-prototype-builtins': 'error',
      /**
       * Disallow variable redeclaration.
       */
      'no-redeclare': 'error',
      /**
       * Disallow multiple spaces in regular expressions.
       */
      'no-regex-spaces': 'error',
      /**
       * Disallow assignment operators in return statements.
       */
      'no-return-assign': ['error', 'except-parens'],
      /**
       * Disallow assignments where both sides are exactly the same.
       */
      'no-self-assign': [
        'error',
        {
          props: true,
        },
      ],
      /**
       * Disallow comparisons where both sides are exactly the same.
       */
      'no-self-compare': 'error',
      /**
       * Disallow returning values from setters.
       */
      'no-setter-return': 'error',
      /**
       * Disallow variable declarations from shadowing variables declared in the
       * outer scope.
       */
      'no-shadow': 'error',
      /**
       * Disallow identifiers from shadowing restricted names.
       */
      'no-shadow-restricted-names': 'error',
      /**
       * Disallow sparse arrays.
       */
      'no-sparse-arrays': 'error',
      /**
       * Disallow template literal placeholder syntax in regular strings.
       */
      'no-template-curly-in-string': 'error',
      /**
       * Disallow `this`/`super` before calling `super()` in constructors.
       */
      'no-this-before-super': 'error',
      /**
       * Disallow throwing literals as exceptions.
       */
      'no-throw-literal': 'error',
      /**
       * Disallow the use of undeclared variables unless mentioned in
       * `\/*global *\/` comments.
       */
      'no-undef': 'error',
      /**
       * Disallow initializing variables to undefined.
       */
      'no-undef-init': 'error',
      /**
       * Disallow the use of `undefined` as an identifier.
       */
      'no-undefined': 'error',
      /**
       * Disallow confusing multiline expressions.
       */
      'no-unexpected-multiline': 'error',
      /**
       * Disallow infinite loops.
       */
      'no-unmodified-loop-condition': 'error',
      /**
       * Disallow ternary operators when simpler alternatives exist.
       */
      'no-unneeded-ternary': [
        'error',
        {
          defaultAssignment: false,
        },
      ],
      /**
       * Disallow unreachable code after `return`, `throw`, `continue`, and
       * `break` statements.
       */
      'no-unreachable': 'error',
      /**
       * Disallow loops with a body that allows only one iteration.
       */
      'no-unreachable-loop': 'error',
      /**
       * Disallow control flow statements in finally blocks.
       */
      'no-unsafe-finally': 'error',
      /**
       * Disallow negating the left operand of relational operators.
       */
      'no-unsafe-negation': 'error',
      /**
       * Disallow use of optional chaining in contexts where the `undefined`
       * value is not allowed.
       */
      'no-unsafe-optional-chaining': 'error',
      /**
       * Disallow unused expressions.
       */
      'no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
          allowTaggedTemplates: true,
          allowTernary: true,
        },
      ],
      /**
       * Disallow unused labels.
       */
      'no-unused-labels': 'error',
      /**
       * Disallow unused private class members.
       */
      'no-unused-private-class-members': 'error',
      /**
       * Disallow unused variables.
       */
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          ignoreRestSiblings: true,
          varsIgnorePattern: '^_',
        },
      ],
      /**
       * Disallow the use of variables before they are defined.
       */
      'no-use-before-define': [
        'error',
        {
          classes: false,
          functions: false,
          variables: false,
        },
      ],
      /**
       * Disallow variable assignments when the value is not used.
       */
      'no-useless-assignment': config.react ? 'off' : 'error',
      /**
       * Disallow useless backreferences in regular expressions.
       */
      'no-useless-backreference': 'error',
      /**
       * Disallow unnecessary calls to `.call()` and `.apply()`.
       */
      'no-useless-call': 'error',
      /**
       * Disallow unnecessary catch clauses.
       */
      'no-useless-catch': 'error',
      /**
       * Disallow unnecessary computed property keys in objects and classes.
       */
      'no-useless-computed-key': 'error',
      /**
       * Disallow unnecessary concatenation of literals or template literals.
       */
      'no-useless-concat': 'error',
      /**
       * Disallow unnecessary constructors.
       */
      'no-useless-constructor': 'error',
      /**
       * Disallow unnecessary escape characters.
       */
      'no-useless-escape': 'error',
      /**
       * Disallow renaming import, export, and destructured assignments to the
       * same name.
       */
      'no-useless-rename': 'error',
      /**
       * Disallow redundant return statements.
       */
      'no-useless-return': 'error',
      /**
       * Require `let` or `const` instead of `var`.
       */
      'no-var': 'error',
      /**
       * Disallow `void` operators.
       */
      'no-void': 'error',
      /**
       * Disallow `with` statements.
       */
      'no-with': 'error',
      /**
       * Require method and property shorthand syntax for object literals.
       */
      'object-shorthand': ['error', 'always'],
      /**
       * Enforce variables to be declared either together or separately in
       * functions.
       */
      'one-var': [
        'error',
        {
          initialized: 'never',
        },
      ],
      /**
       * Require assignment operator shorthand where possible
       */
      'operator-assignment': ['error', 'always'],
      /**
       * Require using arrow functions for callbacks.
       */
      'prefer-arrow-callback': 'error',
      /**
       * Require destructuring from arrays and/or objects.
       */
      'prefer-destructuring': 'error',
      /**
       * Disallow the use of `Math.pow` in favor of the `**` operator.
       */
      'prefer-exponentiation-operator': 'error',
      /**
       * Enforce using named capture group in regular expression.
       */
      'prefer-named-capture-group': 'error',
      /**
       * Disallow `parseInt()` and `Number.parseInt()` in favor of binary,
       * octal, and hexadecimal literals
       */
      'prefer-numeric-literals': 'error',
      /**
       * Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use
       * of `Object.hasOwn()`.
       */
      'prefer-object-has-own': 'error',
      /**
       * Disallow using `Object.assign` with an object literal as the first
       * argument and prefer the use of object spread instead.
       */
      'prefer-object-spread': 'error',
      /**
       * Require using Error objects as Promise rejection reasons.
       */
      'prefer-promise-reject-errors': 'error',
      /**
       * Disallow use of the `RegExp` constructor in favor of regular expression
       * literals.
       */
      'prefer-regex-literals': [
        'error',
        {
          disallowRedundantWrapping: true,
        },
      ],
      /**
       * Require rest parameters instead of arguments.
       */
      'prefer-rest-params': 'error',
      /**
       * Require spread operators instead of `.apply()`.
       */
      'prefer-spread': 'error',
      /**
       * Require template literals instead of string concatenation.
       */
      'prefer-template': 'error',
      /**
       * Disallow async functions which have no `await` expression.
       */
      'require-await': 'error',
      /**
       * Require generator functions to contain `yield`.
       */
      'require-yield': 'error',
      /**
       * Disallow strict mode directives.
       */
      strict: ['error', 'never'],
      /**
       * Require symbol descriptions.
       */
      'symbol-description': 'error',
      /**
       * Require calls to `isNaN()` when checking for `NaN`.
       */
      'use-isnan': [
        'error',
        {
          enforceForIndexOf: true,
          enforceForSwitchCase: true,
        },
      ],
      /**
       * Enforce comparing `typeof` expressions against valid strings.
       */
      'valid-typeof': [
        'error',
        {
          requireStringLiterals: true,
        },
      ],
      /**
       * Disallow "Yoda" conditions.
       */
      yoda: ['error', 'never'],
      ...eslintCommentsPlugin.configs.recommended.rules,
      ...importXPlugin.configs.recommended.rules,
      'import-x/no-unresolved': 0,
      /**
       * Check that `@access` tags use one of the following values: `"package"`,
       * `"private"`, `"protected"`, `"public"`.
       */
      'jsdoc/check-access': 'error',
      /**
       * Report invalid alignment of JSDoc block asterisks.
       */
      'jsdoc/check-alignment': 'error',
      /**
       * Report invalid padding inside JSDoc blocks.
       */
      'jsdoc/check-indentation': 'error',
      /**
       * Report invalid alignment of JSDoc block lines.
       */
      'jsdoc/check-line-alignment': 'error',
      /**
       * Ensure that parameter names in JSDoc are matched by corresponding items
       * in the function declaration.
       */
      'jsdoc/check-param-names': 'error',
      /**
       * Ensure that property names in JSDoc are not duplicated on the same
       * block and that nested properties have defined roots.
       */
      'jsdoc/check-property-names': 'error',
      /**
       * Report if syntax not encouraged for the mode of JSDoc.
       */
      'jsdoc/check-syntax': 'error',
      /**
       * Report if block tag names are invalid.
       */
      'jsdoc/check-tag-names': 'error',
      /**
       * Check that any `@template` names are actually used in the connected
       * `@typedef`, `@callback`, `@function` or type structure.
       */
      'jsdoc/check-template-names': 'error',
      /**
       * Report if types are invalid.
       */
      'jsdoc/check-types': 'error',
      /**
       * Check for expected content within some miscellaneous tags (`@version`,
       * `@since`, `@license`, `@author`)
       */
      'jsdoc/check-values': 'error',
      /**
       * Check tags that are expected to be empty (e.g., `@abstract` or
       * `@async`), reporting if they have content
       */
      'jsdoc/empty-tags': 'error',
      /**
       * Report an issue with any non-constructor function using `@implements`.
       */
      'jsdoc/implements-on-classes': 'error',
      /**
       * Report an issue if JSDoc `import()` statements point to a package which
       * is not listed in `dependencies` or `devDependencies`.
       */
      'jsdoc/imports-as-dependencies': 'error',
      /**
       * Report on JSDoc texts that serve only to restate their attached name.
       */
      'jsdoc/informative-docs': 'error',
      /**
       * Control how and whether jsdoc blocks can be expressed as single or
       * multiple line blocks.
       */
      'jsdoc/multiline-blocks': 'error',
      /**
       * Check for multi-line-style comments which fail to meet the criteria of
       * a JSDoc block.
       */
      'jsdoc/no-bad-blocks': 'error',
      /**
       * Prevent empty lines in the block description.
       */
      'jsdoc/no-blank-block-descriptions': 'error',
      /**
       * Report blocks with whitespace only.
       */
      'jsdoc/no-blank-blocks': 'error',
      /**
       * Report defaults being used on the relevant portion of `@param` or
       * `@default`.
       */
      'jsdoc/no-defaults': 'error',
      /**
       * Prevent usage of multiple asterisks at the beginning of lines.
       */
      'jsdoc/no-multi-asterisks': 'error',
      /**
       * Check that types in jsdoc comments are defined.
       */
      'jsdoc/no-undefined-types': 'error',
      /**
       * Requires that each JSDoc line starts with an `*`.
       */
      'jsdoc/require-asterisk-prefix': 'error',
      /**
       * Require that all functions (or optionally other structures) with a
       * JSDoc block have a description.
       */
      'jsdoc/require-description': 'error',
      /**
       * Require a hyphen before the `@param` description.
       */
      'jsdoc/require-hyphen-before-param-description': 'error',
      /**
       * Require that all function parameters are documented.
       */
      'jsdoc/require-param': 'error',
      /**
       * Require that each `@param` tag has a description value.
       */
      'jsdoc/require-param-description': 'error',
      /**
       * Require that all @param tags have names.
       */
      'jsdoc/require-param-name': 'error',
      /**
       * Require that each `@param` tag has a type value (within curly
       * brackets).
       */
      'jsdoc/require-param-type': 'error',
      /**
       * Requires that all `@typedef` and `@namespace` tags have `@property`
       * tags when their type is a plain `object`, `Object`, or `PlainObject`.
       */
      'jsdoc/require-property': 'error',
      /**
       * Require that each `@property` tag has a description value.
       */
      'jsdoc/require-property-description': 'error',
      /**
       * Require that all @property tags have names.
       */
      'jsdoc/require-property-name': 'error',
      /**
       * Require that each `@property` tag has a type value (within curly
       * brackets).
       */
      'jsdoc/require-property-type': 'error',
      /**
       * Require that return statements are documented.
       */
      'jsdoc/require-returns': 'error',
      /**
       * Require a return statement (or non-`undefined` Promise resolve value)
       * be present in a function body if a `@returns` tag.
       */
      'jsdoc/require-returns-check': 'error',
      /**
       * Require that the `@returns` tag has a description value.
       */
      'jsdoc/require-returns-description': 'error',
      /**
       * Require that `@returns` tag has a type value (in curly brackets).
       */
      'jsdoc/require-returns-type': 'error',
      /**
       * Ensure that if a `@yields` is present that a `yield`.
       */
      'jsdoc/require-yields-check': 'error',
      /**
       * Sort tags by a specified sequence according to tag name, optionally
       * adding line breaks between tag groups.
       */
      'jsdoc/sort-tags': 'error',
      /**
       * Enforce lines between tags.
       */
      'jsdoc/tag-lines': 'error',
      /**
       * Requires all types/namepaths to be valid JSDoc, Closure compiler, or
       * TypeScript types.
       */
      'jsdoc/valid-types': 'error',

      'prefer-arrow/prefer-arrow-functions': [
        2,
        {
          classPropertiesAllowed: false,
          disallowPrototype: true,
          singleReturnOnly: false,
        },
      ],
      ...promisePlugin.configs.recommended.rules,
      ...regexpPlugin.configs.recommended.rules,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      ...(sonarjsPlugin.configs.recommended.rules as Linter.RulesRecord),
      ...unicornPlugin.configs.recommended.rules,
    },

    settings: {
      jsdoc: {
        mode: 'jsdoc',
      },
    },
  }
}
