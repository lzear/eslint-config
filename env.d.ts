import type { Linter } from 'eslint'

interface Configs {
  configs: { recommended: { rules: Linter.RulesRecord } }
}

declare module 'eslint-plugin-import' {
  import type { Plugin } from 'eslint-define-config'

  let plugin: Plugin
  export default plugin
}

declare module 'eslint-plugin-n' {
  import type { Plugin } from 'eslint-define-config'

  let plugin: Plugin
  export default plugin
}

declare module 'eslint-plugin-node-import' {
  import type { Plugin } from 'eslint-define-config'

  let plugin: Plugin
  export default plugin
}

declare module 'eslint-plugin-prefer-arrow' {
  import type { Plugin } from 'eslint-define-config'

  let plugin: Plugin
  export default plugin
}

declare module 'eslint-plugin-prettier' {
  import type { Plugin } from 'eslint-define-config'

  const plugin: Plugin & Configs
  export default plugin
}

declare module 'eslint-plugin-promise' {
  import type { Plugin } from 'eslint-define-config'

  let plugin: Plugin
  export default plugin
}

declare module 'eslint-plugin-unicorn' {
  import type { Plugin } from 'eslint-define-config'

  let plugin: Plugin
  export default plugin
}

declare module '@typescript-eslint/parser' {
  import type { Parser } from 'eslint-define-config'

  let parser: Parser
  export default parser
}

declare module 'eslint-plugin-jsx-a11y' {
  import type { Plugin } from 'eslint-define-config'

  let plugin: Plugin
  export default plugin
}

declare module 'eslint-plugin-react' {
  import type { Plugin } from 'eslint-define-config'

  let plugin: Plugin
  export default plugin
}

declare module 'eslint-plugin-react-hooks' {
  import type { Plugin } from 'eslint-define-config'

  let plugin: Plugin
  export default plugin
}

declare module 'eslint-plugin-testing-library' {
  import type { Plugin } from 'eslint-define-config'

  let plugin: Plugin
  export default plugin
}

export { type FlatESLintConfig as default } from 'eslint-define-config'
