# Run Main

Run js main function.

## Features

- Run sync/async function
- Exit after execution
- Log uncaught error
- Prepare intuitive command args

## Install

```bash
npm install @zhaoyao91/run-main
```

## Usage

```js
const runMain = require("@zhaoyao91/run-main");

async function main(...args) {
  // ...
}

runMain(main);
```

## API

### runMain(mainFn, options?)

- `mainFn`: async function(...args)
- `options.logError?`: function(error), default to `console.error`
- `options.forceExit?`: boolean, default to `false`

## License

MIT
