//Selectati fiecare element cu metodele ajutatoare
// primul dupa id - getElementById
//al doilea si al 3lea cu getElementsByClassName
//cele 2 section cu getElementByTagName
//etc
// La fiecare selectie vom schimba background color-ul cu o culoare diferita pentru fiecare metoda


const testId = documemt.getElementByYd('test');
testId.style.backgroungcolor = 'green';
console.log(testId);

const testClasses = document.getElementsByClassName('test');
for(i=0; i < testClasses.length; i++) {
  testClasses[i].style.backgroundcolor = 'red';
}
console.log(testClasses);

const testTagName = document.getElementsByTagName('section');
for(i = 0; i < testTagName.length; i++) {
  testTagName[i].style.backgroundcolor = 'blue';
}
console.log(testTagName);

const testQuery = document.querySelector('#test-query');
testQuery.style.backgroundcolor = 'white';
console.log(testQuery);

const testQueryAll = document.querySelectorAll('.test-query-all');
for( i = 0; i < testQueryAll.length; i++) {
  testQueryAll[i].style.backgroundcolor = 'pink'
}
console.log(testQueryAll); 

