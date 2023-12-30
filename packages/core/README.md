They are the most frequently used and needed lightweight utility tools in javascript-based projects.

You can use the media and library independently.

## Installation

For using the yarn package manager.

```shell
yarn add @ponsetya/core
```

For using the npm.

```shell
npm install @ponsetya/core
```

## Import

By default you can include all api and functions.

```ts
import ponsetya from '@ponsetya/core'
```

### Use APIs

```ts
import { Array } '@ponsetya/core'

const arr = ['x', 'y', 'z']

Array.remove(arr, 1) // ['x', 'z']
```

### Use helpers

```ts
import { classnames } '@ponsetya/core'

const className = classnames('foo', 'bar', {
  'foo-bar': false,
  'foo-bar--status': 'error',
})

console.log(className) // 'foo bar foo-bar--status-error'
```

## License 

Released under the [MIT License](http://www.opensource.org/licenses/mit-license.php).
