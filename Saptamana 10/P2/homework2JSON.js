const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

var btn = document.querySelector('button');

btn.addEventListener('click', exWife);

function exWife() {
    let request = new XMLHttpRequest;

    request.open('GET', url);

    request.responseType = 'json';
    request.send();

    request.onload = function() {
        const message = request.response[0];
        const words = document.getElementById('quote');
        words.textContent = message;

    }
}
