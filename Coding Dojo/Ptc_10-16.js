/*"This Length, That Value": Given two nums, return arr of length num1 with each value num2. Print "Jinx!" if they are same.*/

/*
function thisLength (num1, num2){
//Remember to name yr function after the prob. you're trying to solve.//
    let arr = [];
    
    for (let i = 0; i <= num1 - 1; i++){
        arr.push(num2);
    }
    if (num1 == num2){
        console.log("Jinx!");
    }
    return arr;
}
console.log(thisLength(100, 7));
*/

/*Fahrenheit to Celsius.*/
/*
function fahrenheitToCelsius (fDegrees){
    return 9/5 * fDegrees + 32
}

console.log(fahrenheitToCelsius(50));
*/

/*"Count Positives": Given an array of numbers, create a function to replace the last value with no. of positive values. Example, countPositive([-1, 1, 1, 1]) changes array to [-1, 1, 1, 3] and returns it.*/

// function countPositives (arr){
//     let count = 0;
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > 0){
//             count++;
//         }
//         if (i == arr.length - 1){
//             arr[i] = count;
//             return arr;
//         }
//     }
// }
// console.log(countPositives([-1, 1, 1, 1]));

// function countNegatives(arr) {

//     let count = 0;
    
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] < 0){
//          count++;
//         }
//         if (i == arr.length - 1){
//             arr[i] = count;
//             return arr;
//         }
//     }
// }
// console.log(countNegatives([-2, 3, -4, 5]));

/*"Add Seven to Most; Paraphrased For Clarity": given an array, retun a(n) new/updated array, adding 7 to all but the first element(s).*/

let x = [];
x.push(1);
console.log(x);

function addSevenToMost (arr){
    let arr2 = [];

    for (let i = 0; i < arr.length; i++){
        if (i == 0){
            arr2.push(arr[i]);
        } else {
            arr2.push(arr[i] + 7);
        }   
    }
    return arr2;
}
console.log(addSevenToMost([1, 2, 3, 4]));