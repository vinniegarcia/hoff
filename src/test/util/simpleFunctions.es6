'use strict';

export const add = (a, b) => a + b;
export const dub = (a) => a * 2;
export const sq = Math.sqrt;
export const exp = Math.pow;
export const mult = (a, b) => a * b;
export const recurAdd = (...args) => args.slice(1).reduce(add, args[0]);
export const recurMult = (...args) => args.slice(1).reduce(mult, args[0]);