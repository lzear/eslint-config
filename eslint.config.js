// eslint-disable-next-line import/no-unresolved
import config from '@lzear/eslint-config-typescript'

export default [
  ...config,
  {
    rules: {
      'perfectionist/sort-objects': 'off',
    },
  },
]
