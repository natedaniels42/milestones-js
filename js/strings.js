const str1 = 'cart';
const str2 = 'cartoon';

console.log(`str1 is ${str1}`);
console.log(`str2 is ${str2}`);
console.log(`str1 + str2 is ${str1.concat(str2)}`);
console.log(`str2 does ${str2.includes(str1) ? '' : 'not '}include str1`);

let waffles = 'syrup';
let k = 3;

console.log(`The variable waffles is ${waffles.length} characters long`);
console.log(`The variable waffles in uppercase is ${waffles.toUpperCase()}`);
console.log(`The variable waffles in lower case is ${waffles.toLowerCase()}`);
console.log(`The first character of the variable waffles is ${waffles[0]}`);
console.log(`The second character of the variable waffles is ${waffles[1]}`);
console.log(`The last character of the variable waffles is ${waffles[waffles.length - 1]}`);
console.log(`The character at index k of the variable waffles is ${waffles[k]}`);
console.log(`Adding a to the end of the variable waffles makes it ${waffles + 'a'}`);

let firstName = 'Jesse';

console.log(`Hello, ${firstName}!`);