const title = require('./title');
const commonModule = { name: 'zhufeng' };
const getter = require.name(commonModule);
console.log(getter.a);

const esModule = { __esModule: true, default: { name: 'zhufeng' } };
const getter2 = require.n(esModule);
console.log(getter2.a);