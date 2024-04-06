// list all folders and rules in the rules folder

import fs from 'node:fs'
import path from 'node:path'

import configTs from '@lzear/eslint-config-typescript'
import { ESLint } from 'eslint'
import { describe, expect, it } from 'vitest'

import { rulesDir, testedRules, undocumentedRules } from '../list-rules'

const lintFile = async (rule: string, file: string) => {
  const rulePath = path.resolve(rulesDir, rule)
  const filePath = path.resolve(rulePath, file)
  const fileContent = await fs.promises.readFile(filePath, 'utf8')
  // @ts-expect-error ???
  const eslint = new ESLint({ overrideConfig: configTs })
  return eslint.lintText(fileContent, { filePath: 'base/index.ts' })
}

const lintMessages = async (rule: string, file: string) => {
  const lintResults = await lintFile(rule, file)
  return lintResults[0].messages.filter((m) => m.ruleId === rule)
}

describe('rules', async () => {
  const documented = await testedRules()

  for (const rule of documented) {
    describe(rule, async () => {
      it('has good.ts and bad.ts', async () => {
        const rulePath = path.resolve(rulesDir, rule)
        const files = await fs.promises.readdir(rulePath)
        expect(files).toStrictEqual(['bad.ts', 'good.ts'])
      })

      it('errors with bad.ts', async () => {
        const thisLintMessages = await lintMessages(rule, 'bad.ts')
        expect(thisLintMessages).not.toHaveLength(0)
      })

      it('passes with good.ts', async () => {
        const thisLintMessages = await lintMessages(rule, 'good.ts')
        expect(thisLintMessages).toHaveLength(0)
      })
    })
  }

  it('has undocumented rules', async () => {
    expect(await undocumentedRules()).toMatchSnapshot()
  })
})
