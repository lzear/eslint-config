import type { Linter } from 'eslint'
import { a11y } from './configs/a11y'
import { core } from './configs/core'
import { node } from './configs/node'
import { packageJson } from './configs/package-json'
import { perfectionist } from './configs/perfectionist'
import { react } from './configs/react'
import { typescript } from './configs/typescript'
import { vitest } from './configs/vitest'

const CONFIG_OPTIONS = [
  'perfectionist',
  'typescript',
  'vitest',
  'react',
  'node',
] as const

type ConfigOptionKeys = (typeof CONFIG_OPTIONS)[number]

type ConfigOptionFlags = Record<ConfigOptionKeys, boolean>

export type ConfigOptions = Required<ConfigOptionFlags>

type RawConfigOptions = {
  extends?: Linter.Config[] | Linter.Config
} & Partial<ConfigOptionFlags>

const configGenerator = async ({
  extends: customExtends = {} as Linter.Config,
  ...rawConfig
}: RawConfigOptions = {}): Promise<Linter.Config[]> => {
  const config: Required<ConfigOptionFlags> = {} as Required<ConfigOptionFlags>
  for (const configName of CONFIG_OPTIONS) {
    config[configName] = rawConfig[configName] ?? false
  }

  const configFunctions = [
    core,
    a11y,
    react,
    node,
    typescript,
    vitest,
    packageJson,
    perfectionist,
  ]

  const configs = await Promise.all(
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
    ...configs.flat(),
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

export const defaultOptions = {
  perfectionist: true,
  typescript: true,
  vitest: true,
  react: true,
  node: true,
}
