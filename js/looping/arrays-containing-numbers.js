const listOfNumbers = [48, -25, 66, -13, 54, 88, -97, 102];
let k = 40;

console.log(`Largest number in listOfNumbers: ${Math.max(...listOfNumbers)}`);
console.log(`Smallest number in listOfNumbers: ${Math.min(...listOfNumbers)}`);
console.log(`All the numbers in listOfNumbers greater than 0: ${listOfNumbers.filter(num => num > 0)}`);
console.log(`All the numbers in listOfNumbers greater than k: ${listOfNumbers.filter(num => num > k)}`);
console.log(`All the numbers in listOfNumbers that are even: ${listOfNumbers.filter(num => num % 2 === 0)}`);
console.log(`All the numbers in listOfNumbers sorted low to high: ${listOfNumbers.sort((a,b) => a - b)}`);
console.log(`All the numbers in listOfNumbers sorted high to low: ${listOfNumbers.sort((a,b) => b - a)}`);
