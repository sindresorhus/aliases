import test from 'ava';
import m from '.';

const fixture = `
	Usage
	  $ unicorn <name>

	Options
	  -r, --rainbow  Lorem ipsum dolor sit amet
	  -m, --magic    Aenean commodo ligula eget dolor
`;

test(t => {
	t.deepEqual(m(fixture, {h: 'help'}), {
		r: 'rainbow',
		m: 'magic',
		h: 'help'
	});
});
