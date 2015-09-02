'use strict';

import test from 'tape';
import * as hoff from '../index';

test('Hoff test', (t) => {
	const funcs = Object.keys(hoff);
	t.plan(funcs.length);
	funcs.forEach((func) => {
		t.is(typeof hoff[func], 'function', `${func} is a function`);
	});
});