'use strict';

import test from 'tape';
import partition from '../lib/partition';

test('Partition test', (t) => {
	t.plan(2);
	const areEven = (num) => num % 2 === 0,
		numbers = [1, 2, 3, 4, 5, 6],
		[even, odd] = partition(areEven, numbers);
	t.same(even, [2, 4, 6], 'Even numbers (true condition) collected');
	t.same(odd, [1, 3, 5], 'Odd numbers (false condition) collected');
});