import parseHelp from 'parse-help';

export default function aliases(input, extras) {
	return Object.assign(parseHelp(input).aliases, extras);
}
