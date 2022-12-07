const sumAll = function(val1, val2) {
    let higher = Math.max(val1, val2);
    let lower = Math.min(val1, val2);
    let total = 0;

    if (val1 < 0 || val2 < 0 || !Number.isInteger(val1) || !Number.isInteger(val2)) {
        return 'ERROR';
    }

    for (i = lower; i <= higher; i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
