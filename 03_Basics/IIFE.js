// Immediately Invoked Function Expressioons
(function Xyz(){
    console.log(`DB CONNECTED`);
})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})("Shubham")