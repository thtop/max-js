# Transforming Formats & Values
```javascript
var a = '5';
console.log(parseInt(a)); // 5 (Number)

var b = 'test';
console.log(parseInt(b)); // NaN

var c = 'FBB123';
console.log(parseInt(c, 16)); // 16494883

var d = 10;
console.log(typeof d.toString()); // string

var e = 10.3;
console.log(e.toFixed()); // 10;

var f = 10.3;
console.log(f.toFixed(2)); // 10.30

```