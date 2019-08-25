# Handling "this" with bind(), call(), apply()
```javascript
function fn(message) {
    console.log(message + this);
}

var obj = {
    obfn: fn
};

var person = {
    name: 'Max'
}

// ** bind
obj.obfn.bind(person, 'Hello')(); // Hello[object Object]

// ** call
obj.obfn.call(person, 'Hello'); // Hello[object Object] // Hello[object Object]

// ** apply
obj.obfn.apply(person, ['Hello']); // Hello[object Object]


```