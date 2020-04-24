const submit = document.querySelector('#button');
const user = document.querySelector('.username');
const email = document.querySelector('.email');
const fName = document.querySelector('.fname');
const lName = document.querySelector('.lname');
const phone = document.querySelector('.telephone');

const pressButton = () => {
    const usernameError = document.createElement('p');
    usernameError.textContent = 'Please enter a username';
    usernameError.style.background = 'pink';
    usernameError.style.padding = '10px';
    usernameError.style.border = '2px solid red';

    const errorAddress = document.createElement('p');
    errorAddress.textContent = 'Please enter a valid email address';
    errorAddress.style.background = 'pink';
    errorAddress.style.padding = '10px';
    errorAddress.style.border = '2px solid red';

    const fNameError = document.createElement('p');
    fNameError.textContent = 'Please enter a First Name';
    fNameError.style.background = 'pink';
    fNameError.style.padding = '10px';
    fNameError.style.border = '2px solid red';

    const lNameError = document.createElement('p');
    lNameError.textContent = 'Please enter a Last Name';
    lNameError.style.background = 'pink';
    lNameError.style.padding = '10px';
    lNameError.style.border = '2px solid red';

    const phoneError = document.createElement('p');
    phoneError.textContent = 'Please enter a Phone';
    phoneError.style.background = 'pink';
    phoneError.style.padding = '10px';
    phoneError.style.border = '2px solid red';

    document.querySelector('.username').prepend(usernameError);
    document.querySelector('.email').prepend(errorAddress);
    document.querySelector('.fname').prepend(fNameError);
    document.querySelector('.lname').prepend(lNameError);
    document.querySelector('.telephone').prepend(phoneError);
};

submit.addEventListener('click', pressButton);
