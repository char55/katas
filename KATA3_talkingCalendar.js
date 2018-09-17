/*
You'll be given a date as a string (not a Date object).
The date will always be formatted as YYYY/MM/DD.
You'll be expected to parse the given string and produce a human readable date.

*/
var talkingCalendar = function(date) {
  // Your code here
  var stardate = date.split("/");
  var year = stardate[0];
  var monthNumb = Number(stardate[1]);
  var day = Number(stardate[2]);
  var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var month = monthName[monthNumb-1];


  if (day == 1) {
    sound = "st";
  } else if (day == 2) {
    sound = "nd";
  } else if (day == 3) {
    sound = "rd";
  } else {
    sound = "th";
  }

  var fullDate = month + " " + day + sound + ", " + year;
  return fullDate;
}

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));