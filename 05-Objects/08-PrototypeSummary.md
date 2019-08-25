# Prototyes Summary
```javascript
var person = {
    name: 'Lexa',
    age: 19
};

Object.prototype.greet = function() {
    console.log(`Hello there, I am ${this.name}!`);
};

var lexa = Object.create(person);
var anna = Object.create(person);

console.log(anna.__proto__ == person); // true
                 
                 // person  // Object.prototype
console.log(anna.__proto__.__proto__ == Object.prototype); // true

console.log(Object.getPrototypeOf(anna) == person); // true

```