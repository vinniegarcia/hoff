// function composition
// compose(f, g)(x) = g(f(x))
'use strict';
import wrap from './wrap';
import unwrap from './unwrap';
import identity from './identity';
import {reverse} from './accumulate';

const compose = (...funcs) => (...args) => unwrap(reverse(wrap, args)(...funcs));

export default compose;
