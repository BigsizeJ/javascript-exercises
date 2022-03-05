const ftoc = function(fahrenheit) {
  let toCelcius = ((fahrenheit-32)*5)/9
  return parseFloat(toCelcius.toFixed(1))
};

const ctof = function(celcius) {
  let toFahrenheit = ((celcius*9)/5)+32
  return parseFloat(toFahrenheit.toFixed(1))
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
