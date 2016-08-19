const flattenArray = require('../src');

const iAmNested = ['a', 'b', 'c', [ 'd', [ 'e', ['f']] ]];
const result = flattenArray(iAmNested);

console.log(result);