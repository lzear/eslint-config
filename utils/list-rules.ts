import fs from 'node:fs'
import path from 'node:path'

import configBase from '@lzear/eslint-config'
import configReact from '@lzear/eslint-config-react'
import configTs from '@lzear/eslint-config-typescript'
import { ESLint, Linter } from 'eslint'
import _ from 'lodash'

export const listRules = async (overrideConfig: Linter.Config) => {
  const eslint = new ESLint({ overrideConfig: overrideConfig })
  const filePath = './a/somefile.js'
  const config = await eslint.calculateConfigForFile(filePath)
  const warnings: string[] = []
  const errors: string[] = []
  for (const [rule, config1] of Object.entries(config.rules)) {
    if (Array.isArray(config1)) {
      switch (config1[0]) {
        case 0: {
          break
        }
        case 1: {
          warnings.push(rule)
          break
        }
        case 2: {
          errors.push(rule)
          break
        }
        default: {
          throw new Error(`Unexpected rule configuration (${rule})`)
        }
      }
    } else {
      throw new TypeError(`Rule configuration must be an object (${rule})`)
    }
  }
  return { warnings, errors }
}

export const rulesDir = path.resolve(import.meta.dirname, '../rules')

export const allRules = async () => {
  const rulesObjs = await Promise.all(
    [configBase, configTs, configReact].map((config) =>
      listRules(config as Linter.Config),
    ),
  )
  const rules = []
  for (const { warnings, errors } of rulesObjs)
    rules.push(...warnings, ...errors)
  return _.uniq(rules).sort()
}

export const testedRules = async () => {
  const getFolders = async (
    rootPath: string,
    folders: string[] = [],
  ): Promise<string[]> => {
    const files = await fs.promises.readdir(
      path.resolve(rootPath, ...folders),
      { withFileTypes: true },
    )
    const dirs = files.filter((file) => file.isDirectory())
    if (dirs.length === 0) return [path.join(...folders)]
    const r = await Promise.all(
      dirs.map((dir) => getFolders(rootPath, [...folders, dir.name])),
    )
    return r.flat()
  }
  return getFolders(rulesDir)
}

export const undocumentedRules = async () => {
  const documented = await testedRules()
  const all = await allRules()
  return _.difference(all, documented).sort()
}
