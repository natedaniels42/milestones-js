const daysInMonth = require('../objects');

const coolObject = {
    name: 'Nate',
    age: 41,
    home: 'Tomball',
    hobby: 'music',
    food: 'pizza'
};

//print all key and value in coolObject
console.log('Printing key value pairs of coolObject:')
for (let [key, value] of Object.entries(coolObject)) {
    console.log(`key: ${key}, value: ${value}`);
}

//print every key and value of coolObject in alphabetical order
const keys = Object.keys(coolObject);
const values = Object.values(coolObject);
console.log('All keys and values sorted a-z:');
keys.concat(values).sort((a,b) => {
    let lowerA = a.toString().toLowerCase();
    let lowerB = b.toString().toLowerCase();
    if (lowerA > lowerB) {
        return 1;
    } else if (lowerB > lowerA) {
        return -1;
    }
    return 0;
}).forEach(str => console.log(str));

//print every key and value of coolObject in descending alphabetical order
console.log('All keys and values sorted z-a:');
keys.concat(values).sort((a,b) => {
    let lowerA = a.toString().toLowerCase();
    let lowerB = b.toString().toLowerCase();
    if (lowerA < lowerB) {
        return 1;
    } else if (lowerB < lowerA) {
        return -1;
    }
    return 0;
}).forEach(str => console.log(str));

//filter daysInMonth for months with 31 days and print name
console.log('months with 31 days:');
for (let [key, value] of Object.entries(daysInMonth.daysInMonth)) {
    if (value === 31) {
        console.log(key);
    }
}