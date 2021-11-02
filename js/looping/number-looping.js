//print all the numbers from 40 to 60 (inclusive)
console.log('Printing 40-60:')
for (let i = 40; i <= 60; i++) {
    console.log(i);
}

//print all even numbers from 40 to 60 (inclusive)
console.log('Printing 40-60, only evens:')
for (let i = 40; i <= 60; i += 2) {
    console.log(i);
}

let min = 30; 
let max = 430;

//print all numbers from min to max (inclusive)
console.log(`Printing all numbers from ${min} to ${max}:`);
for (let i = min; i <= max; i++) {
    console.log(i)
}

//print all even numbers from min to max (inclusive)
console.log(`Printing all even numbers from ${min} to ${max}:`);
for (let i = min; i <= max; i += 2) {
    console.log(i)
}

//print the first 10 multiples of 7
console.log('Printing the first 10 multiples of 7:')
for (let i = 1; i <= 10; i++) {
    console.log(7 * i);
}

let k = 40;
let n = 25;

//print the first k multiples of 7
console.log('Printing the first k multiples of 7:')
for (let i = 1; i <= k; i++) {
    console.log(7 * i);
}

//print the first k multiples of n
console.log('Printing the first k multiples of n:')
for (let i = 1; i <= k; i++) {
    console.log(n * i);
}