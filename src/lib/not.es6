'use strict';

const not = (f) => (...args) => !f(...args);

export default not;