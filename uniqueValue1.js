
// Q.3  Write a function that takes an
//  array of integers and returns a new array with only the unique values.

const arr = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 5];
const set = [...new Set(arr)];
console.log(set); 
output: [1, 2, 3, 4, 5]
