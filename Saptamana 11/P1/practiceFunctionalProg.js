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
console.log(getPersonsDomElements([
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

const bla = a => {
  let splitWord = a.split('');
  console.log(splitWord);
  
  let moveLetter = splitWord.map(el => {
    return String.fromCharCode(el.charCodeAt(0) + 1);
  })
  
  console.log(moveLetter);
  
  let trasnformIntoString = moveLetter.join('');
  
  console.log(trasnformIntoString);
  }

console.log(bla('hello'));