const repeatString = function(string, num) {
    let chosenString = "";
    for (i = 0; i < num; i++) {
        chosenString += string;
    }
    if (num < 0) {
        return 'ERROR'
    }
    return chosenString;
};

// Do not edit below this line
module.exports = repeatString;
