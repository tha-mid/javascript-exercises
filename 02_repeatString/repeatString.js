const repeatString = function(text, num) {
    let ret = '';

    if (num < 0) {
        return 'ERROR';
    }

    for (let i = 1; i <= num; i++) {
        ret = ret.concat(text);    
    }

    //TOP solution
    // for (let i = 0; i < num; i++) {
    //     ret += text;
    // }

    return ret;
};

// Do not edit below this line
module.exports = repeatString;
