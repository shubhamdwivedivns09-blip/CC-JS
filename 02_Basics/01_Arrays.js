// Arrays
const myArray = [1, 2, 3, 4, 5];
const myHeros = ["Iron Man", "Spider Man", "Thor", "Hulk"];
console.log(myArray[0]); // Accessing the first element of the array
console.log(myArray.length); // Getting the length of the array
console.log(myHeros[0]); // Accessing the first element of the array
console.log(myHeros.length); // Getting the length of the array


// Adding elements to the array
myArray.push(6);
myArray.push(7);
myArray.unshift(90); // Adds an element to the beginning of the array
// myArray.shift(); // Removes the first element from the array
console.log(myArray);
console.log(myArray.includes(7));
console.log(myArray.indexOf(4)); // Returns the index of the element in the array


myArray.pop(); // Removes the last element from the array
console.log();
console.log();


myHeros.push("Captain America");
console.log(myArray);
console.log(myHeros);

console.log();
console.log();

const newArray = myArray.join();
console.log(myArray);
console.log(newArray);
console.log(typeof myArray);
console.log(typeof newArray);

console.log();
console.log();
console.log();
console.log();

// SLICE, SPLICE;

console.log("A" , myArray);

const myNewArray = myArray.slice(1, 4); // Returns a new array with the elements from index 1 to 3
console.log(myNewArray);
console.log("B" , myArray);

console.log();
console.log();
const myNewArray2 = myArray.splice(1, 4); // Removes elements from index 1 to 4 and returns them as a new array
console.log(myNewArray2);
console.log("C" , myArray);
