# Important built-in Methods and Properties
```javascript
var person = {
    name: 'Max',
    age: 27
}

//delete person.name;
//console.log(person.name); // undefined

console.log('name' in person); // true
console.log('Name' in person); // false
```

#### Examle 2
```javascript
var person = {
    name: 'Max',
    age: 27,
    greet: function() {
        console.log('Hello');
    }
}

// field
for (var field in person) {
    console.log(field);
}

// value
for (var value in person) {
    console.log(person[value]);
}

```