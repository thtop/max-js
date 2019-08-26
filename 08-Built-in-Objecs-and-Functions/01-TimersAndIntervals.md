# Timers & Intervals
```javascript
// ** Timers
setTimeout(function() {
    console.log('Finished!');
}, 2000);

// Intervals & Timers
var interval = setInterval(function() {
    console.log('Ping!');
}, 500);

setTimeout(function() {
    clearInterval(interval);
}, 2500);

```