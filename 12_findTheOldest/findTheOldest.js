const findTheOldest = function(obj) {
    const objSorted = obj.sort((a, b) => getAge(a) < getAge(b) ? 1 : -1);
    return objSorted[0];
};

function getAge (person) {

    if (!person.yearOfDeath) {
        person.yearOfDeath = (new Date()).getFullYear();
    }
    
    return person.yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
