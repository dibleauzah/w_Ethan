/*09-17-20*/

/*JS_Book Continued; p. 60.

##FOR Loops##

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

let i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);

##Functions##

function sayHello() {
    console.log('Hello!');
}

*/

/* Parameters//
function output(text) {
    console.log(text);
}

output("Hello!");

function SaySeif(say_his_name) {
    console.log(say_his_name);
}

*/
/*
SaySeif("Seif");

Write a function named itIsRaining and pass "It is pouring!" as an argument
the function should log the input

function itIsRaining(input) {
    console.log(input);
}

itIsRaining ("It is pouring!");

*/

// Function sum()
/*


console.log(sum(100, 3000));
*/
/*
function output(text) {
    console.log(text);
}

function sum(num1, num2) {
    return num1 + num2;
}

let result = sum(100, 3000);
output(result); 
*/
/*
##Object-Oriented Programming.##//

let obj = new Object();

*/

// let obj = {
//     name: {
//         first: 'Gandalf',
//         last: 'the Grey'
//     },
//     address: 'Middle Earth'
// };

/*
function Book(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
    this.printIsbn = function() {
        console.log(this.isbn);
    };
};
book.printIsbn();
var book = new Book ('title', 'pag', 'isbn');

console.log(book.title); 
book.title = 'new title';
console.log(book.title);

// Book.prototype.printTitle = function() {
//     console.log(this.title);
// };

// book.printTitle();

/*09-19-20

##Object-Oriented Programming, Review & Continued.##// */

// let obj = {}

// console.log(typeof(obj));

//TODO Primitives and Reference Types

// Value types (Primitives)
/*
- Number
- String
- Boolean
- Symbol
- undefined
- null
*/

// Reference Types
/*
- Objects
- Functions
- Array
*/

// let x = { value: 10 };
// let y = x;

// x.value = 20;

// console.log(x, y);

// // //? When you create an object, those values are not stored in the variable, instead they are stored somewhere else in the memory and the variable becomes a pointer

// // //? When we copy x into y, the address is what is copied,

// // //* Primitives are copied by value
// // //* Objects are copied by their reference

// let obj = {
//     name: "John",
//     book: "LOTR",
//     pages: 56
// }

// obj.name;

// //* 4 Pillars of Object-oriented programming

// //TODO ABSTRACTION
// //TODO INHERITANCE
// //TODO POLYMORPHISM

// //* Procedural programming has lots of copying and pasting, THIS IS SPAHGETTI CODE

// //TODO OOP combines a group of related variables and functions into a unit
// //? The variables are referred to as PROPERTIES
// //? The functions are referred to as METHODS

// //TODO ENCAPSULATION: When grouping related variables and functions that operate on them
// //? Reduce complexity + increase reusability
// // //! PROCEDURAL PROGRAMMING

// let baseSalary = 30_000;
// let overtime = 10;
// let rate = 20;

// function getWage(baseSalary, overtime, rate) {
//     return baseSalary + overtime * rate;
// }

// console.log(getWage(baseSalary, overtime, rate));

// //! OOP PROGRAMMING

// let employee = {
//     baseSalary: 30_000,
//     overtime: 10,
//     rate: 20,
//     sickDays: 6,
//     getWage: function() {
//         return this.baseSalary + this.overtime * this.rate;
//     }
// }
// console.log(employee.getWage());
// //? You don't need parameters, they already exist in your object (these are the properties)
// //TODO ABSTRACTION: The complexity of our code is hidden, we don't need to concern ourselves with lower level thinking
// //? Simpler interface - reduces complexity
// //? Reduce the impact of change, if we change something tomorrow, it will not impact the rest of the code - isolates the impact of changes in the code
// //TODO INHERITANCE: Eliminates redundant code
// // TODO POLYMORPHISM - meaning "Many forms" ... gets rid of long if and else & switch and case statements
// //? Refactor (the process of restructuring existing computer code without chaning its external behavior) ugly switch/case statements

// Create an object called circle and put a property in it called radius, give it a value of 1

// let circle = {
//     radius: 1,
//     draw: function() {
//         // do stuff
//     }
// }

// let i = 0;

// do {
//     console.log(i); 
//     i++;
// } while (i <= 10);

// There are two bugs in this code. The code supposed to count from 0 to 10 in a do while loop

// intializer;

// do {
//     // do stuff
//     final-expression
// } while (condition)

//* EXAMPLE

// let movie = "Lord of the Rings";

// function starWarsFan() {
//     const movie = "Star Wars";
//     return movie;
// }


// function marvelFan() {
//     movie = "The Avengers";
//     return movie;
// }

// function blizzardFan () {
//     const isFan = true;
//     let phrase = "Warcraft";
//     console.log("Before if: " + phrase);
//     if (isFan) {
//         let phrase = 'initial text';
//         phrase = 'For the Horde!';
//         console.log('Inside if: ' + phrase);
//     }
//     phrase = "For the Alliance!";
//     console.log('After if: ' + phrase);
// }

// console.log(movie);
// console.log(starWarsFan());
// console.log(marvelFan());
// console.log(movie);
// blizzardFan();

// //TODO Let's bake a cake and fry an omelette

// let eggs = 6;

// let omelette = {
//   eggs: 3,
//   pepper: true,
//   salt: true,
//   sugar: false,
//   cook: function () {
//     if (eggs == 6) {
//       return "Spilled eggs... Too many eggs!";
//     } else if ((this.eggs, this.pepper, this.salt)) {
//       return "Yummy!";
//     }
//   },
// };

// function bakeCake() {
//   let eggs = 2;
//   let flour = "5 cups";
//   let milk = true;

//   if (eggs == 6 && flour && milk) {
//     return "We baked a cake!";
//   } else {
//     return "Not enough ingredients!";
//   }
// }

// console.log(eggs);

// // console.log(omelette.cook());
// console.log(bakeCake());

// let bandInfo;

// let myFavBand = {
//     name: 'theCoolies',
//     nationality: 'American',
//     genre: 'hipHopRoll',
//     members: 5,
//     formed: 1995,
//     split: 2016,
//     albums: [
//         {
//             name: "Blessings",
//             released: 1995,
//         },
//         {
//             name: "Crazy",
//             released: 1997,
//         },
//     ],
// }

// bandInfo = `Seif's fav band's name is ${myFavBand.name}, their nationality is ${myFavBand.nationality}, they were active for ${myFavBand.split - myFavBand.formed} years and used the ${myFavBand.genre} style, and their first album was called ${myFavBand.albums[0].name} and was released in ${myFavBand.albums[0].released}.`;

// console.log(bandInfo);

//## Arrow Functions ##//
/*
var circleAreaES5 = function circleArea (r) {
    var PI = 3.14;
    var area = PI * r * r;
    return area;
}
console.log(circleAreaES5(2)); 

const circleArea = r => {
    const PI = 3.14;
    const area = PI * r * r;
    return area;
};
console.log(circleArea(2)); 

const circleArea2 = r => 3.14 * r * r;
console.log(circleArea2(2)); 

const hello = () => console.log('hello');
hello(); */

//* Default parameter values for function

// function sum(x = 1, y = 2, z = 3) {
//     return x + y + z;
// }
// let array = [3, 4, 5];

// console.log(sum(...array));
/*
function restParameterFunction(x, y, ...a) {
    return (x + y) * a.length;
}
console.log(restParameterFunction(1, 2, 3, 4, 5, 6)); */

//##-Accessing Elements And Iterating An Array--##//

/*

let daysOfWeek = [5]

for (let i = 0; i < daysOfWeek.length; i++) {
    console.log(daysOfWeek[i]);
}

*/

//TODO Enchanced object properties 

// let a = 1;
// let b = 2;

// let temp;

// temp = a;
// a = b;
// b = temp;

// console.log(a);
// console.log(b);

// let [x, y, z] = ["Seif", "Ethan", "Charlie"];

// console.log(x, y, z);

// [x, y, z] = [y, x, z]

// console.log([x, y, z])

// //* Create a function that swaps variable a and variable b that uses deconstructing! 

// function swapItems() {
//     let [a, b] = [231, 300];
//     console.log(a, b);
//     [a, b] = [b, a];
//     console.log(a, b);
// };

// swapItems();

// let [x, y] = ["a", "b"];

// let obj = {x, y};

// console.log(obj); 
// const hello = {
//     name: 'abcdef',
//     printHello() {

//     }
// }

/* 
Class = Cookie-cutter template 

Object = Cookie



let x = prompt("What is your favorite past time?");

if (x == "Reading") {
    alert("Good for you");
}
*/

//TODO Class 

// class User {
//     constructor(name, age, favoriteHobby) {
//         this.name = name;
//         this.age = age;
//         this.favoriteHobby = favoriteHobby;
//     }
//     printHello() {
//         alert (`Hello ${this.name}!`);
//     }
// }

// let getName = prompt("What is your name?");
// let getAge = prompt("What is your age?");
// let getHobby = prompt("What is your favorite hobby?");

// let user = new User(getName, getAge, getHobby);
// let user2 = new User(getName, getAge, getHobby);

// //TODO Inheritance

// class Admin extends User {
//     constructor (name, age, favoriteHobby, isAdmin) {
//         super (name, age, favoriteHobby); 
//         this.isAdmin = false;
//     }
// }

// let admin = new Admin("John", 35, "Golf", true);
// if (admin.isAdmin == true) {
//     // Give administrative access
//     // Allow network permissions/changes
// }

