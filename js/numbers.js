const num1 = 5;
const num2 = 2;

console.log(`num1 is equal to ${num1}`);
console.log(`num2 is equal to ${num2}`);
console.log(`num1 + num2 is equal to ${num1 + num2}`);
console.log(`num1 - num2 is equal to ${num1 - num2}`);
console.log(`num1 * num2 is equal to ${num1 * num2}`);
console.log(`num1 / num2 is equal to ${num1 / num2}`);
console.log(` num1 % num2 is equal to ${num1 % num2}`);
console.log(`num1 ** num2 is equal to ${num1 ** num2}`);
console.log(`num1 / num2 rounded down is ${Math.floor(num1 / num2)}`);

let blah = 538;
let k = 221;

console.log(`The value of blah is ${blah}`);
console.log(`The rightmost digit of blah is ${blah % 10}`);
console.log(`blah is ${blah % 2 ? 'odd' : 'even'}`);
console.log(`Blah incremented by 1 is ${blah++}`);
console.log(`Blah incremented by 2 is ${blah += 2}`);
console.log(`Blah incremented by 10 is ${blah += 10}`);
console.log(`Blah incremented by k is ${blah += k}`);

console.log(`Blah decremented by 1 is ${blah--}`);
console.log(`Blah decremented by 2 is ${blah -= 2}`);
console.log(`Blah decremented by 10 is ${blah -= 10}`);
console.log(`Blah decremented by k is ${blah -= k}`);