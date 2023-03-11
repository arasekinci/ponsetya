They are the most frequently used and needed lightweight utility tools in vanilla-based projects.

You can use the media and library independently.

## Installation

For using the yarn package manager.

```shell
yarn add @ponsetya/vanilla
```

For using the npm.

```shell
npm install @ponsetya/vanilla
```

## Import

By default you can include all api and functions.

```ts
import vanilla from '@ponsetya/vanilla'
```

### Use APIs

```ts
import { Array } '@ponsetya/vanilla'

const arr = ['x', 'y', 'z']

Array.remove(arr, 1) // ['x', 'z']
```

### Use helpers

```ts
import { classnames } '@ponsetya/vanilla'

const className = classnames('foo', 'bar', {
  'foo-bar': false,
  'foo-bar--status': 'error',
})

console.log(className) // 'foo bar foo-bar--status-error'
```

## License 

Released under the [MIT License](http://www.opensource.org/licenses/mit-license.php).
