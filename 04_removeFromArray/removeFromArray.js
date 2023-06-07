const removeFromArray = function(array, ...items) {
    ret_arr = [];
    array.forEach(element => {
        if (!items.includes(element))
            ret_arr.push(element);
    });
    return ret_arr;
};

// Do not edit below this line
module.exports = removeFromArray;
