const LOCAL_FORECAST = {
    yesterday : {low: 61, high: 75},
    today : {low: 64, high: 77},
    tomorrow : {low: 68, high: 80}
}


// const lowToday = LOCAL_FORECAST.today.low;
// const highToday = LOCAL_FORECAST.today.high;

// console.log(lowToday, highToday); // 64, 77

// find the lowToday without using .dot operator

let  { today: {low: lowToday}} = LOCAL_FORECAST;
let  {today: {high: highToday}} = LOCAL_FORECAST;
console.log(lowToday, highToday);
