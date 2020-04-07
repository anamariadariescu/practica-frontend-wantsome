/*
1. Implementati o functie care accepta ca parametru o valoare numerica si returneaza suma numerelor de la 1 pana la valoarea specificata
*/
const sumOfNumbers = (a) => {
    let result = 0;
    for(i=1; i<=a; i++) {
      result = result + i;
    }
    console.log(result);
  };
  sumOfNumbers(5);

/*
2. Implementati o functie care accepta ca parametru un string si returneaza cel mai lung cuvant din acel string.
*/
const myString = (a) => {
    let word = a.split(' ');
    let maxWord = 0;
    let result = '';
    for(i=0; i<word.length; i++) {
      if( maxWord <= word[i].length ) {
          maxWord = word[i].length;
          result = word[i];
      }
    }
    return(result);
  }
  console.log(myString('Ana are mere'));

/*
3. Implementati o functie care accepta ca parametru un string si ii face 'reverse'
*/
const reverseString = (str) => {
    let splitString = str.split('');
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join('');
    return joinArray;
  }
  console.log(reverseString('wantsome'));

/*
4. Implementati o functie care accepta ca parametru un string si inlocuieste fiecare litera din acesta cu urmatoarea litera din alfabet
*/
const nextLetter = (a) => {
    var b = '';
    for(i=0; i<a.length; i++) {
      b += String.fromCharCode(a.charCodeAt(i) + 1);
    }
    console.log(b);
  }
  nextLetter('Ana');
  
/*
5. Implementati o functie convertToTime care accepta ca parametru o valoare numerica si o converteste la numarul de ore si minute corespunzatoare.
Exemplu: input: 64  ->  output: 1:4
*/

/*
6. Implementati o functie care accepta ca parametru un string si returneaza string-ul cu toate literele ordonate alfabetic
*/
const sortString = (str) => {
  let arr = str.split('');
  let sorted = arr.sort();
  return sorted.join('');
}
console.log(sortString('abracadabra'));

/*
7. Implementati o functie care accepta ca parametru un string si verifica daca inainte si dupa fiecare litera din cadrul sau se afla caracterul '+'
Exemplu: input: "+a+b+c+"   ->   output: true
Exemply: input: "+ab+c+d+"  ->   output: false
*/
const verifyCharacter = (str) => {
  const arr = str.split('+');
  for(i=0; i<arr.length; i++) {
    if(arr[i].length>1) {
      return false;
    }
  }
  return true; 
}

console.log(verifyCharacter('+a+b+c+'));
console.log(verifyCharacter('+ab+c+d+'));