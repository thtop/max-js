console.log(document.body.children[0]); // <h1>Hello</h1>
console.log(document.body.children[0].textContent); // Hello

document.body.children[0].textContent = 'Something else';

console.log(document.body.style.backgroundColor = 'red');
console.log(document.body.children[0].style.backgroundColor = 'green');