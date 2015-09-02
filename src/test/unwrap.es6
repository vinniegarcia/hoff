'use strict';

import test from 'tape';
import unwrap from '../lib/unwrap';

test('Unwrap test', (t) => {
	t.plan(2);
	var input = [6],
		multi = ['a', 'b'];
	t.is(unwrap(input), 6, 'Unwraps a 1-element array properly');
	t.is(unwrap(multi), 'a', 'Unwraps only the first element in a multi-element array');
});