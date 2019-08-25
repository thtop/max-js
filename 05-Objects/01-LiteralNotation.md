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

console.log(person['first-name']); // Commander

// function
person.greet();

console.log(person); // object
console.log(person.name); // string

var field = 'name';
console.log(person[field]);


```