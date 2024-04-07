import fs from 'node:fs'
import path from 'node:path'

import { builtinRules } from 'eslint/use-at-your-own-risk'

import { rulesDir } from './list-rules'

const ruleMetaDic = {
  unicorn: async (rule: string) => {
    const r = await import(`eslint-plugin-unicorn/rules/${rule}`)
    return r.default.meta
  },
  js: async (rule: string) => {
    const r = builtinRules.get(rule)
    if (!r) throw new Error(`Unknown rule: ${rule}`)
    return r.meta
  },
}

const getRuleMeta = async (rule: string) => {
  const [name, domain] = rule.split('/').reverse()
  if (!name) throw new Error(`Invalid rule: ${rule}`)
  // @ts-expect-error object might miss key
  const getMeta = ruleMetaDic[domain || 'js']
  if (!getMeta) throw new Error(`Unknown domain: ${domain}`)
  return getMeta(name)
}

export const documentRule = async (rule: string) => {
  const ruleDir = path.resolve(rulesDir, rule)

  const [good, bad] = await Promise.all([
    fs.promises.readFile(path.resolve(ruleDir, 'good.ts'), 'utf8'),
    fs.promises.readFile(path.resolve(ruleDir, 'bad.ts'), 'utf8'),
  ])

  return { good, bad, meta: await getRuleMeta(rule) }
}
