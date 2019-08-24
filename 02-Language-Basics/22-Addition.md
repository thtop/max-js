# Operation - Addition
```javascript
var a = 5;
var b = 10;

a += b; // a = a + b
console.log(a) // 15

a++; // a + 1
console.log(a); // 6

// ** + decimal
var c = 5.2;
var d = 4.5;
console.log(c + d); // 9.7

// ** + string
var e = 'Join ';
var f = 'us';
console.log(e + f); // Join us

var g = 3;
console.lg(e + g); // Join 3

// ** + boolean
var h = true;
var i = ' join';
console.log(h + i); // 'true join'

var k = 12;
var m = true; // 1
console.log(k + m); // 13

var n = true;
var p = true;
console.log(n + p); // 2

// ** + array
var j = [1, 2];
console.log(j + i); // 1,2 join

// ** null
var q = 12;
var r = null // 0
console.log(q + r); // 12

// ** nudefined
var s = 12;
var t = undefined;
console.log(s + t); // NaN


```