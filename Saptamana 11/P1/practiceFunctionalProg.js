// 1

function capitalizeNames(arr){
    console.log(arr.map(name => name.charAt(0).toUpperCase() + name.slice(1)))
   }
   capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]);

// 2
// Scrieti codul corespunzator functiei care dubleaza fiecare element de tip valoare numerica dintr-un array specificat ca
// argument

function doubleEachNumber(arr){
    doubleNr = arr.map(arr => arr * 2);
    return doubleNr;
   }
   console.log(doubleEachNumber([2, '5', 100, '100', 'blalblala']));

// 3

function getPersonsNames(arr){
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

function getPersonsDomElements(arr){
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
  },{
      name: 'Geoff Newell',
      active: true
  },{
      name: 'Peter Newnham',
      active: true
  },{
      name: 'James Walker',
      active: false
  }];
  
  function activePerson(active)
  {
    if (active === true) {
      return true;
    }
  }
  ``
  const activePeople = (collection) => {
    return collection.filter((person) => person.active === true);
  }
  
  console.log(activePeople(myData))

  /*Ex 2
Convertiti toate distantele in mile - 0.621371 * distance - folosind map
Returnati distanta totala - folosind reduce
*/

const distances = [
    { from: 'New York', to: 'Dhaka', distance: 12654},
    { from: 'Sydney', to: 'chittagong', distance: 8858},
    { from: 'Kolkata', to: 'Sylhet', distance: 670}
  ];
  
  const road = (arr) => {
    miles = arr.map(arr => arr.distance * 0.621371);
    return miles;
  }
  console.log(road(distances));

//   Returnati toate itemele cu distanta mai mica de 10000  - folosind filter

function shortDistance(road) {
    if (distance <= 1000) {
      return distance;
    }
  }
  
  const smallDistance = (collection) => {
    return collection.filter(city => city.distance <= 1000)
  }
  
  console.log(smallDistance(distances))