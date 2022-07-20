const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
  return nums.reduce((prev, current) => prev + current, 0);
};

const multiply = function(nums) {
  return nums.reduce((prev, current) => prev * current, 1);
};

const power = function(num, power) {
	return Math.pow(num, power)
};

const factorial = function(num) {
  let result = 1;

  for(let i = 1; i <= num; i++){
    result = result * i;
  }
  return result;
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
