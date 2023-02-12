const fibonacci = function(num) {

    if (num < 0) return 'OOPS';
    if (num === 0) return 0;

    let fibonacci = [1, 1];

    for (let i = 3; i <= num; i++) {
        fibonacci.push(fibonacci[fibonacci.length-1] + fibonacci[fibonacci.length - 2]);
    }

    return fibonacci[fibonacci.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
