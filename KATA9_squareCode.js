
const prompt = require("prompt-sync")();

console.log("Please input string to be converted");
const input = prompt("> ");
console.log(`This is you input ${input}`)

squareCode(input)

function removeSpaces(input) {
  let inputArrayNoSpaces = [];
  const inputArray =  input.split("");

  inputArray.forEach((letter) => {
  if (letter !== " ") {
    inputArrayNoSpaces.push(letter);
  }
  })

  if (inputArrayNoSpaces.length > 81) {
    console.log("The inputed message is too large.  Must be less than 81 characters.");
    return null
  } else {
    return inputArrayNoSpaces
  }
}


function squareCode(input) {

  const arrayLettersOnly = removeSpaces(input)
  if (arrayLettersOnly !== null ) {
    const squareSize = Math.floor(Math.sqrt(inputArrayNoSpaces.length));

    let count = 1;
  
    for (let i = 0; i < inputArrayNoSpaces.length; i++) {
      count ++
      if (count > squareSize) {
        count = 1
      }
    }

  }
}