# Prototypes in Action
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
anna.name = 'Anna';

console.log(lexa.name); // Lexa
lexa.greet(); // Hello there, I am Lexa!
anna.greet(); // Hello there, I am Anna!

```