let requestURL = 'https://raw.githubusercontent.com/bahamas10/css-color-names/master/css-color-names.json';

let request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function () {
    const colors = request.response;
    allColors(colors);
}

function allColors(jsonObj) {
    var body = document.querySelector('body');
    for(const property in jsonObj) {
        console.log(property)
        console.log(jsonObj[property])
        var divParent = document.createElement('div');
        var div = document.createElement('div');
        div.style.width = '10px';
        div.style.height = '10px';
        div.style.backgroundColor = jsonObj[property];
        divParent.appendChild(div);
        body.appendChild(divParent);
        var p = document.createElement('p');
        p.textContent = property;
        divParent.appendChild(p);
        div.style.float = 'left';
    }
}

