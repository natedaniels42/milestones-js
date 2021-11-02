const listOfStrings = ['camel', 'pig', 'antelope', 'eagle', 'needle', 'lion', 'badger', 'tiger', 'goldfish', 'aardvark'];
let minLength = 5;

console.log(`The longest string in listOfStrings is: ${listOfStrings.sort((a,b) => a.length - b.length)[0]}`);
console.log(`The longest string in listOfStrings is: ${listOfStrings.sort((a,b) => a.length - b.length)[0]}`);
console.log(`The strings in listOfStrings that are longer than 3 characters: ${listOfStrings.filter(str => str.length > 3)}`);
console.log(`The strings in listOfStrings that are longer than minLength characters: ${listOfStrings.filter(str => str.length > minLength)}`);
console.log('First str that begins with a: ');
for (let i = 0; i < listOfStrings.length; i++) {
    if (listOfStrings[i][0] === 'a') {
        console.log(listOfStrings[i]);
        break;
    }
}

//print 'found it!' if the listOfStrings contains 'needle'
console.log('needle search:');
console.log(listOfStrings.includes('needle') ? 'found it!' : 'no needle here');

console.log('listOfStrings sorted a-z:');
console.log(listOfStrings.sort((a,b) => {
    if (a > b) {
        return 1;
    } else if (b > a) {
        return -1;
    } else {
        return 0;
    }
}))

console.log('listOfStrings sorted z-a:');
console.log(listOfStrings.sort((a,b) => {
    if (a < b) {
        return 1;
    } else if (b < a) {
        return -1;
    } else {
        return 0;
    }
}))
