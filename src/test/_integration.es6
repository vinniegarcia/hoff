'use strict';

import test from 'tape';
import * as hoff from '../index';
import {add} from './util/simpleFunctions';

test('Integration test', (t) => {

	t.test('Lift and accumulate', (t) => {
		t.plan(3);
		const numbers = ['1', '2', '3', '4'],
			liftAcc = hoff.lift(hoff.accumulate(add, 0), Number),
			accLift = hoff.accumulate(hoff.lift(add, Number), 0),
			result1 = liftAcc(...numbers),
			result2 = accLift(...numbers);
		t.is(typeof liftAcc, 'function', 'Lift and accumulate composed together');
		t.is(result1, 10, 'Computed correctly with proper types.');
		t.is(result1, result2, 'Composition order does not matter');
	});
	
});