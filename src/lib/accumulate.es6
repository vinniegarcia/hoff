'use strict';

const accumulate = (fn, iv) => (...args) => args.reduce(fn, iv);

export default accumulate;