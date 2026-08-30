// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 232686382382638263n;
// Reference (Non primitive)

// Array, Objects, Functions
const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}


console.log(typeof scoreValue);
console.log(typeof heros);

// Stack(Primitive) , Heap(Primitive)
let myYtname="shubhamdwivedi"
let othername=myYtname
console.log(othername);

let userone = {
    email : "user@google.com",
    upi :"user@ybl"
}

let userTwo=userone

userTwo.email="shubham@mail.com"

console.log(userone.email);
console.log(userTwo);

 