// let arr = [];

// function CountDown (number){
//     for(let i = number; i >= 0; i = i - 1){
//         arr.push(i);
//     }
//     return arr;
// }
// console.table(CountDown(10));

/*

// Countdown:
//! Create a function that accepts a no. as input. 

//* Return a new array that counts down by one, from the no. (as array's 0th element) down to 0 (last element). 

//todo How long is the array?

//? This array has a purpose of holding values
let arr = [];

//! The next chunk of code puts items into the empty array container
function CountDown(number){
    for (let i = 0; i <= number; i++){
        // push number - 1 onto the array
        arr.push(number - i);
        // console.log the current (ith) element
        alert(arr[i]);
    }
}
This is the return 
CountDown(10);

//todo this is the length of the array 
console.log(`The array is ${arr.length} elements long`)


*/

//* Create a function called countdown that accepts an empty array as an input 

//* pushes the value of the number each iteration, starting from the 0th element of the array, and subtracts after each iteration



// //! The tools you need to solve the problem

// let i = 4;
// let arr = [];

// while (i >= 0) {
//     arr.push(i);
//     i--;
// }

// console.log(arr);


// let arr = [1, 3, 5, 7, 9, 13];
// let i = arr.length;

// let counter = 0;

// for (let i = arr.length; i >= 1; i--){
//     if (arr[i] > arr[1]){
//     counter++;
//     }
// }
// console.log(counter);
/*
let arr = [];

function CountDown (number) {
    for (let i = number; i >= 0; i--){   
        arr.push(i);
    }
    console.table(arr);
    console.log(`The length of the array is ${arr.length}`);
}
CountDown(10);



function GreaterThan2nd (arr){
    let arr2 = [];
    if (arr.length <= 1){
        console.log(`This array is STUPID!`);
    }
    for (let i = arr.length - 1; i >= 0; i--){
        if (arr[i] > arr[1]){
        arr2.unshift(arr[i]);     
        }
    }
    console.log(arr2.length);
    return arr2;
}
console.log(GreaterThan2nd([0, 2, 4, 5, 6, 1]));

*/
/*
function TooBig (array){
    if (array[0] > array.length) {
      console.log ("Too big!");  
    } else if (array[0] < array.length) {
      console.log ("Too small!");  
    } else {
    console.log("Just right!");
    }
}
TooBig([3, 1, 6]);


function fahrenheitToCelsius(fDegrees){
    return parseFloat(((fDegrees - 32) * 5/9).toFixed(2)); 
}

console.log(fahrenheitToCelsius(-10));



function celsiusToFahrenheit(cDegrees){
    return parseFloat((cDegrees * 9/5 + 32)).toFixed(1);
}
console.log(celsiusToFahrenheit(-20));


*/

// function double (array){
//     let array2 = []; 
//     for (let i = 0; i <= array.length - 1; i++) {
//     array2.push(array[i] * 2);
//     }
//     return array2;
// }
// console.log(double([2, 4, 8]));
/*
let arr = [0, 3, 5, 8, 10, 45];
//expect: [0, 4, 5, 9, 10, 46]

// function increment (){
//    for (i = 0; i < arr.length; i++){
//        if (i % 2 == 1 ){
//            arr[i]++;
//        }
//     }
// }

function increment() {
   for (i = 1; i < arr.length; i += 2){
           arr[i]++;
    }
}

increment();
console.log(arr);

*/

/*Previous Length*/

// let array = ["Ethan", "Seif", "Ethan_gf", "Hakym"]

// function replaceWithPrevItemLength (){
//     let array2 = array;
//     array.splice(0, 1, undefined)

//     for (let i = 1; i <= array2.length - 1; i++){
//         array.splice(i, 1, array2[i].length);
//     }

// }
// replaceWithPrevItemLength();
// console.log(array);

//  //? array.splice(starting position, amount of elements being deleted, the elements being inserted)

// //! Different solution

//  function previousLengths(array) {
//     for (var i = array.length - 1; i > 0; i--) {
//       array[i] = array[i - 1].length;
//     }
//     return array;
//   }
//   console.log(previousLengths(['there', 'is', 'no', 'cow', 'level']));

// function negative (array){
//    let array2 = [];
//     for (let i = 0; i < array.length; i++){
//         if (array[i] > 0){
//             array2.push(array[i] * -1);
//         } else {
//             array2.push(array[i]);
//         }
//     }
//     return array2;
// }
// console.log(negative([1, -3, 5]));

// let array = [1, 2, 3, 4, 5, 6];
// //          [6, 2, 4, 3, 5, 1]

// function swapCenter (array){
//     let temp;
//     for (let i = 0; i < array.length / 2; i += 2){
//         let temp = array[i];
//         array[i] = array[array.length - 1 - i];
//         array[array.length - 1 - i] = temp;
//     }

//     return array;
// }

// console.log(swapCenter(array));

/*
let a = 1;
let b = 2;
let temp;

let temp = a;
a = b;
b = temp;
*/

// let x = "1";

// if (x === 1) {
//     console.log("Yes");
// } else {
//     console.log("No");
// }