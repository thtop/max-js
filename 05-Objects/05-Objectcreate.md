# Object.create()
```javascript
var person = {
    name: 'Max',
    age: 27
};

//Object.prototype

var anotherPerson = Object.create(person);
anotherPerson.name = 'Anna';

console.log(anotherPerson); // {name: "Anna"}
console.log(anotherPerson.age); // 27
console.log(typeof anotherPerson); // Object

```