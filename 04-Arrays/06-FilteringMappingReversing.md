# Filtering, Mapping and Reversing Array Elements
```javascript
var array1 = [1, 2, 3, 4];

// ** filter (return new array)
console.log(array1.filter(function(value) {
    return value > 2;
})); // [3, 4]

// ** map (return new array)
console.log(array1.map(function(value) {
    return value * 2;
})); // [2, 4, 6, 8]

// ** reverse (original array change)
console.log(array1.reverse()); //[4, 3, 2, 1]
console.log(array1); // [4, 3, 2, 1]
```