# Global vs Local Scope
```javascript
var test = 'Global scope';


function localScope() {
    var test 'local scope';
    console.log(test); // local scope
}
localScope();
console.log(test); // Global scope

```