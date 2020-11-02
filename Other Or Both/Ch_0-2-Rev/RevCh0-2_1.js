
/*Algorithm Coaching With Ethan 09-13-2020*/

/*1—If given 2 no.s to represent your b/day in **either order,** log “How did you know?,” **else** log “Just another day…”*/

// const readline = require('readline-sync');

// // // /*1—If given 2 no.s to represent your b/day in **either order,** log “How did you know?,” **else** log “Just another day…”*/

// function sayBirthday(date1, date2) {

//     let birthDay = 4;
//     let birthMonth = 5;

//     // Checks to see if month and day exist 
//     if (date1 == birthDay && date2 == birthMonth ||
//         date1 == birthMonth && date2 == birthDay) {
//         console.log("How did you know?");
//     } else {
//         console.log("Just another day");
//     }

// }

// sayBirthday(
//     readline.question("What is the number of day (or month)? "),
//     readline.question("What is the number of the month (or day)? ")
// );

/*Given a range of numbers 1 to 4, prompt the user to guess of the numbers that I'm thinking of. If s/he's correct, say "Yay!" If not, say "Try again!"*/
/*First Attempt*/
// let secret = 3; 
// function practiceFunctions (randomNumber){
//      if (randomNumber == secret){
//          return ("Yay! Correct.")
//      } else {
//         return ("Nope! Try again.")
//      }
// }
// console.log(practiceFunctions(6));

// let color = "green";

// function colorGuesser (guessTheColor){
//         if (guessTheColor == color){
//             return ("Yay! Correct!");
//         } else {
//         if (guessTheColor !== color){
//             return ("Nah! Wrong answer!");
//         }
//         console.log(color);
// }
// colorGuesser(guessTheColor(green));



/*2nd Attempt*/

// let x = [1, 2, 3, 4];

// switch (x){
//     case 5:
//         console.log ("Nah! Wrong answer! :-)");        
//     case 7: 
//         console.log ("Nah! Wrong answer! :-)");  
//     case 3:
//         console.log ("Yay! You got it!");
//     default:
//         console.log ("Nope, keep trying! :-)");
// }



// practiceFunctions(randomNumber);

// function sayBirthday(userDate) {
//     if (userDate == 4 && userDate[1] == 5) {
//         return ("How did you know?");
//     }else{
//         return ("Just another day...");
//     }
// }

// console.log(sayBirthday(userDate));

// // What is my birthday? Input below [month, day]
// console.log(sayBirthday(getPrompt()));

/*2—Your function will be given an input parameter “incoming.” Please console.log this value.*/
/*
function inPutPar(x) {
    console.log (x);
}
inPutPar("Ethan is cool.");
*/

/*3—Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?*/
//Also NOT working! :-( //

// let oddCounter = 0;

// let i = -300000;
// do {
//     if (i % 2 != 0) {
//         oddCounter = oddCounter + i;
//     }
//     i++;
// } while (i <= 300000)

// console.log(oddCounter);


// 4--Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loops
// Note 1: Apparently, this one is also wrong--it substracts 5, **NOT 4!**.
// Note 2: Fixed it! I just had to do "(i + 1) - 4," instead of i - 4! :-))

// let i = 2016;

// do {
//     console.log(i);
//     i-= 4;
// } while (i > 0);


// 5—Based on earlier “Countdown by Fours,” given lowNum, highNum, and mult, print multiples of **mult** from highNum to lowNum, using a FOR. For (2, 9, 3), print 9 6 3 (on successive lines).

// Guidelines

// 6—This is based on “Flexible Countdown.” The parameter names are not as helpful, but the problem is essentially identical; don’t be thrown off! Given **4** parameters (param1, param2, param3, param4), print the multiples of param1, starting at param2, and extending to param3. One exception: if a multiple is equal to param4, then skip (don’t print) that one. Do this using a WHILE [loop]. Given (3, 5, 17, 9), print 6, 12, 15 (which are all multiples of **3** between **5** and 17, except for the value of 9

// Note: Still confused, so I'm modifying the question.

// Given an array x, print the first multiples by 2 of its odd numbers.

// function flexibleCountdown(lowNum, highNum, mult) {
//     for (let i = highNum; i >= lowNum;  i--){
//         if (i % mult == 0){
//             console.log(i);
//         }
//     }

// }
// flexibleCountdown(2, 9, 3);
// Expected output: (9, 6, 3)