'use strict';

import test from 'tape';
import accumulate from '../lib/accumulate';
import {add, mult} from './util/simpleFunctions';

test('Accumulate test', (t) => {
	t.plan(3);
	const numbers = [1, 2, 3, 4, 5],
		sum = accumulate(add, 0),
		multiply = accumulate(mult, 1),
		result = sum(...numbers),
		remult = multiply(...numbers);
	t.is(typeof sum, 'function', 'Converts to function');
	t.is(result, 15, 'Accumulates add() correctly');
	t.is(remult, 120, 'Accumulates mult() correctly');
});