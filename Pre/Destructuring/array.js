let arr = ["Hi", "I", "Am", "Fahim"];

// let a = arr[0];
// let b = arr[1];

// // convient way of exacting the property from array or an object
// console.log(a, b);

// // Destructuring
// let [a, b, c, d] = arr;
// console.log(a, b, c, d);


// to skip some value
// let [a, b, , d] = arr;
// console.log(arr);

// add some extra variable
let [a, b, c, d, extra = "SUST SWE"] = arr; // default value setting
console.log(a, b, c, d, extra);


// convient way of extracing value of array or an object