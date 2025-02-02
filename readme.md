# ESLint Config

[![Version](https://img.shields.io/npm/v/@lzear/eslint-config.svg?color=4a32c3&labelColor=26272b)](https://npmjs.com/package/@lzear/eslint-configt)
[![GitHub License](https://img.shields.io/badge/license-MIT-232428.svg?color=4a32c3&labelColor=26272b)](https://github.com/azat-io/eslint-config/blob/main/license.md)

My preferred ESLint configuration. Forked from [azat-io/eslint-config](https://github.com/azat-io/eslint-config), with some modifications including:

- Use recommended presets from the plugins instead of managing the rules manually.
- Changing rules to my personal preferences.

## Usage

1. Install package:

   ```sh
   yarn add --D eslint @lzear/eslint-config
   ```

2. Create ESLint configuration file `eslint.config.js`:

   ```js
   import eslintConfig from '@lzear/eslint-config'

   export default eslintConfig({
     perfectionist: true,
     typescript: true,
     react: true,
     node: true,
   })
   ```

3. Add script for `package.json`:

   ```json
   {
     "scripts": {
       "test:js": "eslint \"**/*.{js,ts,jsx,tsx,json}\""
     }
   }
   ```

## License

MIT &copy; [Azat S.](https://azat.io)
