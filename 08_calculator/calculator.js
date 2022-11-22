const add = (num1,num2) => num1 + num2;

const subtract = (num1,num2) => num1 - num2;

const sum = function(...args) {
  let arr = Array.from(args[0]);
  return arr.reduce((totalValue,item) => totalValue += item, 0); 
	
};

const multiply = function(...args) {
  let arr = Array.from(args[0]);
  return arr.reduce((totalValue,item) => totalValue * item, 1); 
};

const power = (num1,num2) => num1 ** num2;

const factorial = function(num) {
  if(num <= 1){
    return 1;
  }
  return num * factorial(num-1);
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
