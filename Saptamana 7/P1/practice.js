// 1

var numbers = function (count) {
    for( i = 0; i < count; i++ ) {
      console.log("Sunt la iteratia numarul " + i);
    }
  };
  numbers(3); 
  
  var numbers2 = function (count) {
    var i = 0;
    while (i < count) {
      console.log(" while Sunt la iteratia numarul " + i);
      i++;
    }
  }
  
  numbers2(4);

  // 2
  var flowers = ['roses', 'peonies', 'tulip']
    
  for (i=0; i < flowers.length; i++) {
    console.log(flowers[i]);
  }

  var flowers = ['roses', 'peonies', 'tulip']

  var i = 0;
  while (i < flowers.length) {
    console.log(flowers[i]);
    i++
  } 
  flowers[i];

  // 3
  var userDetails = {name:'Ana', job:'frontendDev', age: 25};
  for (var key in userDetails) {
    console.log(userDetails[key]);
  }

  // 4.1
var numbers = function (a) {
  for ( i = 0; i <= a; i+=100 ) {
    console.log(i);
  }
}
numbers(1000);

// 4.2
var numbers = function (a) {
  for ( i = 1; i <= a; i*=2 ) {
    console.log(i);
  }
}
numbers(128);
 
// 4.3
var numbers = function (a) {
  for ( i = 0; i <= a; i+=2 ) {
    console.log(i);
  }
}
numbers(10);

// 4.4
var numbers = function (a) {
  for ( i = 3; i <= a ; i+=3 ) {
    console.log(i);
  }
}
numbers(15);

// 4.5
var numbers = function (a) {
  for ( i = a; i <= a; i--) {
    if ( i >= 0 ){
       console.log(i);
    }
  }
}
numbers(9);

// 4.6
var result = "";
for( i = 1; i <= 4; i++ ) {
  result = result + " " + i + " " + i + " " + i;
};
console.log(result);

// 4.7
var result = "0 1 2 3 4";
for( i = 0; i < 1; i++ ) {
  result = result + " " + result + " " + result;
};
console.log(result);

// 5
var computeSumOfArrayElements = function(arr) {
  var sum = 0;
  var i = 0;
  while( i < arr.length ) {
    sum = sum + arr[i];
    i++
  }
  console.log(sum);
};
computeSumOfArrayElements([1,2,3,4]);
