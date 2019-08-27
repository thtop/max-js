var http = new XMLHttpRequest();
var url = 'https://jsonplaceholder.typicode.com/posts';
var method = 'POST';

var data = 'title=Post%20%title&body=Body';

http.open(method, url);
http.setRequestHeader('Content-Type', 'application/x-www-from-urlencoded');

http.onreadystatechange = function () {
    if (http.readyState === XMLHttpRequest.DONE && http.status === 201) {
        console.log(JSON.parse(http.responseText));
    } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 201) {
        console.log('Error!');
    }
};

http.send(data);