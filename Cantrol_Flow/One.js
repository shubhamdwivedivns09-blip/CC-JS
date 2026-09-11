// if
// < , > , <= , >= , == , != , 

const temp = 41
if(temp === 41){
    console.log("Less than 41");
}
else{
    console.log("greater than 41");
}
console.log("Hello Shubham");

console.log();
console.log();
console.log();


const score = 200
if(score >100){
    const power = "fly";
    console.log(`User Power : ${power}`);
}
console.log();
console.log();
console.log();


const balance = 200
if(balance>100){
    console.log("One");
    console.log("Two");
}

const bal = 100;
if(bal<20){
    console.log("less than 20");
    
}
else if(bal<30){
    console.log("less than 20");
}
else{
    console.log("greater than 50");
    
}


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggededInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}


console.log();
console.log();
console.log();



// SWITCH STATEMENT
console.log("SWITCH STATE");

const month =3;
switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;

    default:
        console.log("Does not match");
        
        break;
}