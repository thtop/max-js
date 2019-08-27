var inner = document.querySelector('#inner');
var outer = document.querySelector('#outer');

inner.addEventListener('click', innerListener);
outer.addEventListener('click', outerListener, true); // add true

function innerListener(event) {
    //event.stopPropagation();
    console.log('Clicked inner');
}

function outerListener(event) {
    console.log('Clicked outer');
}