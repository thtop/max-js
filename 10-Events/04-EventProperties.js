var inner = document.querySelector('#inner');
var outer = document.querySelector('#outer');

inner.addEventListener('click', innerListener);
outer.addEventListener('click', outerListener);

function innerListener(event) {
    console.log(event.target);
    event.target.style.backgroundColor = 'red';
    event.stopPropagation();
    console.log('Clicked inner');
}

function outerListener(event) {
    console.log(event.clientX, event.clientY);
    console.log('Clicked outer');
}