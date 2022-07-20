const fibonacci = function(input) {
    let num = parseInt(input);
    if (num < 0) return 'OOPS';

    //Fn =(Φ**n - (1-Φ)**n)/√5
    let goldenRatio = 1.618034;
    return Math.floor((goldenRatio ** num - (1 - goldenRatio) ** num) / Math.sqrt(5));
};

// Do not edit below this line
module.exports = fibonacci;
