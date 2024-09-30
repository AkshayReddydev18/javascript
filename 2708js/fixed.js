// let x = [12.345, 67.890, 34.567];

// let y = x.map((a)=>a.toFixed(2))
// console.log(y)

// const currentDate = new Date();
// const year = currentDate.getFullYear();
// const month = currentDate.getMonth()
// console.log(year)
// console.log(month+1)

// const x = [12, 34.56, 78, 90.12]
// const y = x.map((a) => a.isInteger())
// console.log(y)
// let arṇṇṇ

// let arr = [12, 34.56, 78, 90.12]; // Check if each element is an integer using isInteger()
// let arr1 = arr.map(a=>Number.isInteger(a));
// console.log(arr1);

// let arr = ['abc', 123, 'def', 456];// Check if each element is NaN (Not a Number) using isNaN()
// arr2 = arr.map(a=>isNaN(a));
// console.log(arr2)

let arr = [123.456, 789.012, 345.678] // Format each element to have a precision of 4 significant digits using toPrecision()
arr1 = arr.map(a=>a.toPrecision(4));
console.log(arr1)