# The Date Object
```javascript
var today = new Date();
console.log(today); // Mon Aug 26 2019 19:19:48 GMT+0700 (Indochina Time)

console.log(today.toString()); // Mon Aug 26 2019 19:19:48 GMT+0700 (Indochina Time)

var afterDay = new Date(2016, 0, 26);
console.log(afterDay.toString()); // Tue Jan 26 2016 00:00:00 GMT+0700 (Indochina Time)

var afterDay2 = new Date(2016, 0, 32);
console.log(afterDay2.toString()); // Mon Feb 01 2016 00:00:00 GMT+0700 (Indochina Time)

var day3 = new Date('2016/05/20');
console.log(day3.toString()); // Fri May 20 2016 00:00:00 GMT+0700 (Indochina Time)

console.log(Date.parse('2016/05/20')); // 1463677200000

var d = new Date();
console.log(d.getDate()); // 26
console.log(d.getDay());  // 1
```