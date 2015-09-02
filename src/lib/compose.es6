// function composition
// compose(f, g)(x) = g(f(x))
'use strict';
import unwrap from './unwrap';

const compose = (...funcs) => (...args) => unwrap(funcs.reduceRight((current, next) => [next(...current)], args));

export default compose;