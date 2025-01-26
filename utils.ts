// Returns T['default'] if module has default export or T it doesn't contain default export
type ReturnDefault<T> = 'default' extends keyof T ? T['default'] : T

export const interopDefault = async <T>(
  module: Promise<T> | T,
): Promise<ReturnDefault<T>> => {
  try {
    const resolved = await module

    if (typeof resolved === 'object' && resolved) {
      if ('default' in resolved && Object.keys(resolved).length === 1) {
        const defaultExport = (resolved as { default: unknown }).default as T

        if (!defaultExport) {
          // @ts-expect-error - couldn't get the types right
          return defaultExport
        }
        // @ts-expect-error - couldn't get the types right
        return defaultExport
      }
      // @ts-expect-error - couldn't get the types right
      return resolved
    }
    // @ts-expect-error - couldn't get the types right
    return resolved
  } catch (error) {
    throw new Error(`Cannot import module: ${String(error)}`)
  }
}
