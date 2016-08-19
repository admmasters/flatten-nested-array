# flatten-nested-array
A simple JS utility for flattening arrays includes Typescript Typings.

**Why?**
We made this because are no dependencies and it we wanted to start building a simple set of typescript typed utility functions.

```js
const flattenArray = require('flatten-nested-array');

const iAmNested = ['a', 'b', 'c', [ 'd' [ 'e' ['f']] ]];
const result = flattenArray(iAmNested);

console.log(result); // ['a', 'b', 'c', 'd', 'e', 'f'];
```

If you find any bugs - do not hesitate to email me:
mattrevell82@me.com