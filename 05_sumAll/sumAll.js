const sumAll = function(start, end) {
    if(start < 0 || end <0 ||
        !Number.isInteger(start) || !Number.isInteger(end))
        return 'ERROR';

    
    if(start > end) {
        const tmp = start;
        start = end;
        end = tmp;
    }
    sum = 0
    for (let index = start; index <= end; index++) {
        sum += index;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
