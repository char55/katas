var repeatNumbers = function(data) {
  //data is a 2d array
  var numberString=[];
  var search = data.length;

  for(var d=0; d<search; d++) {
    var value = data[d][0]; //value to repeat
    var times = data[d][1]; // number of times to repeat
    numberString[d]="";
    for(var i=0; i<times; i++) {
      numberString[d] = numberString[d] + value.toString();
    }
  }

  return numberString;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

