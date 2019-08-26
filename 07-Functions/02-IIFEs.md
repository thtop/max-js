# Immediately Invoked Function Executions (IIFEs)
#### Example 1: IIFE
```javascript
(function calc() {
    //console.log('Calc');
    var number = 10;
    console.log(number); // 10
})();
console.log(number); // Error: number is not defined
```

#### Example 2: Parameter
```javascript
(function calc(input) {
    var number = input;
    console.log(number); 
})(100); // 100
```

#### Example 3: Object
```javascript
var obj = {};
(function calc(input) {
    input.name = 'Max';
})(obj);

console.log(obj); // {name: "Max"}
```