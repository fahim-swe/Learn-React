let obj = {
    name : "fahim",
    state  : "Rangpur",
    country : "BAN"
}

// let name = obj.name;
// let state = obj["state"];

let {name: myName, state, country} = obj;
console.log(myName, state, country);