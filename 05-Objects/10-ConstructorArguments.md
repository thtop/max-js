# Constructor Functions & Arguments
```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

var person1 = new Person('Lexa', 22);
var person2 = new Person('Clarke', 18);
console.log(person1); // {name: "Lexa", age: 22}
console.log(person2); // {name: "Clarke", age: 18}

```