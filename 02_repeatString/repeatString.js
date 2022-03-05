const repeatString = function(word, num) {
    let repeatWord = word;
    if(num == 0){
        return ''
    }
    if(num < 0){
        return 'ERROR';
    }
    if(word == ''){
        return ''
    }
    for(let i = 1; i < num; i++){
        repeatWord = repeatWord.concat(word);
    }
    return repeatWord;
};

// Do not edit below this line
module.exports = repeatString;
