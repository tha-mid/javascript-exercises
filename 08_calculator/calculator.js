const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
  return numbers.reduce((total, num) => total + num, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((total, num) => total * num, 1);

};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(a) {
  let total = 1;
  for (let i = 1; i <= a; i++) {
    total *= i; 
  }
  return total;
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
