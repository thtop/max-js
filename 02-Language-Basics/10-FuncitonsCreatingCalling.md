# Functions - Creating and Calling Them
```javascript
function calc() {
    console.log('Inside function!');
}
calc(); // Inside function!
console.log(typeof calc); // function


// ** funciton variable
var calc2 = function() {
    console.log('Inside function 2');
};
calc2(); //Inside function 2
console.log(typeof calc2); // function


// ** function in another function
var calc3 = function() {
    console.log('Inside function 3');
};
var anotherFn = calc3;
anotherFn(); // Inside function 3


// ** call function and assign
var calc4 = function() {
    console.log('Inside function 4');
};
var anotherFn = calc4(); 
anotherFn(); // Error: anotherFn is not a function
// it's undefined

// ** not return
var calc5 = function() {
    console.log('Inside function 5');
};
var anotherFn = calc5();
console.log(anotherFn); // Inside function 5
                        // undefined
```