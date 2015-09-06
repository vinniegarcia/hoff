'use strict';

import test from 'tape';
import compose from '../lib/compose';
import {add, dub, sq} from './util/simpleFunctions';

test('Compose test', (t) => {
	t.plan(3);
	const dubSquad = compose(sq, dub, add),
		answer = dubSquad(2, 6),
		addDubSq = compose(dub, sq, add),
		answer2 = addDubSq(2, 6);
	t.is(typeof dubSquad, 'function', 'Functions compose properly');
	t.is(answer, 4, 'Answer is correct');
	t.is(Number(answer2.toFixed(2)), 5.66, 'answer2 is correct');
});