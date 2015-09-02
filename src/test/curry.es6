'use strict';

import test from 'tape';
import curry from '../lib/curry';

test('Curry test', (t) => {
	t.plan(4);
	const longAddition = (a, b, c, d, e, f, g, h, i, j) => a + b + c + d + e + f + g + h + i + j;
	const first3Curried = curry(longAddition, 1, 2, 3);
	t.is(typeof first3Curried, 'function', 'Curries the first 3 values');
	const moreCurried = first3Curried(4, 5);
	t.is(typeof moreCurried, 'function', 'Curries more values');
	const allDone = moreCurried(6, 7, 8, 9, 10);
	t.is(allDone, 55, 'Returns when all arguments are set');
	const aboveAndBeyond = moreCurried(6, 7, 8, 9, 10, 11, 12);
	t.is(aboveAndBeyond, 55, 'Goes above and beyond (but the extra args don\'t matter)');
});