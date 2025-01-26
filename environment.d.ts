declare module '@eslint-community/eslint-plugin-eslint-comments' {
  import type { ESLint, Linter } from 'eslint'

  let plugin: ESLint.Plugin
  let configs: { recommended: { rules: Linter.RulesRecord } }
  export = { ...plugin, configs }
}

declare module '@next/eslint-plugin-next' {
  import type { ESLint, Linter } from 'eslint'

  let plugin: ESLint.Plugin
  let configs: {
    'core-web-vitals': { rules: Linter.RulesRecord }
    recommended: { rules: Linter.RulesRecord }
  }
  export = { ...plugin, configs }
}

declare module 'eslint-plugin-jsx-a11y' {
  import type { ESLint } from 'eslint'

  let plugin: ESLint.Plugin
  export = plugin
}

declare module 'eslint-plugin-prefer-arrow' {
  import type { ESLint } from 'eslint'

  let plugin: ESLint.Plugin
  export = plugin
}

declare module 'eslint-plugin-promise' {
  import type { ESLint, Linter } from 'eslint'

  let plugin: ESLint.Plugin
  let configs: { recommended: { rules: Linter.RulesRecord } }
  export = { ...plugin, configs }
}

declare module 'eslint-plugin-react-compiler' {
  import type { ESLint } from 'eslint'

  let plugin: ESLint.Plugin
  export = plugin
}

declare module 'eslint-plugin-react-hooks' {
  import type { ESLint, Linter } from 'eslint'

  let plugin: ESLint.Plugin
  let configs: { recommended: { rules: Linter.RulesRecord } }
  export = { ...plugin, configs }
}

declare module 'eslint-plugin-react-perf' {
  import type { ESLint, Linter } from 'eslint'

  let plugin: ESLint.Plugin
  let configs: { recommended: { rules: Linter.RulesRecord } }
  export = { ...plugin, configs }
}
