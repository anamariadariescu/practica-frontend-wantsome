// Adaugati un tag script la final
// Schimbati stilul body-ului sa aiba font-family "Arial, sans-serif"
// Schimbati fiecare span(name, fav-drink, born-place) cu informatiile despre voi
// Iterati prin fiecare "li" si puneti clasa "listitem". Adaugati un tag style(in head) care seteaza o regula pentru .listitem sa aiba culoarea rosie
// Creati un element img si setati atributul src sa aiba o poza cu voi sau ceva random de pe net. Puneti acest element(append) la pagina noastra\

const body = document.querySelector('body');
body.style.fontFamily = 'Arial, sans-serif';

const ul = document.querySelector('ul');
const firstElement = ul.firstElementChild;
const newText = document.createTextNode('Ana Maria Oprica Dariescu');
firstElement.appendChild(newText);

const secondElement = firstElement.nextElementSibling;
const newText1 = document.createTextNode('Aperol');
secondElement.appendChild(newText1);

const lastElement = secondElement.nextElementSibling;
const newText2 = document.createTextNode('Vaslui');
lastElement.appendChild(newText2);

const ulList = document.querySelectorAll('ul > li');

for(i=0; i<ulList.length; i++) {
  ulList[i].classList.add('listitem');
}

console.log(ulList);

const css = '.listitem { color: red; }',
    head = document.head,
    style = document.createElement('style');

head.appendChild(style);

style.type = 'text/css';
style.appendChild(document.createTextNode(css));


const img = document.createElement('img');
img.setAttribute('src', 'https://www.gardenia.net/storage/app/public/guides/detail/xqCYpJDRmSDWfAkeFsdxwcQXdNcjaYPr13j3S3WZ.jpeg');
document.getElementsByTagName('body')[0].appendChild(img);
