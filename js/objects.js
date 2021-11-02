const personData = {};

personData.firstName = 'Jean-Luc';
personData.lastName = 'Picard';
personData.age = 79;

console.log('personData:');
console.log(personData);

const daysInMonth = {
    'January': 31,
    'February': new Date().getFullYear() % 4 ? 28 : 29,
    'March': 31,
    'April': 30,
    'May': 31,
    'June': 30,
    'July': 31,
    'August': 31,
    'September': 30,
    'October': 31,
    'November': 30,
    'December': 31
}

console.log('daysInMonth:');
console.log(daysInMonth);

module.exports = {
    daysInMonth
};