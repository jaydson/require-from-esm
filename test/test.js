import assert from 'assert';
import require from '..';
const mymodule = require('./test/mymodule.cjs');

assert.equal(typeof mymodule, 'object');
assert.equal(mymodule.test, true);