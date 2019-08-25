# Properties & "this"
```javascript
var person = {
    name: 'Lexa',
    age: 19,
    details: {
        hobbies: ['Sports', 'Cooking'],
        location: 'Germany'
    },
    greet: function() {
        console.log(`Hello, I am ${this.age} years old`);
    }
};

//person.name = 'Anna';
//console.log(person); // name: "Anna"

person.greet(); // Hello, I am 19 years old


```
