# Object Creating & Prototypes Summary
```javascript
// ** 1 Literal notation
var person = {
    name: 'Max',
    age: 27
};
console.log(person instanceof Object); // true

// ** 2 new Object
var person = new Object();
person.name = 'Max';
person.age = 27;

// ** 3 Object.create()
var person = Object.create(null);
var person = new Object();
person.name = 'Max';
person.age = 27;
console.log(person.toString()) // error
console.log(person instanceof Object) // false

// ** 4 Constructor Functions
function Person(name, age) {
    this.name = name;
    this.age = age;
}

var person1 = new Person('Lexa', 22);
var person2 = new Person('Clarke', 18);

console.log(person1);
console.log(person2);
```