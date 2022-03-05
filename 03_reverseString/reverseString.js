const reverseString = function(word) {
    let char = '';
    
    for(let i = word.length - 1; i >= 0; i--){
        char += word[i]
    }
    return char;
};

// Do not edit below this line
module.exports = reverseString;
