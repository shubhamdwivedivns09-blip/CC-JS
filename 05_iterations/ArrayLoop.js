// for of

// ["" , "" , ""]
// [{} , {} , {}]

const arr = [1 , 2 , 3 , 4 , 5]

for (const val of arr) {
    // console.log(val);
    
}

const greetings = "Hello World!"
for(const greet of greetings){
    // console.log(`Each char is :=> ${greet}`);
    
}

// MAPS :-> Collection of key value pair.

const map = new Map()
map.set("IN" , "India")
map.set("IN" , "India")
map.set("USA" , "United state of America")
map.set("Fr" , "france")
// console.log(map);

for (const [key , value] of map) {
    // console.log(key , "->", value);
     
}

// for (const key in map) { // NOt itertable
//     console.log(key);
    
// }
const myobject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for (const [key,value] of myobject) {
//     console.log(key,"=>",value);
    
// } //not work

//***************************IN*******************/


const object1 = {
    js : "javascript",
    cpp : "c++",
    java : "dsa"
}
for (const key in object1) {
    console.log(`${key} shortcut is for ${object1[key]}`);
}

const programming =["js" , "rb" , "py" , "java" , "cpp"]

for (const key in programming) {
    console.log(key);
    console.log(programming[key]);
    
}

//*************************** FOR-EACH LOOP *******************/

const coding = ["js" , "shubham" , "hero" ," Placement"]


coding.forEach(function (val) {
    console.log(val);
})

coding.forEach((val) => { // Using Arrow function
    console.log(val);
    
})

function printme(val){
    console.log(val);
    
}
coding.forEach(printme)


coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})

const mycoding = [
    {
        languageName : "javascript",
        langfilename : "js"
    },
    {
        languageName : "java",
        langfilename : "java"
    },
    {
        languageName : "python",
        langfilename : "py"
    },
]

mycoding.forEach((item) =>{
    console.log(item.languageName);
    
})

