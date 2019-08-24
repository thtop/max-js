# Operations - Division & Modulus
```javascript
var a = 12;
var b = 2;

a /= b; // a = a / b;
console.log(a); // 6

// **
var c = 12;
var d = '2';
console.log(c / d); // 6

// **
var e = 3.3;
var f = 2.2;
console.log(e / f); // 1.4999999999999998

console.log((e / f).toFixed(2)); // 1.50

// **
var j = 10;
var k = 0;
console.log(j / k); // Infinity

// **
var m = 10;
var n = Infinity;
console.log(m / n); // 0

// ** Modulus
var g = 10;
var h = 3;
console.log(g % h); // 1

```