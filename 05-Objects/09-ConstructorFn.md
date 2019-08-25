# Constructor Functions
```javascript
function Person() {

}

Person.prototype.greet = function() {
    console.log('Hello');
};

var person = new Person();
person.name = 'Max';

person.greet(); // Hello

console.log(person); // Person {name: "Max"}
console.log(person.__proto__ == Object.prototype); // false
console.log(person.__proto__ == Person); // false
console.log(person.__proto__ == Person.prototype); // true

```

#### Config Object
```javascript
function Person() {
    this.name = 'Max';
    this.greet = function() {
        console.log(`Hello, I am ${this.name}.`)
    }
}

//Person.prototype.name = 'Anna'; // not override

var person = new Person();
console.log(person.name); // Max
person.name = 'Lexa'; // override

person.greet(); // Hello, I am Lexa.

var anotherPerson = new Person();
anotherPerson.greet(); // // Hello, I am Max.


// Prototype
Person.prototype.greetGeneral = function() {
    console.log('Hello');
}
anotherPerson.greetGeneral(); // Hello

console.log(person instanceof Person); // true

//console.log(this); // Window object
```