'use strict';

const partial = (f, ...args) => (...more) => f(...args, ...more);

export default partial;