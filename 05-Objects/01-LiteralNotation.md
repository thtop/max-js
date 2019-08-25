# Object Basics & Literal Notation
```javascript

var person = {
    "first-name": 'Commander',
    name: 'Lexa',
    age: 19,
    details: {
        hobbies: ['Sports', 'Cooking'],
        location: 'Germany'
    },
    greet: function() {
        console.log(`Hello, ${this.name}`);
    }
};
console.log(person);
console.log(person.name);
console.log(person.details.hobbies);


var field = 'name';
console.log(person[field]);
console.log(person['first-name']); // Commander

// function
person.greet();

console.log(typeof person); // object
console.log(typeof person.name); // string

```