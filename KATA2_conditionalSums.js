/*
For this kata, you'll be adding only the numbers in the array which match the given condition.

You'll be given an array of numbers and a condition, such as odd or even.
Given this condition, add up only the values which match that condition.
If no values match the condition, return 0.
*/

var conditionalSum = function(values, condition) {
  // Your code here
  var sumOfNumb=0;

  if (condition === "even") {
    // is even
    for(var i=0;i<values.length;i++) {
      if(values[i]%2 == 0) {
      sumOfNumb += values[];
      }
    }

  } else if( condition === "odd") {
    //is odd
    if(values%2 != 0) {
      sumOfNumb += values;
    }
  }
  return sumOfNumb;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));