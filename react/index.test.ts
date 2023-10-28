import { expect, it } from 'vitest'

import config from './index'

it('toMatchSnapshot', () => {
  expect(config).toStrictEqual({})
})
