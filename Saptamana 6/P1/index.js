// PRACTICE: Array methods and properties

//Ex1: Creati un array care sa aiba length-ul 5. Demonstrati ca length-ul este 5.
var numbers = [0, 1, 2, 3, 4];
var result = numbers.length;
console.log(result);

//Ex2: Din cele 2 arrayuri de mai jos, folositi o metoda sa avem unul singur
var array1 = ['Car', 'Vehicle'];
var array2 = ['House', 'Job'];
var result = array1.concat(array2);
console.log(result);

//Ex3: Creati 2 variabile, una care sa dea true si una care sa dea false atunci cand folosim metoda isArray()
var flowers = ['Peonies', 'Roses', 'Tulips'];
var result = Array.isArray(flowers);
console.log(result);

var numbers = 15;
var result = Array.isArray(numbers);
console.log(result);
//Ex4: Folositi o metoda pe arrayuri avand in vedere variabila de mai jos, sa obtinem rezultatul "one and two and three and four and five" 
// fara sa modificati variabila initiala
var numbers = ['one', 'two', 'three', 'four', 'five'];
var result = numbers.join(' and ');
console.log(result);

//Ex5: Adaugati 2 elemente noi in arrayul de mai jos
var cars = ['Tesla', 'Dacia'];
cars.push('Hyundai', 'Mercedes');
console.log(cars);

//Ex6: Avand rezultatul de la exercitiul anterior, scoateti ultimul element intrat.
var cars = ['Tesla', 'Dacia', 'Hyundai', 'Mercedes'];
cars.pop();
console.log(cars);

//Ex7: Avand rezultatul exercitiului anterior, adaugati elementul 'Dodge' la inceputul arrayului
var cars = ['Tesla', 'Dacia', 'Hyundai'];
cars.unshift('Dodge');
console.log(cars);

//Ex8: Avand rezultatul exercitiului anterior, inversati ordinea elementelor din array
var cars = ["Dodge", "Tesla", "Dacia", "Hyundai"];
cars.reverse();
console.log(cars);

//Ex9: Avand in vedere rezultatul anterior Folositi o metoda pe arrayuri care sa inlocuiasca incepand de la elementul 'Tesla' si sa adauge alte 2 elemente noi - splice();
var cars = ["Dodge", "Dacia", "Tesla", "Hyundai"];
cars.splice(2,1,'Ford', 'Honda');
console.log(cars);

//Ex10: Sortati urmatorul array de la mic la mare si de la mare la mic 
var arrayNumbers = [1, 5, 20 ,30, 100];
arrayNumbers.sort(function(a, b) {
            return b - a;
 });
console.log(arrayNumbers);                            
                              
arrayNumbers.sort(function(a, b) {
            return a - b;
});
console.log(arrayNumbers);

//Ex11 : Aveti urmatorul array - folositi o functie care sa ia arrayul ca argument si sa-l returneze ordonat
var fruitsArray = ["Apple", "Lemon", "Banana", "Orange", "Bere", "Mici"];
fruitsArray.sort();
console.log(fruitsArray);

// PRACTICE: Objects and arrays

// Ex1
// Creati un obiect "car"
// Adaugati proprietatea name si valoarea Tesla
// Adaugat proprietatea wheels si valoarea 4
// Schimbati valoarea name sa fie Mercedes
// Stergeti proprietatea name
var car = {
    name: 'Tesla',
    wheels: 4,
  }
  car.name = 'Mercedes';
  console.log(car);
  delete car.name;
  console.log(car);
  
  //Ex2
  // Creati un obiect cu 4 proprietati
  // Stocati "key"-urile intr-o variabila noua
  // intr-o alta variabila vreau sa am toate key-urile cu litere mari
  // Stocati valorile intr-o variabila noua
  // intr-o alta variabila vreau sa am toate valorile cu litere mici
  // vreau la final sa ma rezultatul un singur string care sa contina o fraza de genul "proprietatea1 proprietatea2 proprietatea3 proprietatea4 reprezinta ceva"
  var flower = {
    name: 'Tulip',
    smell: 'fresh',
    color: 'white',
    petals: 5,
    saySomethingAboutFlower: function () {
       console.log(this.name + ' ' + this.smell + ' ' + this.color + ' ' + this.petals + ' ' + 'represents flower') 
    }
  };
  var flowerKeys = Object.keys(flower);
  console.log(flowerKeys);
  var flowerValues = Object.values(flower);
  var keys = Object.keys(flower);
  var keysLength = keys.length;
  console.log(keysLength);
  for(i=1;i<=keysLength;i++) {
    console.log(flower.i);  
  }
  console.log(flowerValues);
  flower.saySomethingAboutFlower();
  
  //Ex3
  // Creati un obiect  cu 3 proprietati si una dintre ele sa reprezinte o  metoda
  // Metoda din obiect vreau sa returneze sau sa printeze (console.log()) prima valoare impreuna cu a doua valoare.
  var letters = {
    name: 'a',
    name2: 'b',
    print: function () {
      console.log(this.name + ' ' + this.name2) 
    }
  };
  letters.print();
  
  //Ex4 
  // Creati un obiect cu cateva proprietati
  // "Copiati" obiectul printr-o metoda specifica obiectelor(vedeti pe google) si stocatil intr-o alta variabila
  // Pe obiectul nou adaugam 2 noi proprietati
  // Avem obiectul de mai jos, folosind o metoda pe obiecte faceti "merge" intre cele 2 obiecte si salvati-l sub un nume nou.
  myHouse = { 
    rooms: 3,
    zone: "Bucium",
    animals: 1
  };
  console.log(myHouse);
  
  var house = myHouse;
  console.log(house);
  house.bathrooms = 2;
  house.garage = 1;
  console.log(house);
  var object = {...myHouse, ...house };
  console.log(object);
  
  // Ex5 
  // Creati un obiect care sa contina un alt obiect in interorul lui cu 2 proprietati
  // Accesati proprietatile acelui obiect si stocati key-le intr-o variabila separata.
  // transformati arrayul intr-un singur string care sa rezulte "proprietatea1 si proprietatea2 apartin obiectului x"
  var flowers = {
    color: 'red',
    petals: 10,
    newFlowers: {name: "Tulip", smell: "sweet",
                print: function () {
                  console.log(this.name + " si " + this.smell + " apartin obiectului newFlowers");
                  }
                },
  };
  flowers.newFlowers.print();
  
  var newFlowersKeys = Object.keys(flowers.newFlowers);
  console.log(newFlowersKeys);
  
  
  //Ex6
  // Avem obiectul : 
  myObject = {
  name: "John",
  surname: "Applegate",
  sort: function() {
      if (this.name > this.surname) {
        return this.surname + ' ' + this.name;
      } else {
        return this.name + ' ' + this.surname;
      }
    }
  }
  console.log(myObject.sort());
  //Adaugati o metoda care sa sorteze cele 2 valori ale numelui.
  
  //Ex7 
  //Faceti o functie constructor
  // Cu functia constructor creati 3 obiecte cu valori diferite
  // Pentru toate valorile din acele obiecte transformatile in litere mari.
  function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  var myBFF = new Person("Ouatu", "Sandra", 25, "brown");
  var myFiance = new Person("Bechea", "Andrei", 24, "blue");
  var myDog = new Person("Dariescu", "Sasha", 8, "brown");
  
  console.log(myBFF);
  console.log(myFiance);
  console.log(myDog);
  