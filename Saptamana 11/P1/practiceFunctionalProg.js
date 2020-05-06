// 1

function capitalizeNames(arr) {
  console.log(arr.map(name => name.charAt(0).toUpperCase() + name.slice(1)))
}
capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]);

// 2
// Scrieti codul corespunzator functiei care dubleaza fiecare element de tip valoare numerica dintr-un array specificat ca
// argument

function doubleEachNumber(arr) {
  doubleNr = arr.map(arr => arr * 2);
  return doubleNr;
}
console.log(doubleEachNumber([2, '5', 100, '100', 'blalblala']));

// 3

function getPersonsNames(arr) {
  let names = arr.map(arr => arr.name + " " + arr.surname)
  return names
}
console.log(getPersonsNames([
  {
    name: 'Angelina',
    surname: 'Jolie',
    age: 80
  },
  {
    name: 'Eric',
    surname: 'Jones',
    age: 27
  },
]));

// 4

const computeExamPass = (arr) => arr.map(mark => {
  if (mark.grade > 5) {
    return mark.name + ' has passed the exam';
  }
  return mark.name + ' has not passed the exam';
}
);

console.log(computeExamPass([
  {
    name: 'Angelina',
    surname: 'Jolie',
    grade: 7
  },
  {
    name: 'Eric',
    surname: 'Jones',
    grade: 3
  },
]));

// 5

function getPersonsDomElements(arr) {
  arr.forEach(person => {
    let name = document.createElement('h1');
    name.textContent = person.name + ' ' + person.surname;
    document.querySelector('body').appendChild(name);

    let age = document.createElement('h1');
    age.textContent = person.age;
    document.querySelector('body').appendChild(age);
  })
}
getPersonsDomElements([
  {
    name: 'Angelina',
    surname: 'Jolie',
    age: 80
  },
  {
    name: 'Eric',
    surname: 'Jones',
    age: 27
  },
]);

/* Ex.1
Loop through the Array and remove all non-active users from the initial Array */

const myData = [
  {
    name: 'Iggy Turskis',
    active: false
  }, {
    name: 'Geoff Newell',
    active: true
  }, {
    name: 'Peter Newnham',
    active: true
  }, {
    name: 'James Walker',
    active: false
  }];

const activePeople = myData.filter(person => person.active === true);
console.log(activePeople);

/*Ex 2
Convertiti toate distantele in mile - 0.621371 * distance - folosind map
Returnati distanta totala - folosind reduce
*/

const distances = [
  { from: 'New York', to: 'Dhaka', distance: 12654 },
  { from: 'Sydney', to: 'chittagong', distance: 8858 },
  { from: 'Kolkata', to: 'Sylhet', distance: 670 }
];

const road = arr => {
  miles = arr.map(arr => arr.distance * 0.621371);
  return miles;
}
console.log(road(distances));

//   Returnati toate itemele cu distanta mai mica de 10000  - folosind filter

const smallDistance = distances.filter(city => city.distance < 10000);
console.log(smallDistance);

// Returnati distanta totala - folosind reduce

const totalDistance = distances.reduce((acc, road) => {
  return acc + road.distance;
}, 0)
console.log(totalDistance);

// 3  	
// Returnati un array de obiecte care sa contina doar id si titlul fiecarui item de mai jos 
const releases = [
  {
    "id": 70111470,
    "title": "Die Hard",
    "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": [4.0],
    "bookmark": []
  },
  {
    "id": 654356453,
    "title": "Bad Boys",
    "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": [5.0],
    "bookmark": [{ id: 432534, time: 65876586 }]
  },
  {
    "id": 65432445,
    "title": "The Chamber",
    "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": [4.0],
    "bookmark": []
  },
  {
    "id": 675465,
    "title": "Fracture",
    "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": [5.0],
    "bookmark": [{ id: 432534, time: 65876586 }]
  }
];

const idAndTitle = releases.map(elem => (
  {
    ids: elem.id,
    titles: elem.titles
  }
))
console.log(idAndTitle);

// 4
// Returnati id-urile videourilor care au rating 5.0
const newReleases = [
  {
    "id": 70111470,
    "title": "Die Hard",
    "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": 4.0,
    "bookmark": []
  },
  {
    "id": 654356453,
    "title": "Bad Boys",
    "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": 5.0,
    "bookmark": [{ id: 432534, time: 65876586 }]
  },
  {
    "id": 65432445,
    "title": "The Chamber",
    "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": 4.0,
    "bookmark": []
  },
  {
    "id": 675465,
    "title": "Fracture",
    "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": 5.0,
    "bookmark": [{ id: 432534, time: 65876586 }]
  }
];

const bigRaiting = newReleases.filter((movie => movie.rating === 5.0))
  .map(movie => movie.id)

console.log(bigRaiting);

// 5
// Vreau la final sa am o lista de video ids

const movieLists = [
  {
    name: "New Releases",
    videos: [
      {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
      },
      {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
      }
    ]
  },
  {
    name: "Dramas",
    videos: [
      {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
      },
      {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
      }
    ]
  }
];

const firstMov = movieLists[0].videos.reduce((acc, elem) => {
  return acc + ',' + elem.id;
}, []);
console.log(firstMov);

const secondMov = movieLists[1].videos.reduce((acc, elem) => {
  return acc + ',' + elem.id;
}, []);
console.log(secondMov)

const list = firstMov.concat(secondMov);
console.log(list.split())

// 6
//ex.1.
// Scrieti o functie care sa mute literele cu o litera mai incolo folosind .map
// de exemplu moveLetters('hello') // => 'ifmmp'
// moveLetters('abcxy') // => "bcdyz"
//hint : String.fromCharCode() String.charCodeAt()

const word = a => {
  let splitWord = a.split('');
  console.log(splitWord);

  let moveLetter = splitWord.map(el => {
    return String.fromCharCode(el.charCodeAt(0) + 1);
  })

  console.log(moveLetter);

  let trasnformIntoString = moveLetter.join('');

  console.log(trasnformIntoString);
}

word('hello');

// ex2
// Vreau sa am o functie care sa faca uppercase la cuvinte in functie ca in exemplu de mai jos
// changeWordCase('hey ppl, lets learn javascript together') // => "HEY ppl, LETS learn JAVASCRIPT together SOMETIME"

const word2 = a => {
  let splitWord = a.split(' ');

  let uppercaseWord = splitWord.map((el, index) => {
    if (index % 2 === 0) {
      return el.toUpperCase();
    } else {
      return el
    }
  })

  let transformIntoString = uppercaseWord.join(' ');

  console.log(transformIntoString);
}

word2('hey ppl, lets learn javascript together');

// ex3
// Faceti asftel incat toate variabilele de mai jois sa returneze ceea ce zice numele
const arr = [
  { name: 'sasha', sex: 'f', age: 7, species: 'cat' },
  { name: 'john', sex: 'm', age: 133, species: 'human' },
  { name: 'titus', sex: 'm', age: 62, species: 'human' },
  { name: 'kalifa', sex: 'f', age: 255, species: 'human' },
  { name: 'oreo', sex: 'm', age: 21, species: 'cat' },
];

let allCats = arr.filter(cats => cats.species === 'cat');
console.log(allCats);

let allHumans = arr.filter(humans => humans.species === 'human');
console.log(allHumans);

let allFemales = arr.filter(gender => gender.sex === 'f');
console.log(allFemales);

let totalOfAllAges = arr.reduce((acc, years) => {
  return acc + years.age;
}, 0);
console.log(totalOfAllAges);

let cats = arr.filter(cats => cats.species === 'cat');
let averageAgeOfCats = cats.reduce((acc, years) => {
  return acc + years.age;
}, 0) / cats.length;
console.log(averageAgeOfCats);

let humans = arr.filter(humans => humans.species === 'human');
let averageAgeOfHumans = humans.reduce((acc, years) => {
  return acc + years.age
}, 0) / humans.length;
console.log(averageAgeOfHumans);

let avgLengthOfNames = arr.reduce((acc, names) => {
  return acc + names.name.length;
}, 0) / arr.length;
console.log(avgLengthOfNames);

//ex 1.
// Faceti o functie numita composedValue care ia ca argumente 2 functii si returneaza valoarea lor - // f1(f2(value))
//ex composedValue(square, double, 5);  // 100
// functia square returneaza patratul numarului iar double - dublul numarului

const firstFunc = a => {
  return a * 2;
}

const secondFunc = a => {
  return a * a;
}

const lastFunc = (f1, f2, value) => {
  return f1(f2(value));
}
console.log(lastFunc(secondFunc, firstFunc, 5));  

//ex.2
//faceti o functie 'compose' care atunci cand va fi apleata returneaza rezultatul altor 2 functii;
//exemplu const myFunction = compose(square, double) 
// myFunction(5)  --> 100
// myFunction(10) --> 400  ...etc

const double = a => {
  return a * 2;
};

const square = a => {
  return a * a;
}

const myFunction = (value) => {
  return square(double(value));
}
console.log(myFunction(5));
console.log(myFunction(10));

//ex.3
//faceti o functie find care ia ca parametrii un array si o functie care testeaza arrayul si returneaza doar elmentele care trec testele.
// find([1,2,3,4,5], isOdd); returneaza 1 3 5

const isOdd = nr => {  
  if(nr % 2 !== 0) {
    console.log(nr);
  }
}

const find = (array, f1) => {
for (i = 0; i < array.length; i++) {
  isOdd(array[i]);
}
}

find([1, 2, 3, 4, 5], isOdd);      