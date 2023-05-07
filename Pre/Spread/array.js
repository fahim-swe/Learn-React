let arr = [1, 2, 3];
// let arr2 = arr;

// arr2.push(4);

// console.log(arr);
// console.log(arr2);

// console.log(arr); // array 
// console.log(...arr); // list of number


let arr2 = [...arr]; // list of number store as array, diff address
arr2.push(4);

console.log(arr);
console.log(arr2);
