const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);
console.log(balance.toString());
console.log(balance.toFixed(3));

const othernumber = 23.91212
console.log(othernumber.toPrecision(5));


const hundred = 10000000
console.log(hundred.toLocaleString());

console.log();
console.log();

// ++++++++++++++++++++++++++++++++++++++++  MATHS   ++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-0.4));
console.log(Math.round(3.4));
console.log(Math.ceil(2.1));
console.log(Math.floor(2.9));
console.log(Math.min(2,1,3,34,5,6,7));
console.log(Math.floor(Math.max(2,1,3,34,5,6,7)));  // For lowest value

console.log(Math.random()*10+1); // To AVoid Zero.
console.log();


const min=10;
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min);

