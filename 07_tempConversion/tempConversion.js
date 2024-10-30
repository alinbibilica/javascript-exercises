const convertToCelsius = function(value) {

  const celcius = (value - 32)*5/9;
  
  let result = celcius.toFixed(1);

    return  Number(result);


};

const convertToFahrenheit = function(value) {
  const fahrenheit = (value * 1.8)+32;
  
  let result = fahrenheit.toFixed(1);

    return  Number(result);

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
