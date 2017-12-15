# aliases [![Build Status](https://travis-ci.org/sindresorhus/aliases.svg?branch=master)](https://travis-ci.org/sindresorhus/aliases)

> Parse flag aliases in CLI help output


## Install

```
$ npm install aliases
```


## Usage

```js
const aliases = require('aliases');

const help = `
	Usage
	  $ unicorn <name>

	Options
	  -r, --rainbow  Lorem ipsum dolor sit amet
	  -m, --magic    Aenean commodo ligula eget dolor
`;

aliases(help, {h: 'help'});
/*
{
	r: 'rainbow',
	m: 'magic',
	h: 'help'
}
*/
```

The result can be passed directly to the [minimist](https://github.com/substack/minimist) `alias` option or used in [meow](https://github.com/sindresorhus/meow) with some effort.


## API

### aliases(input, [extras])

#### input

Type: `string`

CLI help output.

#### extras

Type: `Object`

Extra aliases to mix into the result.


## Related

- [parse-help](https://github.com/sindresorhus/parse-help) - Parse CLI help output


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
