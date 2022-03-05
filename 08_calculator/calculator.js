const add = function(x, y) {
    return x + y
};

const subtract = function(x, y) {
    return x - y
};

const sum = function(arr) {
    let result = 0;
    for(let i = 0; i < arr.length; i++){
      result += arr[i]
    }
    return result
};

const multiply = function(arr) {
    let result = 1;
    for(let i = 0; i < arr.length; i++){
      result *= arr[i]
    }
    return result
};

const power = function(num, pow) {
    let result = 1;
    for(let i = 0; i < pow; i++){
      result *= num;
    }
    return result
};

const factorial = function(num) {
    if(num == 0 || num == 1){
      return 1
    }
    let result = num;
    for(let i = num - 1; i >= 1; i--){
      result *= i;
    }
    return result
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
