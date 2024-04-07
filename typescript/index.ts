import baseConfig from '@lzear/eslint-config'
import tseslint from 'typescript-eslint'

const config = tseslint.config(
  // @ts-expect-error ...
  ...baseConfig,
  ...tseslint.configs.recommended,
)

export default config
