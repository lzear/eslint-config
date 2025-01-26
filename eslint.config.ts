import type { Linter } from 'eslint'

import eslintConfig from '.'

export default eslintConfig({
  perfectionist: true,
  typescript: true,
  vitest: true,
  react: true,
  node: true,
}) satisfies Promise<Linter.Config[]>
