# Control Structures - If Statement Advanced
```javascript
var condition = 1; // true, 2 = true, string = true 
                   // 0 = false, null = false
var anotherCondition = false;

if (condition) {
    console.log('Executed!');
} else if (anotherCondition) {
    console.log('Still Executed!');
} else {
    console.log('Not Executed');
}

// **
console.log(1 == true); // true
console.log(1 == true); // false (number != boolean)

console.log(2 == true); // false ???
// the only 0 and 1 can be cast into booleans,
// the rest is only treated as true.


```