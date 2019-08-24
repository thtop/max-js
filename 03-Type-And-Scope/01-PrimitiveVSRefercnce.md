# Primitive vs Reference Types
#### Primitive Types
```javascript
var a = 5;
var b = a; // copy the value
```

#### Reference Types
```javascript
var a = { a: 5};
var b = a; // copy the Pointer
```

#### Ecercise
```javascript
// ** Primitive Types
var aNumber = 5;
console.log(aNumber); // 5
var anotherNumber = aNumber;
console.log(anotherNumber); // 5

aNumber = 12;
console.log(aNumber); // 12
console.log(anotherNumber); // 5


// ** Reference Type
var array = [1, 2, 3]; // object
var anotherArray = array;

console.log(array); // [1, 2, 3]
console.log(anotherArray); // [1, 2, 3]

array.push(4); // change the object

console.log(array); // [1, 2, 3, 4]
console.log(anotherArray); // [1, 2, 3, 4]


array = ['a', 'b']; // ["a", "b"] -creating a new array
console.log(array); // [1, 2, 3, 4]

```
