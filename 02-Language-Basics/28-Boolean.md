# Operators - Boolean
```javascript
if ((1 == 1) && (2 == 2)) {
    console.log('True'); // True
} else {
    console.log('false');
}

if ((1 == 1) && (2 == 3)) {
    console.log('True');
} else {
    console.log('False'); // False
}

console.log((1 == 1) || (2 == 3) || (4 == 5)); // true
console.log((1 == 1) && (2 == 3) || (4 == 4)); // true

console.log(1 !== 2); // true

var isTrue = true;
console.log(!isTrue); // false
```