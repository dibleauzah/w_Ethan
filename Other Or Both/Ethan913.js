// /*Algorithm Coaching With Ethan 09-13-2020*/

// /*1—If given 2 no.s to represent your b/day in **either order,** log “How did you know?,” **else** log “Just another day…”*/

let month = 4;
let day = 5;

let userDate = prompt("What is my birthday?");
if (userDate == month || userDate == day) {
    console.log ("How did you know?")
}else{
    console.log ("Just another day...")
}

/*2—Your function will be given an input parameter “incoming.” Please console.log this value.*/

function inPutPar(incoming) {
    console.log (incoming);
}
inPutPar("Ethan is cool.");

/*3—Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?*/

let oddCounter = 0;

let i = -300000;
do {
    if (i % 2 != 0) {
        oddCounter = oddCounter + i;
    }
    i++;
} while (i <= 300000)

console.log(oddCounter);

// 4--Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loops

let i = 2016;

do {
    console.log(i);
    i = i - 4;
    i--;
} while (i > 0);


// 5—Based on earlier “Countdown by Fours,” given lowNum, highNum, and mult, print multiples of **mult** from highNum to lowNum, using a FOR. For (2, 9, 3), print 9 6 3 (on successive lines).

/*Answer Here*/

// 6—This is based on “Flexible Countdown.” The parameter names are not as helpful, but the problem is essentially identical; don’t be thrown off! Given **4** parameters (param1, param2, param3, param4), print the multiples of param1, starting at param2, and extending to param3. One exception: if a multiple is equal to param4, then skip (don’t print) that one. Do this using a WHILE [loop]. Given (3, 5, 17, 9), print 6, 12, 15 (which are all multiples of **3** between **5** and 17, except for the value of 9

/*Answer Here*/