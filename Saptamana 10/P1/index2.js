const button = document.querySelector('button');

const postTheGossip = () => {
    const name = document.querySelector('#name').value;
    const adjective = document.querySelector('#adjective').value;
    const randomWord = document.querySelector('#random-word').value;
    const paragraph = document.createElement('p');
    paragraph.textContent = name + ' este ' + adjective + ' dupa ' + randomWord;
    document.querySelector('body').appendChild(paragraph);
};
button.addEventListener('click', postTheGossip);

