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