# Reducing Arrays
```javascript
var array = [1, 2, 3, 4];

console.log(array.reduce(function(total, value) {
    console.log(`TOTAL: ${total} + VALUE: ${value}`);
    return total + value;
})); // 10

/**
TOTAL: 1 + VALUE: 2
TOTAL: 3 + VALUE: 3
TOTAL: 6 + VALUE: 4
*/
console.log(array); // [1, 2, 3, 4]
```