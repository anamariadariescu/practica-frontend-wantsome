// 1

// declar functia de tip evenOrOdd
// prima data am folosit for, iar a 2'a varianta este cea cu while
// cu ajutorul instructiunilor lui if  am facut diferenta dintre numerele pare si impare, iar intr un final am afisat "i este impar||par"

var evenOrOdd = function() {
    for ( i = 0; i <= 20; i++ ) {
      if (i % 2 == 0) {
        console.log(i + ' este numar par');
      } else {
        console.log(i + ' este numar impar');
      }
    }
  }
    
  evenOrOdd();
  
  
  var evenOrOdd2 = function() {
    var i = 0;
    while ( i <= 20 ) {
      if( i % 2 == 0 ) {
        console.log(i + " este numar par");
      } else {
        console.log(i + " este numar impar");
      }
      i++;
    }
  }
  
  evenOrOdd2();

  // 2

  // declar functia de tip numbers
  // am folosit instructiunea for pentru a inmulti cu 9 fiecare valoare a lui i de la 0 la 10

var numbers = function() {
    for( i = 0; i <= 10; i++ ) {
      console.log(i + "*9=" + i*9 );
    }
  }
  
  numbers();
  
  var numbers = function() {
    var i = 0;
    while (i<=10) {
      console.log(i + "*9=" + i*9);
      i++
    }
  }
  numbers();