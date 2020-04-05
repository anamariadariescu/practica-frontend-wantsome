//Ex1
//Vreau sa am o functie care sa-mi calculeze suma dintre 2 numere daca ele sunt diferite iar daca sunt egale sa-mi imulteasca suma lor cu 5
//ex myFunction(10, 5) - output 15 // myFunction(10,10) - output 100

const numbers = (a, b) => {
    if( a !== b ) {
      return a + b;
    } else {
      return (a+b) * 5;
    }
  }
  console.log(numbers(10, 5));
  console.log(numbers(10, 10));

//Ex2
//Vreau sa am o functie care sa returneze true daca ambele numere sunt egale cu 30 sau daca suma lor este egala cu 30
//ex testFunction(30, 30) - true 
//testFunction(15,15) - true
//testFunction(10, 15) - false

const numbers = (a, b) => {
    if( a === 30 && b === 30 ) {
       return true;
    }
    else if( a + b === 30 ) {
      return true;
    }
    else {
      return false;
    }
  }
  console.log(numbers(30, 30));
  console.log(numbers(15, 15));
  console.log(numbers(10, 10));

//Ex3
//Vreau sa am o functie care sa verifice un string si daca stringul incepe cu 'JS' sa returneze acel string iar daca nu incepe sa-l adauge
//checkString('JSisAwsome') - JSisAwsome
//checkString('isEasy') - JSisEasy
//checkString(null) - JS

const myFunction = (a) => {
  
    if(a.indexOf('JS') === 0) {
      return a;
    } else {
      return 'JS' + a;
    }
  }
  console.log(myFunction('JSisAwesome'));

//Ex4
//Scrieti o functie care sa scoata literele/cifrele duplicate dintr-un string/numbar
//removeDuplicates('aabcdeef') - 'abcdef'
//removeDuplicates(122334) - 1234

const removeDuplicates = (aString) => {
    let noDuplicates = '';
    for(i = 0; i < aString.length; i++) {
      if(noDuplicates.indexOf(aString[i]) !== -1) continue;
      noDuplicates += aString[i];
    }
    return noDuplicates;
   }
   console.log(removeDuplicates('aabcsssd'));

//Ex5
// Gasiti cel mai lung string intr-o fraza
//findLongestString('Wantsome is Awsomeeee today') - output 'Awsomeeee'

const bigWord = (a) => {
  let word = a.split(' ');
  let maxWord = 0;
  let finalWord = '';
  for(i=0; i < word.length; i++) {
    if( maxWord <= word[i].length) {
      maxWord += word[i].length;
      finalWord = word[i];
    }
  }
  return finalWord;
}
console.log(bigWord('Wantsome is Awesomeeee today'));

//Ex6
//Scrieti o functie care sa aiba output-ul asta
// *  
// * *  
// * * *  
// * * * *  
// * * * * *  

const star = () => {
  for(i=1; i<=5; i++) {
    switch(i) {
      case 1:
        console.log('*');
        break;
      case 2:
        console.log('* *');
        break;
      case 3:
        console.log('* * *');
        break;
      case 4:
        console.log('* * * *');
        break;
      case 5:
        console.log('* * * * *');
        break;      
    }
  }
};
star(5);

//ex7
const negativeNumbers = [];

function extractNegativeNumbers(numbers) {
    // append any negative numbers found in the numbers array 
    // into the negativeNumbers array constant variable above
 
}
extractNegativeNumbers([1,2,-5,4,-6])

const extractNegativeNumbers = (numbers) => {
  const negativeNumbers = [];
  for(i=0; i<=numbers.length; i++) {
    if(numbers[i]<0) {
      negativeNumbers.push(numbers[i]);
    }
  }
  console.log(negativeNumbers);
}
extractNegativeNumbers([1,2,-5,4,-6])

//ex8
//Avem o functie cu 2 numere si un operator, vrem sa obtinem rezultatul in functie de operator - "add", "substract", "multiply", "divide"
//ex calculate(2, 5, "add") => 7
//calculate(10, 8, "substract") => 2

const calculate = (a, b, c) => {
  if(c === 'add') {
    return a+b ;
  } else if(c === 'substract') {
    return(a-b);
  } else if(c === 'multiply') {
    return(a*b);
  } else {
    return(a/b);
  }
}

console.log(calculate(10, 5, 'add'));
console.log(calculate(20, 10, 'substract'));
console.log(calculate(25, 2, 'multiply'));
console.log(calculate(48, 4, 'divide'));

//Ex9
// Vreau sa am o functie care sa verifice daca numarul dat este divizibl cu 3, 5 sau ambele si sa printeze "THREE", "FIVE", "BOTH" iar daca nu este cu niciunul sa returneze numarul
// isDiv(15) => "BOTH"
// isDiv(9)=> "THREE"
// isDiv(7)=> 7

const divide = (a) => {
  if(a % 3 === 0 && a % 5 === 0) {
    console.log('BOTH');
  }
  if(a % 3 === 0) {
    console.log('THREE');
  }
  if(a % 5 === 0) {
    console.log('FIVE');
  } else {
    console.log(a);
  }
}
divide(30);
divide(50);
divide(15);


//Master exercises
//Ex9 
// Vreau sa pot afisa data si ziua sub urmatorul format:
// Azi este : Luni. 
// Ora este : 20 PM : 30 : 38

//ex10
// ATM-urile iti dau voie sa folosesti pin-uri din 4 sau 6 cifre. Faceti o functie care sa returneze true daca pin-ul e corect si false daca e gresit
// validPin("1234") => true
// validPin("12345") => false
// validPin("z23f") => false

const validPin = (a) => {
  if(a.length === 4 || a.length === 6) {
    if (/^[0-9]+$/.test(a) === true) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

console.log(validPin('1234'));
console.log(validPin('12345'));
console.log(/^[0-9]+$/.test('z23f'));

//ex11 
//Folosind regex vreau sa scot toate vocalele dintr-un string
// removeVowels("Hey I am developer") => "Hy m dvlpr"

//ex12
//Vreau sa am o functie care sa verifice daca un numar este patrat
// isSquareNumber(-1) => false
// isSquareNumber(25) => true
// isSquareNumber(3) => false


//ex13
// Vreau sa am o functie care sa verifice daca un cuvant este o anagrama- daca toate literele din primul string se regasesc in al doilea
// isAnagram("School master", "The class room") => true
// isAnagram("silent", "listen") => true