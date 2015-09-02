// function sequencing
// compose(f, g)(x) = f(g(x))
'use strict';
import unwrap from './unwrap';

const sequence = (...funcs) => (...args) => unwrap(funcs.reduce((current, next) => [next(...current)], args));

export default sequence;