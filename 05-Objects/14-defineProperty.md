# Creating Properties with defineProperty()
#### Example 1: defineProperty
```javascript
var account = {
    cash: 12000,
    withdraw: function(amount) {
        this.cash -= amount;
        console.log(`Withdrew ${amount}, new cash reserve is: ${this.cash}`);
    }
};
//account.withdraw(1000); // Withdrew 1000, new cash reserve is: 11000


Object.defineProperty(account, 'deposit', {
    value: function(amount) {
        this.cash += amount;
    }
});

account.deposit(3000);
account.withdraw(1000); // Withdrew 1000, new cash reserve is: 14000

```

#### Example 2: writable
```javascript
var account = {
    cash: 12000,
    withdraw: function(amount) {
        this.cash -= amount;
        console.log(`Withdrew ${amount}, new cash reserve is: ${this.cash}`);
    }
};

Object.defineProperty(account, 'name', {
    value: 'ID000-1',
    writable: true

});

console.log(account.name); // ID000-1

account.name = 'ID000-3';

//console.log(account.name); // ID000-1: default read-only

console.log(account.name); // ID000-3

```

#### Example 3: enumerable
```javascript
var account = {
    cash: 12000,
    withdraw: function(amount) {
        this.cash -= amount;
        console.log(`Withdrew ${amount}, new cash reserve is: ${this.cash}`);
    }
};

Object.defineProperty(account, 'name', {
    value: 'ID000-1',
    enumerable: true // swith on & of

});

console.log(account.name); // ID000-1

account.name = 'ID000-3';

console.log(account.name); 
```

#### Example 4: getter & setter

```javascript
var account = {
    cash: 12000,
    _name: 'Default',
    withdraw: function(amount) {
        this.cash -= amount;
        console.log(`Withdrew ${amount}, new cash reserve is: ${this.cash}`);
    }
};

Object.defineProperty(account, 'name', {
    get: function() {
        return this._name;
    },
    set: function(name) {
       if (name == 'Max') {
           this._name = name;
       }
    }
});

console.log(account.name); //Default

account.name = 'ID000-3';

console.log(account.name); // ID000-3 // Default

console.log(account._name); // Default
```