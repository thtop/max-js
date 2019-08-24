# Variables - null, undefined and NaN
```javascript
var numbers = [1, 2, 3];
console.log(typeof numbers); // object
console.log(numbers[2]); // 3

console.log(numbers[4]); // undefined

// undefined
var var1 = undefined;
console.log(var1); // undefined
console.log(typeof var1); // undefined


// object
var var2 = null;
console.log(var2); // null
console.log(typeof var2); // object


// null and undefined
console.log(null == undefined); // true
console.log(null === undefined); // false


// NaN
var var3 = NaN;
console.log(var3); // NaN
console.log(typeof var3); // number
```