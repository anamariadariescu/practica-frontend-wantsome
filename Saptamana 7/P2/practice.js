// 1
var myFunction = function(email) {
    var res = email.split("@");
    var res2 = res[0].split(".");
    console.log(res);
    console.log(res2);
    console.log(res2[0] + "...@" + res[1]);
  }
  
  myFunction("ovidiu.grigoras@test.com");
  
  // 2
  var myFunction = function(string) {
    var res = string.split(" ");
    console.log(res);
    for (i=0; i<res.length; i++) {
      res[i] = res[i].charAt(0).toUpperCase() + res[i].slice(1);
    }
  
    console.log(res.join(" "));
  
    
  
  }
  myFunction("i am superman");

  // 3
  function word(value) {
    var myArray = value.split('');
    i=0;
    while ( i < myArray.length) {
      if ( myArray[i] == myArray[i].toUpperCase()) {
          myArray[i] = myArray[i].toLowerCase();
      } else {
          myArray[i] = myArray[i].toUpperCase();
      };
      i++;
    }
    return myArray.join('');
  };
  console.log(word('abDEfGhI'));

  // 4
  function repeatWords(word, number) {
    var result = '';
    for( i = 1; i <= number; i++) { 
      result = result + word;
    }
    console.log(result);
  }
  repeatWords('Wantsome',5);

  // 5
  function Palindrome(value) {
    var checkPalindrome = value.split('');
      if( checkPalindrome.reverse().join('') === value ) {
          return value + " is palindrome";
    } else {
          return "it is not palindrome";
    }
  };

  console.log(Palindrome('ana'));

  // 6
  var myArray = [
    [1, 5, 9],
    [6, 15, 8],
    [19, 4, 10]
  ];

  function highNumber(arrayNumbers) {
    for( i = 0; i <= arrayNumbers.length; i++) {
      var aux = 0;
      for( j = 0; j <= arrayNumbers[i].length; j++) {
        if( arrayNumbers[i][j] >= aux ) {
          aux=arrayNumbers[i][j];
        }
        
      }
        arrayNumbers[i]=aux;
        console.log(arrayNumbers);
    }
  }

  highNumber(myArray);

  // 7
  function myWords(word) {
    var wordReverse = word.split('');
    console.log(wordReverse.reverse().join(''));
    };

  myWords('bla');

  // 8
  function multiplication(a) {

    var result = 1
      for( i = 0; i <= a; i++ ) {
        result = result * i;
      }
    }
    console.log(5);