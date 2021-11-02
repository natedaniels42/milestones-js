//Function greet that takes in a name variable and prints a greeting
const greet = (name) => {
    console.log(`Hi ${name}! This is the greeting for the greet function`);
}

greet('nate');

//function hotOrCold that takes in a number and returns a value a value dependent on that number
const hotOrCold = (temp) => {
    return temp > 100 ? 'hot' : temp === 100 ? 'correct' : 'cold'; 
}

console.log(`The temperature is 100 which makes it ${hotOrCold(100)}`);
console.log(`The temperature is 102 which makes it ${hotOrCold(102)}`);
console.log(`The temperature is 98 which makes it ${hotOrCold(98)}`);

//function add which takes 2 numbers and returns the sum
const add = (num1, num2) => {
    return num1 + num2;
}

//function sum which uses the add function to return the total of all the numbers in an array
const sum = (arr) => {
    let total = 0;
    arr.forEach(num => total = add(total, num));
    return total; 
}

const arr = [1,2,3,4,5];
console.log(`arr numbers: ${arr}`);
console.log(`The sum of all the numbers in arr is: ${sum(arr)}`);

//funstion larger takes in 2 numbers and returns the larger of the two
const larger = (num1, num2) => {
    return num1 > num2 ? num1 : num2;
}

//function largest that returns the largest number in an array utilizing the larger function
const largest = (arr) => {
    let max = -Infinity;

    for (let i = 1; i < arr.length; i++) {
        let current = larger(arr[i], arr[i - 1]);
        if (current > max) {
            max = current;
        }
    }

    return max;
}

const numArr = [1,5,4,3,6,8,44,2,46,76,45,102,4,3];
console.log(`numArr: ${numArr}`);
console.log(`The largest number in numArr is: ${largest(numArr)}`);