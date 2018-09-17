/*
You'll be given two numbers, the total of a transaction, and the amount of cash given to the cashier.
Both of these numbers will be represented as whole numbers in cents. Therefore $10 will be represented as 1000.

Your function calculateChange should return an object which describes the total amount of change for the cashier to give back.
Omit any types of change that you shouldn't give back,
i.e. if you don't give back a twenty dollar bill, don't include it in the results.

N.B. Although pennies are not used in circulation, still calculate the amount of pennies to give back.

Valid denominations are as follows:

Twenty dollars
Ten dollars
Five dollars
Two dollars
One dollar
Quarter (25¢)
Dime (10¢)
Nickel (5¢)
Penny (1¢)


*/

var calculateChange = function(total, cash) {

  var diff = cash - total;
//let's declare everything first
//as a zeroe
  var numbTwenties = 0;
  var numbTens = 0;
  var numbFives = 0;
  var numbTwos = 0;
  var numbOnes = 0;
  var numbQuarters = 0;
  var numbDimes = 0;
  var numbNickels = 0;
  var numbPenny = 0;

  if (diff>500) {
//counting the amount of five's
    var temp = diff;

    while (temp>=500) {
      temp=temp-500;
      numbFives++;
      //counts the amount of five dollars in the change
    }

    if (numbFives>=4) {
      //knowing the amount of fives we can figure out how many twentys/tens
      numbTwenties = Math.floor(numbFives/4);
      numbFives = numbFives - (numbTwenties*4);
    } else if (numbFives>=2) {
      numbTens = Math.floor(numbFives/2)
      numbFives = numbFives - (numbTens*2);
    }


  }


  coinsInChange = diff % 500;
//do similar for the small change
  if (coinsInChange>=100) {
    //toonies&loonies
    while (coinsInChange>=100) {
      coinsInChange= coinsInChange - 100;
      numbOnes++;
    }
  }

  if (numbOnes>=2) {
    numbTwos = Math.floor(numbOnes/2);
    numbOnes = numbOnes - (numbTwos*2);
  }



  while (coinsInChange>=5) {
    coinsInChange= coinsInChange - 5;
    numbNickels++;
  }

  if (numbNickels>=2) {
    numbQuarters = Math.floor(numbNickels/5);
    numbNickels = numbNickels - (numbQuarters*5);
    numbDimes = Math.floor(numbNickels/2);
    numbNickels = numbNickels - (numbDimes*2);
  }

  numbPenny = coinsInChange;

//making the object
  var numbChange = [numbTwenties, numbTens, numbFives, numbTwos, numbOnes, numbQuarters, numbDimes, numbNickels, numbPenny];
  var bills = ["twentyDollars", "tenDollars", "fiveDollars", "twoDollars", "oneDollar", "quarter", "dime", "nickel", "penny"];

  var change = {}

  for(var i=0; i<bills.length; i++) {
    if (numbChange[i]!=0) {
      //skip over all the zeroes
      change[bills[i]] = numbChange[i];
    }
  }


  return change;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
