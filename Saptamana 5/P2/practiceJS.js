// 1
var myFunction = function(a) {
    if (typeof a === 'string') {

        return true;  
    }

    return false;   
}

var result = myFunction("w3resource");
console.log(result);

var result2 = myFunction([1, 2, 4, 0]);
console.log(result2);

// 2
var isEmpty = function(x) {
    if (x === "") {

        return true;
    }

    return false;
}

var result = isEmpty('');
console.log(result);

var result2 = isEmpty('abc');
console.log(result2);

// 3
var transformToArray = function(z) {
    var array = z.split(" ");
    return array;
}

var result = transformToArray("Robin Singh");
console.log(result);

// 5
var bigLetter = function(y) {
    return y.charAt(0).toUpperCase() + y.slice(1);
}

var result = bigLetter("js string excercise");
console.log(result);

// 6
var truncate_string = function(a) {
    return a.substr(0, 4);
}

var result = truncate_string("Robin Singh",4);
console.log(result);

// 7
var Uppercase = function(q) {
    if (q.charAt(1) == q.charAt(1).toUpperCase()) {
        return true;
    }
    return false;
}

var result = Uppercase('Js STRING EXERCISES');
console.log(result);


