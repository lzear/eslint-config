import config from '@lzear/eslint-config-typescript'

export default [
  ...config,
  {
    rules: {
      'perfectionist/sort-objects': 'off',
    },
  },
]
