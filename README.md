They are the most commonly used and needed lightweight utility tools in JavaScript-based projects.
You can use the environment and library independently.
It works in harmony with server-based and browser-based applications.

## Installation

For using the yarn package manager.

```shell
yarn add begonya
```

For using the npm.

```shell
npm install begonya --save
```

## Import

To use modules, you must include packages.

### Use default modules

- array
- boolean
- function
- number
- object
- string

```ts
import { array } 'begonya'

const arr = [0, 1, 2]

array.remove(arr, 1)

// [0, 2]
```

### Use utils modules

- classnames
- getname
- gettype
- uid

```ts
import { classnames } 'begonya/utils'

classnames('foo', 'bar', {
  'foo-bar': true,
})

// 'foo bar foo-bar'
```

### Use browser modules

- cookie
- session
- storage

```ts
import { cookie } 'begonya/browser'

cookie.set('name', 'John Doe')
cookie.get('name')

// John Doe
```

## License 

Released under the [MIT License](http://www.opensource.org/licenses/mit-license.php).