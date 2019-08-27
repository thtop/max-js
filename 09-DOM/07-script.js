var p = document.createElement('P');
p.textContent = 'A new paragraph!';
p.style.fontSize = '17px';

var li = document.querySelector('li');
var a = li.firstElementChild;

//li.appendChild(p);

li.insertBefore(p, a);