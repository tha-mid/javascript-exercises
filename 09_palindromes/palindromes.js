const palindromes = function (string) {
    const stringConverted = string.toLowerCase().replace(/[^a-z]/g, '');

    return stringConverted
                        .split('')
                        .reverse()
                        .join('') === stringConverted;
};

// Do not edit below this line
module.exports = palindromes;
