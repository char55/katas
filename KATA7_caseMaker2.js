/*
This an extension to the previous Case Maker kata.
Create a new file (and gist) for this kata instead of updating the one from your Case Maker submission.

You'll still be given an input string to convert.
However, this time, you'll also be given a casing style to work with.
The following code block will describe all the casing styles to support.
You may also receive an array of casing styles, and each of these should be applied.

Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

camel, pascal, snake, kebab, title
vowel, consonant
upper, lower
*/




var capitalization = function(sentence) {
  //capitalize all letters
  var words = sentence.split(" ");
  var letters = [];
  var lettersUp = [];
  var remainder = [];
  var output = "";
  var wordsUp =[];

  for(var i=0; i<words.length;i++) {
    letters[i] = words[i].substr(0,1);
    remainder[i] = words[i].substr(1);
    lettersUp[i] = letters[i].toUpperCase()
    wordsUp[i] = lettersUp[i] + remainder[i];
  }
  output = wordsUp[0];
  for(i=1; i<wordsUp.length;i++) {
    output = output+ " " + wordsUp[i];
  }

  return output;
}

//console.log(capitalization("hey there"));

function makeCase(input, style) {
  var output = input;

  if(typeof style != 'string') {
    // style is an array
    // determine process list
    // call makeCase for each
    /*
    camel, pascal, snake, kebab, title
    vowel, consonant
    upper, lower
    */
    var styleOrder=[];
    //styleOrder are the styles in proper order of processing
    // their index number in the array style


    if (style.indexOf("camel")>-1) {
      styleOrder.push(style.indexOf("camel"))
    }
    if (style.indexOf("pascal")>-1) {
      styleOrder.push(style.indexOf("pascal"))
    }
    if (style.indexOf("snake")>-1) {
      styleOrder.push(style.indexOf("snake"))
    }
    if (style.indexOf("kebab")>-1) {
      styleOrder.push(style.indexOf("kebab"))
    }
    if (style.indexOf("title")>-1) {
      styleOrder.push(style.indexOf("title"))
    }


    if (style.indexOf("vowel")>-1) {
      styleOrder.push(style.indexOf("vowel"))
    }
    if (style.indexOf("consonant")>-1) {
      styleOrder.push(style.indexOf("consonant"))
    }


    if (style.indexOf("upper")>-1) {
      styleOrder.push(style.indexOf("upper"))
    }
    if (style.indexOf("lower")>-1) {
      styleOrder.push(style.indexOf("lower"))
    }


  } else if (typeof style === 'string') {
    // if the style is a string
    // make it an array
    // to fit the format
    style = [style];
    styleOrder =[0];

  }


  for (i = 0; i<style.length; i++) {
    // rotate for each style
    // will only run once if only one style

    if (style[styleOrder[i]]==="camel") {
      output = capitalization(output);
      output = output.replace(/ /g,"");
      // then reminimize first letter
      var first = output.substr(0,1);
      var end = output.substr(1);
      output = first.toLowerCase() + end;

    }else if (style[styleOrder[i]]==="pascal") {
      output = capitalization(output);
      output = output.replace(/ /g,"");

    }else if (style[styleOrder[i]]==="title") {
      output = capitalization(output);
      //capitalization of each word

    }else if (style[styleOrder[i]]==="snake") {
      output = output.replace(/ /g,"_");

    }else if (style[styleOrder[i]]==="kebab") {
      output = output.replace(/ /g,"-");

    }else if (style[styleOrder[i]]==="vowel") {
      output = output.replace(/a/g,"A");
      output = output.replace(/e/g,"E");
      output = output.replace(/i/g,"I");
      output = output.replace(/o/g,"O");
      output = output.replace(/u/g,"U");

    } else if (style[styleOrder[i]]==="consonant") {
      output= output.toUpperCase();
      output = output.replace(/A/g,"a");
      output = output.replace(/E/g,"e");
      output = output.replace(/I/g,"i");
      output = output.replace(/O/g,"o");
      output = output.replace(/U/g,"u");

    } else if (style[styleOrder[i]] ==="upper") {
      output = output.toUpperCase();
    } else if (style[styleOrder[i]] === "lower") {
      output = output.toLowerCase();
    }

  }


  return console.log(output);
//  return output;
}



makeCase("this is a string", "camel") === "thisIsAString";
makeCase("this is a string", "pascal") === "ThisIsAString";
makeCase("this is a string", "snake") === "this_is_a_string";
makeCase("this is a string", "kebab") === "this-is-a-string";
makeCase("this is a string", "title") === "This Is A String";
makeCase("this is a string", "vowel") === "thIs Is A strIng";
makeCase("this is a string", "consonant") === "THiS iS a STRiNG";
makeCase("this is a string", ["upper", "snake"]) === "THIS_IS_A_STRING";
