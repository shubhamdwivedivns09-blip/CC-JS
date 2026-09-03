let mydate = new Date()
// console.log(mydate.toString());
// console.log(typeof mydate);

// let myCreatedDate = new Date(2023,0,23, 5, 4)
let myCreateDate = new Date("01-14-2026")
console.log(myCreateDate.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);

let newDate = new Date();
console.log(newDate.getMonth()+1); // Months are Zero Indexed


console.log(newDate.toLocaleString('Default', { 
    weekday: 'long' 
})); // Returns the day of the week

