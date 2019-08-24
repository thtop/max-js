# Control Structures - While Loop
```javascript
var number = 5;

while (number < 7) {
    console.log(number);
    number++;
}

// ** while loop with condition
var condition = true;
var i = 2;

while (condition) {
    if (i == 3) {
        condition = false;
    }
    console.log(i);
    i++;
}

// ** false
var condition2 = false;

while (condition2) {
    console.log('Executed');
}

// ** do while loop
var condition3 = false;

do {
    console.log('Executed');
}
while (condition3);
```