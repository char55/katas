//You'll be given a string which you'll have to convert to Camel Case. Return the resulting value from your function.
// eg LikeThisNoSpaceAndWithACapitalForEachWord


var camelCase = function(input) {
  // input is string
  var words = input.split(" ");
  var letters = [];
  var lettersUp = [];
  var remainder = [];
  var output = "";

  for(var i=0; i<words.length;i++) {
    letters[i] = words[i].substr(0,1);
    remainder[i] = words[i].substr(1);
    lettersUp[i] = letters[i].toUpperCase()
    output = output + lettersUp[i] + remainder[i];
  }


  return output;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));