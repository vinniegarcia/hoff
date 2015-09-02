'use strict';
// function currying -
// Will keep returning functions until all arguments
// are given, then will return the value
// of the executed function.
const curry = (f, ...args) => (args.length < f.length) ? (...more) => curry(f, ...args, ...more) : f(...args);

export default curry;