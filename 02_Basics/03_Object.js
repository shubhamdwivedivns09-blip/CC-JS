// Singleton pattern in JavaScript


// Object literal

const mySym=Symbol('key1');

const JsUser = {
    name: 'Shubham',
    age: 25,
    [mySym]: "myKey1", // Used as a Symbol property key to avoid name collisions
    location: 'Varanasi',       
    email : 'shubhamdwivedivns09@gmail.com',
    isLoggedIn: false,
    Lastogin: ["Monday", "Tuesday"],
}
console.log(JsUser.location);
console.log(JsUser["location"]);
console.log(JsUser["email"]);
console.log(JsUser[mySym]);


JsUser.email = "newemail@gmail.com"; // Updating the email property of the JsUser object
console.log(JsUser.email);


JsUser.greeting = function() { // Adding a method to the JsUser object
    console.log("Hello User");
}
JsUser.greetingTwo = function() { // Adding another method to the JsUser object
    console.log(`Hello JsUser ${this.name}`);
}

JsUser.greeting();
JsUser.greetingTwo();

Object.freeze(JsUser); // Freezing the JsUser object to prevent further modifications
JsUser.email = "anotheremail@gmail.com"; // This will not update the email property due to freezing
console.log(JsUser.email);