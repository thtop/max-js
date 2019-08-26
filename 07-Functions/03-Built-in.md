# Built-in Methods & Properties
#### Example 1
```javascript
function message(message) {
    console.log(message);
    console.log(arguments);
}

message('Hi!');
/*
Hi!
Arguments ["Hi!", callee: ƒ, Symbol(Symbol.iterator): ƒ]0: "Hi!"callee: ƒ message(message)length: 1Symbol(Symbol.iterator): ƒ values()__proto__: Object
*/
```
#### Example 2
```javascript
function message(message) {
    console.log(message);
    console.log(arguments);
    console.log(arguments[0]); // 10
    console.log(arguments[2]); // undefined
    console.log(arguments.length); // 2
}
message('Hi!', 10);
/*
0: Hi!
1: 10
*/
```

#### Example 3
```javascript
function message(message) {
    console.log(message);
}
message(message.name); // message (name of the function)

var msg = message;
console.log(msg.name); // "message"

console.log(msg.length); // 1 (argument)
```

#### Example 4
```javascript
var msg = function (message) {
    console.log(message);
};

console.log(msg.name); // smg
```

#### Example 5
```javascript
function message(message) {
    console.log(this.name);
};

message(); // --
```