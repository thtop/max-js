# The Difference between Concat and Join
```javascript
var array = [1, 2, 3, 4];

// ** concat: combine 2 array (return new array)
var newArray1 = ['join', 'me'];
console.log(array.concat(newArray1)); // [1, 2, 3, 4, "join", "me"]
console.log(array); // [1, 2, 3, 4]
console.log(newArray1); // ["join", "me"]

// ** join: join array to string (return new array)
var newArray2 = ['join', 'me'];
console.log(array.join(newArray2)); // 1join,me2join,me3join,me4
console.log(array); //  [1, 2, 3, 4]
console.log(newArray2); //  ["join", "me"

console.log(array.join(', ')); // 1, 2, 3, 4
console.log(array.join('')); // 1234
```