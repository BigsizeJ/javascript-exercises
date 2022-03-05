const removeFromArray = function(arr, farg, sarg, thrdarg, fourtharg) {
    
   

    for(let i = arr.length - 1; i >= 0; i--){
        if(arr[i] === farg){
            arr.splice(i, 1);
        }
        if(arr[i] === sarg){
            arr.splice(i, 1)
        }
        if(arr[i] === thrdarg){
            arr.splice(i, 1)
        }
        if(arr[i] === fourtharg){
            arr.splice(i, 1)
        }
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
