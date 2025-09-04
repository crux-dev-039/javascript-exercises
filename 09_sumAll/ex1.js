const sumAll = function(a, b) {
    let sum = 0;
    if (b > a) {
        for (i = a; i <= b; i++) {
            sum += i;
        }
    return sum;
    }
    else if (a > b) {
        for (i = b; i <= a; i++) {
            sum += i;
        }
    return sum;
    }
};

function hasDecimal(num) {
  return num % 1 !== 0;
}

let a = 5
let b = "5"

console.log(hasDecimal(10));    // false
console.log(hasDecimal(2.5));  // true
console.log(hasDecimal(0));     // false
console.log(b === a.toString())

console.log(Array.isArray([]))

console.log(sumAll(123, 4));