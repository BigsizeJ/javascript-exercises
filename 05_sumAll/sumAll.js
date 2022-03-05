const sumAll = function(startingPoint, endPoint) {
    let sum = 0;
    let x; 
    let y;
    if(typeof(startingPoint) != 'number' || typeof(endPoint) != 'number'){
        return 'ERROR'
    }
    if(startingPoint < 0 || endPoint < 0){
        return 'ERROR'
    }
    if(startingPoint > endPoint){
        x = endPoint
        y = startingPoint
    }
    if(startingPoint < endPoint){
        x = startingPoint
        y = endPoint
    }

    for(let i = x; i <= y; i++){
        sum += i;
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
