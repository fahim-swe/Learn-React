let obj = {
    name : "Fahim",
    address : {
        country : "BAN",
        state : {
            code : "Rangpur",
            pin  : "11111"
        }
    }
}

let {name} = obj;
console.log(name);

let {address:{country: myCountry}} = obj;
console.log(myCountry);

let {address: {state : {code: myZilaCode}}} = obj;
console.log(myZilaCode);