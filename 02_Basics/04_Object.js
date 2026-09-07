// SingleTon Pattern in JavaScript
const tinder = new Object(); // SIngleton object created using Object constructor
tinder.name = "Shubham";
tinder.age = 25;
tinder.location = "Varanasi";
tinder.email = "subhamdwibefoi@gmaik.com";
// console.log(tinder);

const regularObj = {
    email: "shubham@gmail.com",
    fullname: {
        userfullname : {
            firstname: "Shubham",
            lastname: "Dwivedi"
        }
    }
}

console.log(regularObj.fullname.userfullname.firstname);

const Obj1 = {1 : "one", 2: "two", 3: "three"}; // Object with numeric keys
console.log(Obj1[3]); // Accessing the value associated with the numeric key 3

const Obj2 = {4: "four", 5: "two"}; // Object with numeric keys in a different order

// const Obj3 = {Obj1 , Obj2}; // Object containing Obj1 and Obj2 as properties
// const Obj3 = Object.assign({}, Obj1, Obj2); // Merging Obj1 and Obj2 into a new object using Object.assign

const Obj3 = {...Obj1, ...Obj2}; // Merging Obj1 and Obj2 into a new object using the spread operator

console.log(Obj3);


console.log();
console.log();
console.log();

const user = [
    {
        id : 1,
        email : "shubham@gmail.com",
    },
    {
        id : 2,
        email : "john@gmail.com"
    },
    {
        id : 3,
        email : "jane@gmail.com"
    },

]
console.log(user[0].email);
console.log(Object.keys(tinder));
console.log(Object.values(tinder));
console.log(Object.entries(tinder));

console.log(tinder.hasOwnProperty("location")); // Checking if the 'tinder' object has a property named 'Location'

const course = {
    courseName : "JavaScript",
    coursePrice : 999,
    courseInstructor : "Shubham",
}
// course.courseInstructor
console.log();
console.log();
console.log();
const {courseInstructor} = course; // Destructuring the 'course' object to extract the 'courseInstructor' property
console.log(courseInstructor);