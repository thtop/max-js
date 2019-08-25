# Working with Parts of an Array: IndexOf, Splice and Slice
```javascript
// ** indexOf: return an index of the element
var array1 = ["new", 1, 2, 3, 4];
console.log(array1.indexOf('new')); // 0

array1[array1.indexOf('new')] = 'old';
console.log(array1); // ["old", 1, 2, 3, 4]


// ** splice: 
var array2 = ["new", 1, 2, 3, 4];
var newArray = array2.splice(3); 
console.log(newArray); // [3, 4]

var array3 = ["new", 1, 2, 3, 4];
var newArray2 = array3.splice(2, 2); // (start - number of element)
console.log(newArray2); // [2, 3]
console.log(array3); // ["new", 1, 4]


// ** slice: untouched old array
var array4 = ["new", 1, 2, 3, 4];
var newArray3 = array4.slice(2, 4); // (start - end)
console.log(newArray3); // [2, 3]
console.log(array4); // ["new", 1, 2, 3, 4]

```