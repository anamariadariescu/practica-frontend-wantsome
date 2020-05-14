// Attach a button listener to the button
//
// On click on the button, make an AJAX request to reddit for results of cute puppies
//
// For each of the elements in data.children, append a new <img> element to .text with the src as the child.data.thumbnail
const puppies ='https://www.reddit.com/r/aww/search.json?q=puppy&restrict_sr=true';

const btn = document.getElementsByClassName('btn');

btn[0].addEventListener("click", cutePuppies);


function cutePuppies() {
    let request = new XMLHttpRequest;

    request.open('GET', puppies);

    request.responseType = 'json';

    request.send();

    request.onload = function() {
       const object = request.response;
       allObjects(object.data.children);
}
}

    function allObjects(childrenObj) {
        const replace = document.querySelector('.text');
        for(const property in childrenObj) {
            var img = document.createElement('img');
            img.src = childrenObj[property]['data']['thumbnail'];
            replace.appendChild(img);
        }
    }