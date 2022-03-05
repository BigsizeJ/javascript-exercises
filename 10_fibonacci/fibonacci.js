const fibonacci = function(index) {
    let fibonacciSequence = [];
    let sum;
    for(let i = 0; i <= index; i++){
        sum = i += i
        fibonacciSequence.push(sum);
    }
    return fibonacciSequence[index]
};

// Do not edit below this line
module.exports = fibonacci;
