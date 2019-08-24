# Control Structures - Controlling Loops with break & continue
```javascript
// ** break
for (var i = 0; i < 5; i++) {
    if (i == 1) {
        break; 
    }
    console.log(i); // 0
}

// ** continue
for (var i = 0; i < 5; i++) {
    if (i == 1) {
        continue; 
    }
    console.log(i); // 0, 2, 3, 4
}


// ** inner continue
for (var i = 0; i < 5; i++) {
   for (var j = 0; j < 2; j++) {
        if (i == 1) {
        continue; 
    }
    console.log(`inside innder loop, j = ${j}`);
   }
   console.log(i);
}


// ** inner break
for (var i = 0; i < 5; i++) {
   for (var j = 0; j < 2; j++) {
        if (i == 1) {
        break; 
    }
    console.log(`inside innder loop, j = ${j}`);
   }
   console.log(i);
}
```