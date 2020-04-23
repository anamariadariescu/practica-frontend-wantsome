const buttonEventHandler = document.querySelector('button');
buttonEventHandler.onclick = () => {
    alert('Ai apasat pe buton')
}

const textInputEventHandler = document.querySelector('input');
textInputEventHandler.onchange = () => {
    alert('Textul din input a fost schimbat')
}

const cameleonEventHandler = document.querySelector('p');
const newColor = () => {
    let colors = ['red', 'green', 'yellow', 'black', 'blue'];
    cameleonEventHandler.style.color = colors[Math.floor(Math.random() * 5)]
}
textInputEventHandler.addEventListener('keydown', newColor);
