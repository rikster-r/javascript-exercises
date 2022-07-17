const removeFromArray = function(array, ...args) {
    let returnArray = array;
    for (let elem of args) {
        returnArray = returnArray.filter(element => element !== elem);
    }
    return returnArray;
};

// Do not edit below this line
module.exports = removeFromArray;
