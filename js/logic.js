const num1 = 18;
const num2 = 25;

console.log(`num1: ${num1}`);
console.log(`num2: ${num2}`);
if (num1 % 2 === 0 && num2 % 2 === 0) {
    console.log('Both num1 and num2 are even');
} else if (num1 % 2 === 0 || num2 % 2 === 0) {
    console.log('Either num1 or num2 is even');
} else if (!(num1 % 2 === 0) && !(num2 % 2 === 0)) {
    console.log('Neither number is even');
}