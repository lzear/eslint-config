import type { Linter } from 'eslint'
import eslintConfig, { defaultOptions } from '.'

export default eslintConfig(defaultOptions) satisfies Promise<Linter.Config[]>
