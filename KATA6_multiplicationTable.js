/*
You'll be given a number, this is the highest value of your multiplication table.
Your job is to generate a multiplication table for the values from 1 to the provided value.

Each cell should have the same size, as well as at least 1 space of padding around each value.

Your function should be called multiplicationTable and it should return a string for the multiplication table output.
Do not use console.log inside the function.
*/

var multiplicationTable = function(maxValue) {
  // Your code here
  var number =1;
  var row = [];
  var table = "";
  var formating = "";

  for (i=0; i<maxValue; i++) {
    formating = formating + "+----";
  }

  table = formating + "+" + "\n";

  for (var i=0; i<maxValue;  i++) {
    row[i] = number;
    table = table + "| " + (number) + " ";
    if (number<10) {
      table = table + " ";
    }
    number++;
  }



  table = table + "|\n" + formating + "+" + "\n";

  for (var v=2; v<maxValue; v++) {
    for (var h=0; h<maxValue; h++) {
      number = row[h];
      multiple = number*v;
      table = table + "| " + multiple + " ";
      if (multiple<10) {
        table = table + " ";
      }
    }
    table = table + "|\n" + formating + "+" + "\n";
  }

  return table;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));