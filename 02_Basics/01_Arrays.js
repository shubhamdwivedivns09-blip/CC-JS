const marvel_heros = ["Iron Man", "Captain America", "Thor", "Hawkeye"];
const dc_heros = ["Batman", "Superman", "Wonder Woman", "Cyborg"];

marvel_heros.push(dc_heros); // Adding the dc_heros array as a single element to the marvel_heros array
console.log();

// console.log(marvel_heros);
// console.log(marvel_heros[4][0]);


console.log(marvel_heros.length); // Length of the marvel_heros array after adding dc_heros
console.log();
console.log();

const combined_heros = marvel_heros.concat(dc_heros); // Combining both arrays into a new array
console.log(combined_heros);
console.log(combined_heros.length); // Length of the combined array
console.log();
console.log();
console.log();
console.log();

// SPREAD OPERATOR
const combined_heros2 = [...marvel_heros, ...dc_heros]; // Using the spread operator to combine both arrays into a new array
console.log(combined_heros2);
// console.log(combined_heros2.length); // Length of the combined array using spread operator

const anptherArray = [1, 2, 3, [4 , 5, 6], 7, 8];
const flatArray = anptherArray.flat(1); // Flattening the nested array into a single-level array
console.log(flatArray);

console.log(Array.isArray("Shubham"));
console.log(Array.from("Shubham"));
console.log(Array.from({name: "Shubham"})); // INTERESTING


let score1=100
let score2=200
let score3=300
console.log(Array.of(score1, score2, score3)); // Creating an array from the given scores
