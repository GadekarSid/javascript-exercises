const sumAll = function(num1,num2) {
    let min = num1;
    let max = num2;
    if(!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
    if(num1 < 0 || num2 < 0) return "ERROR";
    if(num1 > num2){
        min = num2;
        max = num1;
    }
    sum = 0;
    for (let i = min; i < max + 1; i++) {
        sum += i;
      }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
