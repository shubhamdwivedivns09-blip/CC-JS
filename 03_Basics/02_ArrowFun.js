const user = {
    username: "Shubham",
    price: 999,

    welcomeMassage: function(){
        console.log(`${this.username} , Welcom to Website`);// ***this in JavaScript is used to 
        //refer to the object/context that a function is working with.****
        
       // console.log(this);
        
    }
}
// user.welcomeMassage();
// user.username="ady"
// user.welcomeMassage()

// console.log(this);

// function xyz(){
//     let username = "Shubham"
//     console.log(this.username);
// }
// xyz() // Not applicable in function it is only applicable in Object

// const s = function xyz(){
//     let username = "Shubham"
//     console.log(this.username);
// }
// xyz()

// const s = () => {
//     let username = "Shubham"
//     console.log(this  );
// }
// s();

const addTwo = (num1, num2) =>{ //if we write in curly braces then we Should use return => EXPLICIT RETURN
    return num1+num2;
}
// console.log(addTwo(45,56))

// const addTwo = (num1,num2) => (num1+num2);// if we wrap in paranthesis then there is no use of return => IMPLICIT RETURN 

// const addtwo = (num1,num2) => ({username : "Shubham"})
// console.log(addtwo(3,4));

const add = (a, b) => a + b;
console.log(add(3,4));
