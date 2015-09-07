'use strict';

import identity from './identity';

const lift = (fn, lifter = identity) => (...args) => fn(...args.map(lifter));

export default lift;
