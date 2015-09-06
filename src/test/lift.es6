'use strict';

import test from 'tape';
import lift from '../lib/lift';
import {add} from './util/simpleFunctions';

test('Lift test', (t) => {
	t.plan(2);
	const a = '3', 
		b = '4', 
		ensureNumericAdd = lift(add, Number),
		result = ensureNumericAdd(a, b);
	t.is(add(a, b), '34', 'Converted inappropriately at first');
	t.is(result, 7, 'Converts appropriately after lift');
});