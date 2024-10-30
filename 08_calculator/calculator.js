const add = function(sum1, sum2) {
  return sum1 + sum2;
	
};

const subtract = function(sub1, sub2) {
  return sub1 - sub2;
	
};

const sum = function(...values) {

  let total = 0;

  for( const item in values){
    total += values;
  }

  let result = Number(total);

	return Number(result);
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
