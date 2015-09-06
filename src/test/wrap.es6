'use strict';

import test from 'tape';
import wrap from '../lib/wrap';
import partial from '../lib/partial';
import {add} from './util/simpleFunctions';

test('Wrap test', (t) => {
  t.plan(3);

  const a = '3',
    b = '4',
    addStrings = add(a,b),
    numify = partial(wrap, Number),
    addNums = add(numify(a), numify(b));

  t.is(addStrings, '34', 'strings were added');
  t.is(numify(a), 3, 'wrap converted to Number');
  t.is(addNums, 7, 'conversion was successful');

});
