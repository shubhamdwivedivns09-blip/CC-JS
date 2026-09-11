// for

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
// }

for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
        console.log(i + "*" + j + ' = ' + i*j); 
    }
}
console.log();
console.log();
console.log();


let myArray = ["flash", "batman", "superman"]
console.log();
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}


// Break and Continue
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break
    }
    console.log(`Value of i is ${index}`);
}
for (let index = 1; index <= 8; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${index}`);
}


console.log();
console.log();
console.log();


// WHILE LOOP
let i=0
while (i<=10) {
    console.log(`Value of idx is ${i}`);
    i=i+2 
}

console.log();
console.log();

let myArray2 = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray2.length) {
    console.log(`Value is ${myArray2[arr]}`);
    arr = arr + 1
}

console.log();
console.log();

// Do while

let score = 11

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);