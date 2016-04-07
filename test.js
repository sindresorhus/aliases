import test from 'ava';
import fn from './';

const fixture = `
	Usage
	  $ unicorn <name>

	Options
	  -r, --rainbow  Lorem ipsum dolor sit amet
	  -m, --magic    Aenean commodo ligula eget dolor
`;

test(t => {
	t.deepEqual(fn(fixture, {h: 'help'}), {
		r: 'rainbow',
		m: 'magic',
		h: 'help'
	});
});
