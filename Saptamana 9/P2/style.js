
const books = [
    {title: 'The Power of Habit',
     author: 'Charles Duhigg',
     read: true
    },
    {title: 'Mindset: The New Psychology of Success',
    author: 'Carol S. Dweck',
    read: false
    }];

const body = document.querySelector('body');
for(i = 0; i < books.length; i++) {
    const paragraph = document.createElement('p');
    paragraph.textContent = books[i]['title']+ '' +['author'];
    document.getElementsByTagName('body')[0].appendChild(paragraph);
    console.log(paragraph);
}
console.log(books);

const ulElement = document.createElement('ul');
const ul = document.querySelector('ul');
for(i = 0; i < books.length; i++) {
    const liElement = document.createElement('li');
    liElement.textContent = books[i]['title']+ '' +['author'];
    ulElement.appendChild(liElement);
}
document.getElementsByTagName('body')[0].appendChild(ulElement)
console.log(ulElement);

