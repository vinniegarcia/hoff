'use strict';

import test from 'tape';
import partial from '../lib/partial';
import {exp, mult} from './util/simpleFunctions';

test('Partial application test', (t) => {
	t.plan(3);
	const threexp = partial(exp, 3),
		answer1 = threexp(3),
		quad = partial(mult, 4),
		answer2 = quad(3);
	t.is(typeof threexp, 'function', 'Returns a function');
	t.is(answer1, 27, 'Executing returned function gets correct answer');
	t.is(answer2, 12, 'Answer2 is calculated correctly');
});