//!No.--1: Print 1-255; Result: Correct! :-)
//Confession: I added the "=" only after seeing their solution! :-P

// for (let i = 1; i <= 255; i++){
//     console.log(i);
// }

//?No.--2: Print Odds 1-255; Result: Correct (Attempt 2)!

//?Attempt 1; HA! HA! HA! (True/False)
// function printOdds1to255 (){
//     for (let i = 1; i <= 255; i++){
//         oddsOnly = (i % 2 !== 0);
//         console.log(oddsOnly);
//     }
// }

//?Attempt 2
//?WTF!!! Did **I--Seif--** just do this?! :-O
// printOdds1to255();

// function printOdds1to255 (){
//     for (let i = 1; i <= 255; i++){
//         if (i % 2 !== 0) {
//             console.log(i++);
//         }
//     }
// }

//TODO/No.--3: Print Ints and Sum 0-255;
//TODO/_My Wrong Attempt... :-( And I feel SO close! (Note: Writing this meta-comment before looking up the solution!) 

// let counter = 0;
// for (let i = 0; i <= 255; i++){
//     counter = counter + i;
// }
// console.log(counter);

// //* Print the sum of integers from -100 to 100 

// let counter = 0;
// for (let i = -100; i <= 100; i++){
//     counter = counter + i;
// }
// console.log(counter);

//!Iterate And Print Array; Wrong! Even after looking at their solution... :-((
//!For review with Coach Ethan! :-)

//* Iterate through a given array, backwards, printing each value 

// arr = [1, 2, 3];

// function arrayValDecrease (arr){
//     for (i = arr.length - 1; i >= 0; i--){
//         console.log(arr[i]);
//     }
// }
// arrayValDecrease(arr);

// Array Indices
// arr = [58, 67, 89];
// At index of 0, 58
// At index of 1, 67 == array.length - 2
// At index of 2, 89 == array.length - 1
// The length of our array 3 == array.length

// i.length - 1;

//!Later attempt, inspired by book's solution to "Find And Print Max"
// let arr = [];
// let i = arr.length;
// let counter = arr[0];

// function iterateAndPrintArr (counter){
//     while (counter < i){
//         return counter;
//         counter++;
//     }
// }
// console.log(iterateAndPrintArr([1, 2, 3]));

// console.log(iterateAndPrintArr([1, 2, 3]));

//?Find And Print Max: Wrong!
//?Copying book's solution...

//?My incomplete/wrong solution-attempt...
// let arr = [];

// function findPrintMax (){
//     for (arr[i]; ){

//     }
// }

//?Book's solution, slightly modified:
//?Apparently, not working either(!): "ReferenceError: max is not defined"
// function findPrintMax (arr){
//     if (arr.length == 0){
//         console.log ("Empty array, no max value.");
//         return;
//     }
//     var max = arr[0];
//     for (var i = 1; i < arr.length; i++){
//         if (arr[i] > max){
//             max = arr[i];
//         }
//     }
// }
// console.log("Max is " + max);

//TODO/_Get And Print Avg; Wrong!
//TODO/_Haven't tried the book's solution yet...
// let arr = [];

// function getArrAverage (Avg){
//     for (let i = arr[0]; i < arr.length; i++){
//         Avg = (i++) / arr.length;
//     }
// }
// console.log(getArrAverage([1, 2, 3]));