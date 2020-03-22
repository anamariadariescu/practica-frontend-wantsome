function greatestNrBetween(a, b) {
    if (a>=b) {
        return a;
    }

    return b;
}

greatestNrBetween(5,10);

// 
var helloWorldInLang = function(language) {
    if(a === "en") {
        console.log("Heloo world");
    } else if (a === "es") {
        console.log("Holla");
    } else if (a === "de") {
        console.log("Deutsch");
    } else {
        console.log("Hello world");
    }
}
    console.log(helloWorldInLang("en"));

    // 3
    var pluralizeWord = function(a, b) {
        if (b > 1) {
            return b +  ' ' + a + 's';
        } else {
            return b + ' ' + a;
        }
    }

    console.log(pluralizeWord('cat', 5));