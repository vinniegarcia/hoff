'use strict';

import test from 'tape';
import identity from '../lib/identity';

test('Identity test', (t) => {
	t.plan(2);
	const idOfFive = identity(5),
		probably5 = idOfFive();
	t.is(typeof idOfFive, 'function', 'Wraps in function');
	t.is(probably5, 5, 'Executes/unwraps to value');
});