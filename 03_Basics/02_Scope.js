// var c = 300;
let a = 100;
if(true){
    let a = 10;
    const b = 20
    var c = 30;
    // console.log(c);
    console.log("Inner Block",a);
    
}
console.log(a);
// console.log(b);
// console.log(c);

for(let i=0;i<5;i++){
    console.log(i);
}

function one(){
    const username = "Shubham"

    function two(){
        const website = "shubham.com"
        console.log(username); 
    }
    //  console.log(website);
    two()    
}
one()


console.log();
console.log();
console.log();

if(true){
    const username = "SHubham"
    if(username === "SHubham"){
        const website = "Youtube.com"
        console.log(website+" - "+username);
    }
    // console.log(website); // This will throw an error because 'website' is not defined in this scope
}
// console.log(username); // This will also throw an error because 'username' is not defined in this scope
console.log();
console.log();
console.log();
// ++++++++++++++++++++++++++Intresting Example +++++++++++++++++++++++++++++++++++++++++++++++

console.log(addOne(5)); // Calling the addOne function with an argument of 5 and logging the returned value to the console
function addOne(num){
    return num + 1;
}


addTwo(5);
const addTwo = function(num){ // Defining a function expression named 'addTwo' that takes a number as an argument and returns the number plus 2
    return num + 2;
}