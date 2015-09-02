'use strict';

import not from './not';

const partition = (predicate, arr) => [arr.filter(predicate), arr.filter(not(predicate))];

export default partition;