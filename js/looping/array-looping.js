const coolArray = ['apple', 'berry', 'cantaloupe', 'deer'];

//print every item of coolArray
console.log('Printing all items of coolArray:');
coolArray.forEach(item => console.log(item));

//print every other item of coolArray
console.log('Printing every other item of coolArray:');
coolArray.forEach((item, i) => {
    if (i % 2 === 0) {
        console.log(item);
    }
})

//print the items in coolArray in reverse order
console.log('Printing the items in coolArray in reverse order:');
for (let i = coolArray.length - 1; i >= 0; i--) {
    console.log(coolArray[i]);
}