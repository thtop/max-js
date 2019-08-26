console.log(document.body.children[0].children[0]); // Link 1

console.log(document.body.firstChild);
console.log(document.body.firstElementChild); // <ui></ui>
console.log(document.body.lastElementChild); // <sxript ...

console.log(document.body.firstElementChild.firstElementChild.nextElementSibling); // Link 2

console.log(document.body.firstElementChild.firstElementChild.parentElement); // <ui> ... </ui>