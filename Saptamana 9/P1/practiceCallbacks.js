// 1
// acum se printeaza in consola '1' '2' '3' '4' '5' .
// Vrem sa fie ordinea '3' '5' '2' '1' '4'
//hint setTimeout

const func1 = () => {
  setTimeout(() => console.log('1'), 4)
}

const func2 = () => {
  setTimeout(() => console.log('2'), 3)
}

const func3 = () => {
  setTimeout(() => console.log('3'), 1)
}

const func4 = () => {
  setTimeout(() => console.log('4'), 5)
}

const func5 = () => {
  setTimeout(() => console.log('5'), 2)
}


func1();
func2();
func3();
func4();
func5();

// 2
function customMap(array, callback) {
  var arr = [];
  for (var index in array) {
    arr.push(callback(array[index]));
  }
  return arr;
}
console.log(myMap(randomArray, increment));  // Implement the function named print so that thos console.log would display the result [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ] in the console
console.log(myMap(randomArray, double));  // Implement the function named double so that thos console.log would display the result [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ]
console.log(myMap(randomArray, square));  // Implement the function named square so that thos console.log would display the result [ 1, 4, 9, 16, 25, 36, 49, 64, 81 ]


var randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const increment = (value) => {
  return value + 1;
}
console.log(customMap(randomArray, increment));

const double = (value) => {
  return value * 2;
}
console.log(customMap(randomArray, double));

const square = (value) => {
  return value * value;
}
console.log(customMap(randomArray, square));

// 3
// This function will go over every element in an array one by one, calling the
// callback with each item, adding the element to a new array only if
// the callback returns true, and finally returning the new array.

const oddNumbers = (value) => {
  if (value % 2 === 1) {
    return true;
  } else {
    return false;
  }
}


const evenNumbers = (value) => {
  if (value % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const divideBy3 = (value) => {
  if (value % 3 === 0) {
    return true;
  } else {
    return false;
  }
}

const divideBy4 = (value) => {
  if (value % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

const without0 = (value) => {
  if (value > 0) {
    return true;
  } else {
    return false;
  }
}


var filter = function (array, callback) {
  var filteredArray = [];
  for (var i = 0; i < array.length; i++) {
    // var ____ = ____[____];
    if (callback(array[i])) {
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
};
console.log(filter([0, 1, 2, 3, 4, 5, 6], oddNumbers));
console.log(filter([0, 1, 2, 3, 4, 5, 6], evenNumbers));
console.log(filter([0, 1, 2, 3, 4, 5, 6], divideBy3));
console.log(filter([0, 1, 2, 3, 4, 5, 6], divideBy4));
console.log(filter([0, 1, 2, 3, 4, 5, 6], without0));

// 4
// Write a function named multipleCallbacks that accepts 3 arguments:
// 	- an object containing a key name status that can have 2 different values: success or error
//   - a function that should be called if the value of the status key is success
//   - a function that should be called if the value of the status key is error

const succes = () => {
  console.log(true);
}

const error = () => {
  console.log(false);
}

const multipleCallbacks = (object, funcSucces, funcError) => {
  if (object.status === 'succes') {
    funcSucces();
  } else {
    funcError();
  }
}

multipleCallbacks({ status: 'succes' }, succes, error);
multipleCallbacks({ status: 'error' }, succes, error);