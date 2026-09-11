function myName() {
    console.log("S");
    console.log("h");
    console.log("b");
    console.log("h");
    console.log("a");
}
// myName(); // Calling the myName function to log each character of the name "Shubham" on a new line     
function AddTwoNumbers(num1, num2) { // num1 and num2 are parameters of the AddTwoNumbers function
    // let result = Number(num1) + Number(num2); // Converting num1 and num2 to numbers and calculating their sum
    // return result; // Returning the calculated sum
    return num1 + num2; // Directly returning the sum of num1 and num2 without storing it in a variable
}

const result = AddTwoNumbers(5, 10); // Calling the AddTwoNumbers function with arguments 5 and 10 and storing the result in the 'sum' variable
console.log("Result :", result); // Logging the result of the addition to the console

function loginUserMassage(username="Shubham") { // Function to generate a login message for the user, with a default username of "Shubham"
    if(username=== undefined){
        console.log("Please Enter Valid Username");
        return;
        
    }
    return `${username} Just logged in`;
}

console.log(loginUserMassage());

console.log(loginUserMassage("Sam")); // Calling the loginUserMassage function with the argument "Sam" and logging the returned message to the console overide


console.log();
console.log();
console.log();





function CalculateCartPrice(...cart) { // Function to calculate the total price of items in a shopping cart, using the rest parameter syntax to accept multiple arguments => Rest Operator.
    return cart;
}

console.log(CalculateCartPrice(100,200,300)); // Calling the CalculateCartPrice function with multiple arguments and logging the returned value to the console


const user = {
    username : "Shubham",
    price : 100,

}

function handleObject(anyUser){
    console.log(`Username is ${anyUser.username} and price is ${anyUser.price}`);
    
}

handleObject(user); // Calling the handleObject 
// function with the 'user' object as an argument to log the 
// username and price properties of the user object  

handleObject({
    username : "John",
    price : 200,
})

mynewArray = [1,2,3,4,5,6,7,8,9];

function returnSeconValue(getArray){
    return getArray[1]; // Returning the second value (index 1) from the provided array
    
}

// console.log(returnSeconValue(mynewArray));
console.log(returnSeconValue([1,2,3,4,5,6,7,8,9])); // Calling the returnSeconValue function with an array and logging the returned second value to the console

const user1 = {
    username : "Shubham",
    price : 100,

}
const newuser = {
    ...user1, // Using the spread operator to copy all properties from the 'user1' object into the 'newuser' object
    age : 20, // Adding a new property 'age' with a value of 20 to the 'newuser' object

}
console.log(newuser); // Logging the 'newuser' object to the console, which now contains all properties from 'user1' and the new 'age' property