const convertToCelsius = function(temp) {
    const conversion = ((temp - 32) * (5/9));
    const rounding = Math.round(conversion * 10) / 10;
    return rounding
};

const convertToFahrenheit = function(temp) {
    const conversion = (temp * (9/5) + 32)
    const rounding = Math.round(conversion * 10) / 10;
    return rounding
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
