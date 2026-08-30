const name = "shubham"
const repoCount=30;


// console.log(name+repoCount+"sam");

// console.log(`hello my name is ${name} and my repo count is ${repoCount}`);


const game=new String("Shubham")

// console.log(game[0]);
// console.log(game[1]);

// console.log(game.length);
// console.log(game.toUpperCase());

 console.log(game.charAt(3));
console.log(game.indexOf("b"));

const newString = game.substring(0,4)
console.log(newString);
const otherString = game.substring(-8,2)
console.log(otherString);

const newStringOne = "        Shubham          "
console.log(newStringOne);
console.log(newStringOne.trim( ));

const url = "https://shubham.com/shubham%20dwivedi"

console.log(url.replace('%20','-'))
console.log(url.includes('dsshubham'));

console.log(game.split('-'));

