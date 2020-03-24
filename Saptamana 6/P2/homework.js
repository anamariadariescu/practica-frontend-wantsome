// 1
function gender(a) {
    if ( a.charAt(0) === '1' ) {
      return "Persoana verificata este de sexul M";
    } else if ( a.charAt(0) === '2') {
      return "Persoana verificata este de tipul F";
    }
  };
   
  console.log(gender('1102331657454'));
  console.log(gender('2100594274545'));

  // 2
var scores = function (grades) {
    if ( grades > 1 && grades <= 3 ) {
      return "Calificatul corespunzator punctajului " + grades + " este " + "E";
    } else if ( grades >= 3 && grades < 6 ) {
      return "Calificatul corespunzator punctajului " + grades + " este " + "D";
    } else if ( grades > 7 && grades < 8) {
      return "Calificatul corespunzator punctajului " + grades + " este " + "B";
    } else if ( grades === 9 ) {
      return "Calificatul corespunzator punctajului " + grades + " este " + "A";
    } else if ( grades === 10 ) {
      return "Calificatul corespunzator punctajului " + grades + " este " + "A+";
    } 
  };
  
  console.log(scores(2));
  console.log(scores(3));
  console.log(scores(4));
  console.log(scores(10));

  // 3
// switch

var cars = function (mark) {
    switch(mark) {
      case "Hyundai":
        return "Marca " + mark + " se produce in Coreea de Sud";
        break;
      case "Mercedes":
        return "Marca " + mark + " se produce in Germania";
        break;
      case "Ford":
        return "Marca " + mark + " se produce in SUA";
        break;
      case "Jaguar":
        return "Marca " + mark + " se produce in Regatul Unit";
        break;
      case "Toyota":
        return "Marca " + mark + " se produce in Japonia";
        break;
      case "Renault":
        return "Marca " + mark + " se produce in Franta";
        break;
      default:
        return "Marca este necunoscuta";
    }
  };
  
  console.log(cars("Toyota"));
  console.log(cars("Hyundai"));
  console.log(cars("Peugeot"));
  
  // if
  
  var cars2 = function(mark) {
    if ( mark === "Hyundai" ) {
      return "Marca " + mark + " se produce in Coreea de Sud";
    } else if ( mark === "Mercedes" ) {
      return "Marca " + mark + " se produce in Germania";
    } else if ( mark === "Ford" ) {
      return "Marca " + mark + " se produce in SUA";
    } else if ( mark === "Jaguar" ) {
      return "Marca " + mark + " se produce in Regatul Unit";
    } else if ( mark === "Toyota" ) {
      return "Marca " + mark + " se produce in Japonia";
    } else if (mark === "Renault" ) {
      return "Marca " + mark + " se produce in Franta";
    } else {
      return "Marca este necunoscuta";
    }
  };
  
  console.log(cars2("Ford"));
  console.log(cars2("Jaguar"));
  console.log(cars2("Suzuki"));

  // Object Literal

  var cars3 = function(mark) {
    var cars4 = {
      'hyundai': 'Hyundai',
      'mercedes': 'Mercedes',
      'ford': 'Ford',
      'jaguar': 'Jaguar',
      'toyota': 'Toyota',
      'renault': 'Renault',  
    };
      return "Marca " + (cars4["hyundai"]) + " se produce in Coreea de Sud";
      return "Marca " + (cars4["mercedes"]) + " se produce in Germania";
  }
    
    console.log(cars3("hyundai"));
    console.log(cars3("mercedes"));
    console.log(cars3("ford"));