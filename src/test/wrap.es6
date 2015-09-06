'use strict';

import test from 'tape';
import wrap from '../lib/wrap';
import unwrap from '../lib/unwrap';
import partial from '../lib/partial';
import {add} from './util/simpleFunctions';

test('Wrap test', (t) => {
  t.plan(3);

  const a = '3',
    b = '4',
    addStrings = add(a,b),
    numify = (n) => wrap(n, Number),
    addNums = add(unwrap(numify(a)), unwrap(numify(b)));

  t.is(addStrings, '34', 'strings were added');
  t.same(numify(a), [3], 'wrap converted to Array<Number>');
  t.is(addNums, 7, 'conversion was successful');

});
