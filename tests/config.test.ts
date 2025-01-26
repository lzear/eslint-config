import config, { defaultOptions } from '..'

describe('@lzear/eslint-config', () => {
  it('matches the snapshot', async () => {
    let lzearConfig = await config(defaultOptions)
    lzearConfig = lzearConfig.map(item =>
      item.languageOptions?.parserOptions?.tsconfigRootDir
        ? {
            ...item,
            languageOptions: {
              ...item.languageOptions,
              parserOptions: {
                ...item.languageOptions.parserOptions,
                tsconfigRootDir: '/repo/eslint-config',
              },
            },
          }
        : item,
    )
    await expect(lzearConfig).toMatchFileSnapshot('./snapshots/config.txt')
  })
})
