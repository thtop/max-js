# Function - Arguments & Returning Data
```javascript
function calc() {
    var string = 'Inside function'; 
    return string;
};

var returned = calc();
console.log(returned); //Inside function


// ** plus
function plus(num1, num2) {
    return num1 + num2;
};

var result = plus(4, 4);
console.log(result); // 8


// ** assing function to variable
function plus1(num1, num2) {
    return num1 + num2;
};

var result1 = plus1;
console.log(result1(5, 5)); // 10


// ** NaN
function plus2(num1, num2) {
    return num1 + num2;
};

var result = plus2();
console.log(result); // NaN (undefined + undefined)
```