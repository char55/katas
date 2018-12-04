
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


function makeSquare(input) {
  // const squareSize = Math.floor(Math.sqrt(input.length));
  const squareSize = 3;
  const square = []
  for (let i = 0 ; i <= squareSize; i++) {
    square[i] = [];
  }

  let i = 0;

  for (let j = 0; j < input.length; j++) {
    if ( j % squareSize === 0 && j !== 0 ) {  
      i++;
    }
    square[i].push(input[j]);
  }

  return square
}


function squareCode(input) {

  const arrayLettersOnly = removeSpaces(input)
  if (arrayLettersOnly !== null ) {
    const squareArray = makeSquare(arrayLettersOnly)

    const coded = [];
    for (let i = 0; i < squareArray[0].length; i++) {
      coded[i] = [];
    }

    for (let i = 0; i < squareArray.length; i++) {
      for (let j = 0; j < squareArray[i].length; j++) {
        coded[j].push(squareArray[i][j])
      } 
    }
    
    let output = ""
    for (let i = 0; i < coded.length; i++) {
      output += coded[i].join("");
      output += " "
      
    }
    console.log(output)
  }
}