import { describe, expect, it } from 'vitest'

import { documentRule } from './document'
import { testedRules } from './list-rules'

describe(documentRule, () => {
  it('documents one rule', async () => {
    expect(await documentRule('unicorn/better-regex')).toStrictEqual({
      good: 'const a = /\\d/\nconst b = /\\D/\nconst c = /\\w/\nconst d = /\\w/i\nconst e = /\\W/\nconst f = /\\W/i\nconst g = /\\d\\.\\w-\\D/i\n',
      bad: 'const a = /[0-9]/\nconst b = /[^0-9]/\nconst c = /[a-zA-Z0-9_]/\nconst d = /[a-z0-9_]/i\nconst e = /[^a-zA-Z0-9_]/\nconst f = /[^a-z0-9_]/i\nconst g = /[0-9]\\.[a-zA-Z0-9_]\\-[^0-9]/i\n',
      meta: {
        type: 'suggestion',
        docs: {
          description:
            'Improve regexes by making them shorter, consistent, and safer.',
        },
        fixable: 'code',
        schema: [
          {
            type: 'object',
            additionalProperties: false,
            properties: {
              sortCharacterClasses: {
                type: 'boolean',
                default: true,
              },
            },
          },
        ],
        messages: {
          'better-regex': '{{original}} can be optimized to {{optimized}}.',
          'better-regex/parse-error': 'Problem parsing {{original}}: {{error}}',
        },
      },
    })
  })

  it('documents all rules', async () => {
    const documented = await testedRules()
    expect(
      await Promise.all(documented.map((r) => documentRule(r))),
    ).toMatchSnapshot()
  })
})
