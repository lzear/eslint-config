import { Linter } from 'eslint'
import { describe, expect, it } from 'vitest'

import { listRules } from '../utils/list-rules'
import baseConfig from './index'

describe('base config', () => {
  it('matches warning rules snapshot', async () => {
    const config = await listRules(baseConfig as Linter.Config)
    expect(config.warnings.sort()).toMatchSnapshot()
  })

  it('matches error rules snapshot', async () => {
    const config = await listRules(baseConfig as Linter.Config)
    expect(config.errors.sort()).toMatchSnapshot()
  })
})
