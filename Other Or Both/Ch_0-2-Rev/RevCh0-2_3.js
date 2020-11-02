//!3—Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?*/
// let oddCounter = 0;
// let i = -300000;
// do {
//     if (i % 2 != 0) {
//         oddCounter = oddCounter + i;
//     }
//     i++;
// } while (i <= 300000)
// console.log(oddCounter);

//? 4-a--Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loops
// let i = 2016;
// do {
//     console.log(i);
//     i = (i - 4) + 1;
//     i--;
// } while (i > 0);

//TODO 4-b--Same problem using a FOR loop.--Solution **partially(!!!)** correct!
// function multsOf4 (){
//     for (num = 2016; num > 0; num = (num - 4) + 1)
//         return num;
// }
// console.log(multsOf4());

//?Print integers from -52 to 1066 using a FOR loop.
//!Attempt 1
// let num = -52;
// function negativeFiftyTwoTo1066 (){
//     for (let i = num; num >= -52 && i <= 1066; i++){
//     }
// }
// console.log(negativeFiftyTwoTo1066());

//!Attempt 2
// for (let num = -52; num <= 1066; num++){
//     console.log(num);
// }

//?Practice From Book, Pg.-10:
// function counting (){
// for (let num = 1; num <= 6; num + 1){
//     console.log (num++);
//     console.log("I'm counting!");
// }
// }
// console.log(counting(1));

// //TODO"This Length, That Value": Given two nums, return arr of length num1 with each value num2. Print "Jinx!" if they are same.
// function thisLength (num1, num2){
//     //Remember to name yr function after the prob. you're trying to solve.//

//     let arr = [];
    
//     for (let i = 0; i <= num1 - 1; i++){
//         arr.push(num2);
//     }
//     if (num1 == num2){
//         console.log("Jinx!");
//     }
//     return arr;
// console.log(thisLength(21, 78));

//!Just Testing...

// let x = 10;

// for (i = 0; i < 10; i++){
//     console.log (i * 3);
// }


//?"Count Positives": Given an array of numbers, create a function to replace the last value with no. of positive values. Example, countPositive([-1, 1, 1, 1]) changes array to [-1, 1, 1, 3] and returns it.

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

//!Double Vision

arr = [1, 2, 3];

function doubleVision (){
    for (let i = arr[0]; i < arr.length; i++){
        return (i * 2);
        return arr * 2;
    }
}
console.log(doubleVision());