# Operations - Multiplication & Floating Point Problems
```javascript
var a = 12;
var b = 2;

a *= b; // a = a * b
console.log(a); // 24

// ** decimal
var d = 1.3;
var e = 2.2;
console.log(d * e); // 2.8600000000000003

if (d * e == 2.86) {
    console.log('true');
} else {
    console.log('false'); // false
}

if ((d * e).toFixed(2) == 2.86) {
    console.log('true'); // true
} else {
    console.log('false'); 
}

// ** Multiple
var f = 2;
var g = '2.2';
console.log(f * g); // 4.4

var h = 'another';
var i = ' join;'
console.log(h * i); // NaN

// ** null
var j = 12;
var k = null;
console.log(j * k); // 0


// ** infinity
var m = 12;
var n = Infinity;
console.log(m * n); // Infinity

```