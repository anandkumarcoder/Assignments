/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/
const numbers = [10, 5, 20, 8, 15];
function findLargestElement(numbers) {
     return Math.max(...numbers)
}

// console.log(findLargestElement([3, 7, 2, 9, 1]));
console.log(findLargestElement(numbers));

//module.exports = findLargestElement;
