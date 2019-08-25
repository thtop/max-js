# Working with Elements: Push, Pop, Unshift and Shift
```javascript
var array1 = [1, 2, 3];

// ** push: add to last element
array1.push(4); 
console.log(array1); // [1, 2, 3, 4]


// ** pop:  remove end element
var array2 = [1, 2, 3];
var elementPop = array2.pop(); //
console.log(elementPop) // 4
console.log(array2); // [1, 2, 3]


// ** shift: remove first element
var array3 = [1, 2, 3];
console.log(array3.shift()); // 1
console.log(array3); // [2, 3, 4]

// ** unshift: add to first array
var array4 = [1, 2, 3];
array4.unshift('new');
console.log(array4); // ["new", 1, 2, 3]

```