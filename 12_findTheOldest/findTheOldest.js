const findTheOldest = function(people) {
    let oldestAge = 0;
    let oldestPerson = {};
    for (let person of people) {
        let yearOfDeath = 0;
        yearOfDeath = person.yearOfDeath ? person.yearOfDeath : new Date().getFullYear();
        currentPersonAge = yearOfDeath - person.yearOfBirth;
        if (currentPersonAge > oldestAge) {
            oldestAge = currentPersonAge;
            oldestPerson = person;
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
