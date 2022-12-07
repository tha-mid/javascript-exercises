const removeFromArray = function(array, ...args) {
    //newArray will receive the final array without the values given
    let newArray = [];

    //for each value in the original array 
    //if it's not in the group of values to remove (args)
    //it will not be included in the newArray
    array.forEach(item => {
        if (!args.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
};

//THE ODIN PROJECT OTHER SOLUTION
// A simpler, but more advanced way to do it is to use the 'filter' function,
// which basically does what we did with the forEach above.

// var removeFromArray = function(...args) {
//   const array = args[0]
//   return array.filter(val => !args.includes(val))
// }
//

// Do not edit below this line
module.exports = removeFromArray;
