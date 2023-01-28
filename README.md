They are the most commonly used and needed lightweight utility tools in JavaScript-based projects.
You can use the environment and library independently.
It works in harmony with server-based and browser-based applications.

## Installation
For using the yarn package manager.
```
yarn add begonya
```
For using the npm.

```
npm install begonya --save
```

## Modules

### APIs

- mime-type

### Functions

- classnames
- uid

### Utilities

- crypto
  - encode(value: string): string
  - decode(value: string): string
- number
  - zpad(num: number): string
- session
  - key(index: number): string | undefined
  - length(): number
  - get<T = string>(key: string): T | undefined
  - set(key: string, value: SessionValue): void
  - remove(key: string): void
  - clear(): void
- storage
  - key(index: number): string | undefined
  - length(): number
  - get<T = string>(key: string): T | undefined
  - set(key: string, value: SessionValue): void
  - remove(key: string): void
  - clear(): void
- string
  - camelcase(str: string): string
  - capitalize(str: string): string
  - escape(str: string): string
  - kebabcase(str: string): string
  - lowercase(str: string): string
  - pascalcase(str: string): string
  - slugify(str: string): string
  - snakecase(str: string, uppercase?: boolean): string
  - truncate(str: string, limit = 140): string
  - uppercase(str: string): string

## Import

To use modules, you must include packages.

```js
// To include api use as below
import MimeType 'begonya/mime-type'

// To include function use as below
import { classnames } 'begonya/functions'

// To include utility use as below
import { crpyto } 'begonya/utils'
```

## License 

Released under the [MIT License](http://www.opensource.org/licenses/mit-license.php).