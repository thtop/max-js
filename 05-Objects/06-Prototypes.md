# Prototypes Introduction
```javascript
var age = 30;

var person = {
    name: 'Lexa',
    age: 27
};

Object.prototype.greet = function() {
    console.log('Hello there!');
}

console.log(person.__proto__);
console.log(person.toString());

person.greet(); // Hello there!

```

#### Prototype Chain
- obj
- prototype of obj
- Prototype of Prototype of obj
- ...

```javascript
var obj = { name: 'Lexa' }
obj.greet();
```