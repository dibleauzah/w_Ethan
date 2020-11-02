/*No. 1*/
//Note: This is easy enough.
/*
var num = 1;
if (num ===1) {
    console.log('num is equal to 1')
}
*/

/*No. 2*/
//Ditto this.
/*
var num = 0;
if (num === 1) {
    console.log('num is equal to 1');
} else {
    console.log('num is not equal to 1, the value of num is ' + num);
}
*/

/*No. 3-A*/

// var num = 10;
// if (num === 1) {
//     num--;
// } else {
//     num++;
// }
// console.log(num);
/*
var num = 10;
if (num === 1) {
   console.log("Whooray!");
} else {
    console.log(9, 8, 7, 3, 1)}
*/

/*No. 3-B*/
/*
let month = 8;

if (month === 1) {
    console.log('January');
} else if (month === 2) {
    console.log('February'); 
} else if (month === 3) {
    console.log('March');
} else {
    console.log ('Month is not Jan, Feb, or Mar');
}
*/
//Also ask Ethan about this.
/*
var month = "feb";
switch (month) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    default:
        console.log('Nah! Wrong answer! :-)')
}
*/
//Again, another situation where something isn't working.
/*
let x = 10;
function CountDown (justExperimenting) {
for (let i = x; i <= 0; i--);
    return i--;
}
console.log(x);
*/
// Atempt 1

// let num = -52;
// function negativeFiftyTwoTo1066 (){
//     for (let i = num; num >= -52 && i <= 1066; i++){
//     }
// }
// console.log(negativeFiftyTwoTo1066());

/*
Attempt 2
Note to Ethan: This seems to be working better, but it looks like I'm not there yet...
for (let num = -52; num <= 1066; num++){
    console.log(num);
}
//Practice From Book; Pg.-10:
function counting (){
for (let num = 1; num < 6; num++){
}
console.log("I'm counting!");
}
counting();

/*Pg. 14: */
// This is almost "an A" result, but there's still that pesky "undefined" in the output.

// let person = "Seif";
// function greetSomeone (person){
//     if (person == "Seif"){
//         console.log("Tsup dude! :-)")
//     } else {
//         console.log("Who the hell are you? :-(")
//     }
// }
// console.log(greetSomeone(person));

// Note: Still trying to fight the good fight! :-(

// This my range of numbers
// let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// If your number is the same as my number "secret", then you are correct, otherwise you are wrong
// let secret = 8;

// function guessTheNumber(number) {
//     if (number == secret){
//         return ("Yay You got it!");
//     } else {
//         return ("Nope! Keep trying!");
//     }
// }
// console.log(guessTheNumber(8)); 


/*Setting and Swapping.*/
// myNumber = 42;
// myName = "Seif";
// let temp = 42;
// myName = temp;
// myNumber = "Seif";
// console.log(myName, myNumber);

/*Print integers from 2000 to 5280 using a WHILE.*/
/*
let num = 2000;
while (num < 5280){
    console.log(num);
    num = num + 1; 
}
console.log("Tada!");
*/


/*Print multiples of 6 up to 60,000 using a WHILE.*/
// let num = 6;
// while (num < 60000){
//     console.log(num);
//     num = num + 6;
// }
// console.log("Voila! :-)");


/*Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?
function bigCount (){
    let counter = 0;
    for (let i = -3; i <= 3; i++){
        if (i % 2 != 0){
            counter += i;
        } 
    }
    console.log(counter);
}
bigCount();
*/