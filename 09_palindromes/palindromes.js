const palindromes = function (string) {
    let clearedString = string.replace(/[^a-z]/gi, '').toLowerCase();
    let reversedString = clearedString.split('').reverse().join('');
    return clearedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
