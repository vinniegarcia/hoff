// function sequencing
// compose(f, g)(x) = f(g(x))
'use strict';
import wrap from './wrap';
import unwrap from './unwrap';
import identity from './identity';
import accumulate from './accumulate';

const sequence = (...funcs) => (...args) => unwrap(accumulate(wrap, args)(...funcs));

export default sequence;
