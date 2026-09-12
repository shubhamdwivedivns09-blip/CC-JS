// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach((item) => {
//     //console.log(item);
//     return item
// })

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num) => num > 4)

const newNums = myNums.filter((num) => {
    return num>6
})


const nums = []

myNums.forEach((num) => {
    if (num > 4) {
        nums.push(num)
    }
})

console.log(nums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
];

let userbook =books.filter((bk) => bk.genre==="History")

userbook = books.filter((bk) => { 
    return bk.publish>=1990 && bk.genre==="History"
}) // we have to use return if we use scope => {} 
console.log(userbook);


const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const news = myNumers.map((num) => num + 10)
// console.log(news);

const newws = myNumers // function in function 
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num>=50)

console.log(newws);
console.log();
console.log();
console.log();

// *********************** REDUCE ***************** 

const myNumbs = [1, 2, 3]

// const myTotal = myNumbs.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNumbs.reduce((acc, curr) => acc + curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "java course",
        price: 1999
    },
    {
        itemName: "html tut",
        price: 7999
    },
]


const pricetopay = shoppingCart.reduce((acc,item)=>{
    return acc+ item.price
},0)

console.log(pricetopay);
