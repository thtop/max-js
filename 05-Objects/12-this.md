# The "this" Keyword and why it might behave strangely
```javascript
function fn() {
    console.log(this); // Global object
}

fn();

var obj = {
    objfn: fn // window
};

var person = {
    name: 'Max'
}

obj.objfn.bind(person)(); // {name: Max}


```