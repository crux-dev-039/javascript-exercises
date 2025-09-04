const sumAll = function(a, b) {
    let sum = 0;
    if (a < 0 || b < 0) {
        return "ERROR";
    }
    else if (a % 1 !== 0 || b % 1 !== 0) {
        return "ERROR";
    }
    else if (a === a.toString() || b === b.toString()) {
        return "ERROR";
    }
    else if (a === Array.isArray(a) || b === Array.isArray(b)) {
        return "ERROR";
    }
    else if (b > a) {
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

console.log(sumAll(1, 4));

//  || a === a.toString || 

// Do not edit below this line
module.exports = sumAll;
