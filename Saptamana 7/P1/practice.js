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