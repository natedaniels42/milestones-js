const coolArray = [1,4,5,7,3];
let k = 2;


console.log(`The length of coolArray is ${coolArray.length}`);
console.log(`The first element of coolArray is ${coolArray[0]}`);
console.log(`The second element of coolArray is ${coolArray[1]}`);
console.log(`The last element of coolArray is ${coolArray[coolArray.length - 1]}`);
console.log(`The element at index k of coolArray is ${coolArray[k]}`);

coolArray[0] = 23;
coolArray[1] = 42;
coolArray[coolArray.length - 1] = 54;
coolArray[k] = 50;

console.log(`coolArray is now ${coolArray} after changes`);