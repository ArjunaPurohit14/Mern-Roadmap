// Write a script to calculate sum of array using for loop

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }

// console.log(sum);

// using reduce method--------

function sumArray(arr) {
  if(!Array.isArray(arr)) {
    throw new Error("Input should be an array");
  }
  return arr.reduce((acc, curr) => acc + curr, 0);
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumArray(arr));

// using ES6 arrow function--------

const sumArrayArrow = arr => arr.reduce((acc, curr) => acc + curr, 0);
console.log(sumArrayArrow(arr));

// using spread operator--------

const sumArraySpread = (...arr) => arr.reduce((acc, curr) => acc + curr, 0);
console.log(sumArraySpread(arr));

// using ES6 spread operator with destructuring--------

const [first, ...rest] = arr;
const sumArrayRest = (...rest) => rest.reduce((acc, curr) => acc + curr, 0);
console.log(sumArrayRest(...rest));

// using ES6 rest parameter and spread operator--------

const sumArrayRestSpread = (...[first, ...rest]) => rest.reduce((acc, curr) => acc + curr, 0);
console.log(sumArrayRestSpread(...arr));

// using ES6 rest parameter and destructuring--------

const { length, ...restObj } = arr;
const sumArrayRestObj = restObj.reduce((acc, curr) => acc + curr, 0);
console.log(sumArrayRestObj);

// using ES6 rest parameter and spread operator--------