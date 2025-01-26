// Returns T['default'] if module has default export or T it doesn't contain default export
type ReturnDefault<T> = 'default' extends keyof T ? T['default'] : T

export let interopDefault = async <T>(
  module: Promise<T> | T,
): Promise<ReturnDefault<T>> => {
  try {
    let resolved = await module

    if (typeof resolved === 'object' && resolved !== null) {
      if ('default' in resolved && Object.keys(resolved).length === 1) {
        let defaultExport = (resolved as { default: unknown }).default as T

        if (!defaultExport) {
          // @ts-ignore
          return defaultExport
        }
        // @ts-ignore
        return defaultExport
      }
      // @ts-ignore
      return resolved
    }
    // @ts-ignore
    return resolved
  } catch (error) {
    throw new Error(`Cannot import module: ${String(error)}`)
  }
}
