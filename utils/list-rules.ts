import { ESLint, Linter } from 'eslint'

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
