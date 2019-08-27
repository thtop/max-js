console.log(document.querySelector('h1'));
console.log(document.querySelector('.simple'));
console.log(document.querySelector('#my-id'));

document.querySelector('#easy').style.backgroundColor = 'red';

document.querySelector('a').style.backgroundColor = 'green';

document.querySelectorAll('.simple')[1].style.backgroundColor = 'red';

document.querySelectorAll('.simple').textContent = 'Hello';

document.querySelector('.simple').firstElementChild.textContent = 'Hello 2';

