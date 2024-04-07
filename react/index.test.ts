import { Linter } from 'eslint'
import { describe, expect, it } from 'vitest'

import { listRules } from '../utils/list-rules'
import configReact from './index'

describe('react config', () => {
  it('matches warning rules snapshot', async () => {
    const config = await listRules(configReact as Linter.Config)
    expect(config.warnings.sort()).toMatchSnapshot()
  })

  it('matches error rules snapshot', async () => {
    const config = await listRules(configReact as Linter.Config)
    expect(config.errors.sort()).toMatchSnapshot()
  })
})
