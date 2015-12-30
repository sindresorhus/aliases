# aliases [![Build Status](https://travis-ci.org/sindresorhus/aliases.svg?branch=master)](https://travis-ci.org/sindresorhus/aliases)

> Parse flag aliases in CLI help output


## Install

```
$ npm install --save aliases
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

The result can be passed directly to the [meow](https://github.com/sindresorhus/meow) or [minimist](https://github.com/substack/minimist) `alias` option.


## API

### aliases(input, [extras])

#### input

Type: `string`

CLI help output.

#### extras

Type: `object`

Extra aliases to mix into the result.


## Related

- [parse-help](https://github.com/sindresorhus/parse-help) - Parse CLI help output


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
