/*
Write a guessing game where the user has to guess a secret number.
After every guess the program tells the user whether their number was too large or too small.
At the end, the number of tries needed should be printed.

Inputting the same number multiple times should only count as one try.
If the user provides an answer which isn't a number, print an error message and do not count this as a try.
*/



var prompt = require("prompt-sync")();
var answer = "";
var word = "";
var count = 0;
var history = [];
var found;

var number = Math.floor(Math.random() * 10);
//console.log(number);

while (answer != number){
  console.log("Guess a number:")
  answer = prompt(">");
  found = 0;

  if(isNaN(answer)) {
    //if it it's a number
    console.log("That's not a number - try again.\n")
    found = 1;
  }


  for(var i = 0; i < history.length; i++) {
    if (history[i] == answer) {
      //answer was already attempted
      console.log("You already tried that one...")
      found = 1;
      // don't increase count or push answer to history

    }
  }


  if (found == 0) {
    count ++;
    history.push(answer);
    //input was not previously tried
  }



  if (answer == number) {
    if (count == 1) {
      word = " try!";
    }else {
      word = " tries!";
    }
    console.log("CONGRATS!  THAT'S IT!!!!\nAnd it only took " + count + word)

  } else {
      // wrong guess
      if (answer > number) {
        console.log("Too high :(");
      }
      if (answer < number) {
        console.log("Too low :(");
      }

      console.log("That was attempt number " + count + "\n");
  }
}
