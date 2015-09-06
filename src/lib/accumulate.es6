'use strict';

const accumulate = (reducer, iv) => (...args) => args.reduce(reducer, iv);
export const reverse = (reducer, iv) => (...args) => args.reduceRight(reducer, iv);

export default accumulate;