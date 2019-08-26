# Closures
```javascript
function generator(input) {
    var number = input;
    return function() {
        return number * 2;
    };
}
var calc = generator(900);
console.log(calc); // function
console.log(calc()); // 1800

var calcAnother = generator(1000);
console.log(calc()); // 1800
console.log(calcAnother()); // 2000
```