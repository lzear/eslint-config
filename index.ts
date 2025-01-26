import type { Linter } from 'eslint'

import { perfectionist } from './configs/perfectionist'
import { packageJson } from './configs/package-json'
import { typescript } from './configs/typescript'
import { vitest } from './configs/vitest'
import { react } from './configs/react'
import { a11y } from './configs/a11y'
import { core } from './configs/core'
import { node } from './configs/node'

const CONFIG_OPTIONS = [
  'perfectionist',
  'typescript',
  'vitest',
  'react',
  'node',
] as const

export type ConfigOptions = Required<ConfigOptionFlags>

type RawConfigOptions = {
  extends?: Linter.Config[] | Linter.Config
} & Partial<ConfigOptionFlags>

type ConfigOptionFlags = Record<ConfigOptionKeys, boolean>

type ConfigOptionKeys = (typeof CONFIG_OPTIONS)[number]

let configGenerator = async ({
  extends: customExtends = {} as Linter.Config,
  ...rawConfig
}: RawConfigOptions = {}): Promise<Linter.Config[]> => {
  let config: Required<ConfigOptionFlags> = {} as Required<ConfigOptionFlags>
  for (let configName of CONFIG_OPTIONS) {
    config[configName] = rawConfig[configName] ?? false
  }

  let configFunctions = [
    core,
    a11y,
    react,
    node,
    typescript,
    vitest,
    packageJson,
    perfectionist,
  ]

  let configs = await Promise.all(
    configFunctions.map(createConfigFunction => createConfigFunction(config)),
  )

  return [
    {
      ignores: [
        '**/.eslint-config-inspector/**',
        '**/vite.config.*.timestamp-*',
        '**/.vitepress/cache/**',
        '**/node_modules/**',
        '**/coverage/**',
        '**/.history/**',
        '**/.netlify/**',
        '**/.vercel/**',
        '**/.output/**',
        '**/output/**',
        '**/.cache/**',
        '**/.temp/**',
        '**/build/**',
        '**/.nuxt/**',
        '**/.next/**',
        '**/dist/**',
        '**/temp/**',
        '**/.tmp/**',
        '**/tmp/**',
      ],
      name: 'lzear/core/ignores',
    },
    ...configs,
    ...(Array.isArray(customExtends)
      ? customExtends
      : [
          {
            name: 'lzear/custom-extends',
            ...customExtends,
          },
        ]),
  ]
}

export default configGenerator

export let defaultOptions = {
  perfectionist: true,
  typescript: true,
  vitest: true,
  react: true,
  node: true,
}
