//  divisors to 10

function divisors(n) {
    const divisornTo10 = [];
    for (i = 0; i <= n; i++) {
        if (i % 10 === 0) {
            divisornTo10.push(i);
        }
    }
    console.log(divisornTo10);
}
divisors(100);

//   check if a word is palindrome

function checkPalindrom(str) {
    return str.toLowerCase().split('').reverse('').join('');
}
console.log(checkPalindrom('Ana'));

//   3

for (i = 1; i <= 5; i++) {
    var result = "";
    if (i === 1) {
        result = result + '1';
    }
    if (i === 2) {
        result = result + '22';
    }
    if (i === 3) {
        result = result + '333';
    }
    if (i === 4) {
        result = result + '4444';
    }
    if (i === 5) {
        result = result + '55555'
    }
    console.log(result);

    // check if a number is perfect square

    var isSquare = function (n) {
        return Math.sqrt(n) % 1 === 0;
    };
    console.log(isSquare(9))

    // sum of numbers

    var computeSumOfArrayElements = function (arr) {
        var sum = 0;
        var i = 0;
        while (i < arr.length) {
            sum = sum + arr[i];
            i++
        }
        console.log(sum);
    };
    computeSumOfArrayElements([1, 2, 3, 4, 5]);