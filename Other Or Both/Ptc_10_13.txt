/*Print integers from -52 to 1066 using a FOR loop.
*/
/*Attempt 1
let num = -52;
function negativeFiftyTwoTo1066 (){
    for (let i = num; num >= -52 && i <= 1066; i++){
    }
}
console.log(negativeFiftyTwoTo1066());
*/
/*Attempt 2
for (let num = -52; num <= 1066; num++){
    console.log(num);
}
/* Practice From Book; 
Pg.-10:
function counting (){
for (let num = 1; num < 6; num++){
}
console.log("I'm counting!");
}
counting();
-------------------*/
/*Pg. 14: */
// let person = "Seif";
// function greetSomeone (person){
//     if (person == "Seif"){
//         console.log("Tsup dude! :-)")
//     } else {
//         console.log("Who the hell are you? :-(")
//     }
// }

// greetSomeone(person);
//Note to Ethan: I tried using ""==" but it didn't work as expected.*/

/*Setting and Swapping.
myNumber = 42;
myName = "Seif";
let temp = 42;
myName = temp;
myNumber = "Seif";
console.log(myName, myNumber);*/

/*Print integers from 2000 to 5280 using a WHILE.
let num = 2000;
while (num < 5280){
    console.log(num);
    num = num + 1; 
}
console.log("Tada!");
*/

/*Print multiples of 6 up to 60,000 using a WHILE.
let num = 6;
while (num < 60000){
    console.log(num);
    num = num + 6;
}
console.log("Voila! :-)");
*/

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
