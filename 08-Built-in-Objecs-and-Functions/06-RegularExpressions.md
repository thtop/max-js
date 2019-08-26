# Regular Expressions
```javascript
var string = 'abc';

var pattern1 = /ab/;
console.log(pattern1); // /ab/

console.log(pattern1.exec(string)); // ["ab", index: 0, input: "abc", groups: undefined]


var pattern2 = /abc/;
console.log(pattern2.exec(string)); // ["abc", index: 0, input: "abc", groups: undefined]

var pattern3 = /xx/;
console.log(pattern3.exec(string)); // null

var str = 'abab';
var pattern4 = 'ab';
console.log(str.match(pattern4)); // ["ab", index: 0, input: "abab", groups: undefined]
```