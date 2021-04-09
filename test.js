import test from 'ava';
import aliases from './index.js';

const fixture = `
	Usage
	  $ unicorn <name>

	Options
	  -r, --rainbow  Lorem ipsum dolor sit amet
	  -m, --magic    Aenean commodo ligula eget dolor
`;

test('main', t => {
	t.deepEqual(aliases(fixture, {h: 'help'}), {
		r: 'rainbow',
		m: 'magic',
		h: 'help'
	});
});
