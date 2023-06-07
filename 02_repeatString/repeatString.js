const repeatString = function(word, num) {
    if(num < 0)
        return 'ERROR';
    let ret = '';
    for (let i = 0; i < num; i++) {
        ret += word;
    }
    return ret;
};

// Do not edit below this line
module.exports = repeatString;
