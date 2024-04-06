import config from '@lzear/eslint-config-typescript'

export default [...config, { ignores: ['rules/**/bad.ts', 'rules/**/good.ts'] }]
