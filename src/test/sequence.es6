import test from 'tape';
import sequence from '../lib/sequence';
import {add, dub, sq} from './util/simpleFunctions';

test('Sequence test', (t) => {
	t.plan(4);
	const dubSquad = sequence(add, dub, sq),
		answer = dubSquad(2, 6),
		addSqub = sequence(add, sq, dub),
		answer2 = addSqub(2, 7);
	t.is(typeof dubSquad, 'function', 'Functions wrap properly');
	t.is(answer, 4, 'Answer is correct');
	t.is(typeof addSqub, 'function', 'Function addSqub wraps');
	t.is(answer2, 6, 'Answer2 is correct');
});