let obj = {
    name : "Fahim",
    address : {
        country : "BAN",
        state : {
            code : "RAN",
            pin  : "11111"
        }
    }
}

// let obj2 = obj;
// obj2.name = "Raju";


// let obj2 = {...obj};  // shallow copy
// obj2.name = "Raju";

// let obj2 = {...obj, address: {...obj.address}};
// obj.name = "Raju";
// obj2.address.country = "IND";


// let obj2 = {...obj, address: {...obj.address, state: {...obj.address.state}}}; // deep copy
// obj2.name = "Raju";
// obj2.address.country = "IND";
// obj2.address.state.code = 20;

// Simple and eassy version, shortcut version
let obj2 = JSON.parse(JSON.stringify(obj));
obj2.name = "Raju";
obj2.address.country = "IND";
obj2.address.state.code = 20;

console.log(obj);
console.log(obj2);