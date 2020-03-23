
    // 3
    var pluralizeWord = function(a, b) {
        if (b > 1) {
            return b +  ' ' + a + 's';
        } else {
            return b + ' ' + a;
        }
    }

    console.log(pluralizeWord('cat', 5));

    // PRACTICE: Functions and conditionals


  // 1
var  greatestNrBetween = function (a, b) {
    if (a < b) {
      return "Numarul mai mare dintre " + a + " si " + b + " este " + b;
    } else if(a > b) {
      return "Numarul mai mare dintre " + a + " si " + b + " este " + a;
    }
  };
  
   console.log(greatestNrBetween(5, 10));
   console.log(greatestNrBetween(10, 5));
   
  // 2
  var  helloWorldInLang = function (a) {
    if ( a === 'en' ) {
      return 'Hello';
    }
    if ( a === 'es' ) {
      return 'Holla';
    } else if ( a === 'de' ) {
      return 'Bonjour';
    } else {
      return 'Hello';
    }
  };
  
  console.log(helloWorldInLang('en'));
  console.log(helloWorldInLang('es'));
  console.log(helloWorldInLang('de'));
  console.log(helloWorldInLang('ge'));

  // 3
  function pluralizeWord (subst, nr) {
    if(nr>1) {
      if( subst === 'goose' ) {
        
        return nr + ' ' + 'geese';         
      } else if( subst === 'sheep' ) {
  
        return nr + ' ' + 'sheep';
      }
        return nr + ' ' + subst + 's';
    } else {
      return nr + ' ' + subst;
    }
  };
  
  console.log(pluralizeWord('goose', 5));
  console.log(pluralizeWord('sheep', 5));

  // 4
var salary = function (a) {
    if ( a <= 30000 ) {
      return 'Pentru un venit anual de ' + a + ', aveti de platit taxe in valoare de 0';
    } if ( a >= 50000 && a <= 99000 ) {
      return 'Pentru un venit anual de ' + a + ', aveti de platit taxe in valoare de ' + a * 35 / 100;
    } else if ( a >= 100000 ) {
      return 'Pentru un venit anual de ' + a + ', aveti de platit taxe in valoare de ' + a * 40 / 100;
    }
  };
  
  console.log(salary(29000));
  console.log(salary(60000));

  // 5
function number (points) {
    if (points > 90) {
      return 'AA';
    } 
    if (points > 80 && points <= 90) {
      return 'AB';
    } 
    if (points > 70 && points <= 80) {
      return 'BB';
    } 
    if (points > 60 && points <= 70) {
      return 'BC';
    } 
    if (points > 50 && points <= 60) {
      return 'CC';
    } 
    if (points > 40 && points <= 50) {
      return 'CD';
    } 
    if (points > 30 && points <= 40) {
      return 'DD';
    } 
    if (points <= 30) {
      return 'FF';
    }
  };
  
  console.log(number(91));
  console.log(number(81));
  console.log(number(71));

  function number (points) {
    if (points > 90) {
      return 'AA';
    } 
    if (points > 80 && points <= 90) {
      return 'AB';
    } else if (points > 70 && points <= 80) {
      return 'BB';
    } else if (points > 60 && points <= 70) {
      return 'BC';
    } else if (points > 50 && points <= 60) {
      return 'CC';
    } else if (points > 40 && points <= 50) {
      return 'CD';
    } else if (points > 30 && points <= 40) {
      return 'DD';
    } else if (points <= 30) {
      return 'FF';
    }
  };
  
  console.log(number(91));
  console.log(number(81));
  console.log(number(71));