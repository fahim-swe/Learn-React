let arr = ["apple", "banana", "orange", "watermelon"];

let newArr = [];

// for(let i = 0; i < arr.length; i++)
// {
//     let fruit = arr[i];
//     if(fruit.length > 6){
//         newArr.push(fruit);
//     }
// }

// newArr = arr.filter( function(fruit){
//     return fruit.length > 6;
// });

newArr = arr.filter( (fruit)=>{
    return fruit.length > 6;
})

console.log(arr);
console.log(newArr);


// filter calls a function on each element of an array and returns a new array 
// containing only the elements for which that function returns a truthy value 
// that is, a value which returns true. It filters the array, based on the function 
// passed to it, Like map, it does this without needing to modify the original array 

