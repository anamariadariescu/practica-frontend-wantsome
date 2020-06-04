// 1
// Creati o functie care primeste un singur parametru si returneaza un Promise. Folosind setTimeout, dupa 500ms,
// acest Promise fie va face resolve, fie va face reject, in functie de urmatoarele cazuri: daca input-ul este un string,
// Promise-ul se va rezolva cu rezultatul avand valoarea string-ului uppercased; daca input-ul nu este un string,
// Promise-ul va face reject cu rezultatul avand valoarea string-ului fara nicio modificare.
// Apelati functia si folositi consumatorii then si catch pentru a trata ambele cazuri.

const promiseForString = (inputStr) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof inputStr === 'string') {
                resolve(inputStr.toUpperCase());
            } else {
                reject(inputStr);
            }
        }, 500);
    });
};

const returnedPromise = promiseForString("myString");

returnedPromise
    .then((result) => {
        console.log(`Stringul uppercased este: ${result}`);
    })
    .catch((error) => {
        `String-ul pentru cazul de eroare este: ${error}`;
    });

// 2
// Creati o functie care primeste un numar ca si argument si returneaza un Promise care testeaza daca valoarea este
// mai mica sau mai mare decat 10 - se va face reject / resolve in functie de valoarea de adevar a conditiei de
// comparatie.
// Apelati functia si folositi consumatorii then si catch pentru a trata ambele cazuri.

const promiseForNumber = (number) => {
    return new Promise((resolve, reject) => {
        if (number < 10) {
            resolve(number);
        } else {
            reject(number);
        }
    })
}

promiseForNumber(8)
    .then((result) => {
        console.log(`The result is number ${result} and is less than 10`);
    })
    .catch((result) => {
        console.log(`The result is number ${result} and is greater or equal to 10`);
    });

promiseForNumber(10)
    .then((result) => {
        console.log(`The result is number ${result} and is less than 10`);
    })
    .catch((result) => {
        console.log(`The result is number ${result} and is greater or equal to 10`);
    });