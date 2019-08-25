# Objects are Reference Types (Refresher)
```javascript
var person1 = {
    name: 'Max',
    age: 27
};

var person2 = {
    name: 'Max',
    age: 27
};

console.log(person1 == person2); // false
```