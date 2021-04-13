var academy = 'Asia Developer Academy';
console.log(academy.length);
console.log(academy.toUpperCase());
console.log(academy.toLowerCase());
console.log(academy.charAt(6));
console.log(academy.indexOf('ev'));
console.log(academy.lastIndexOf('e'));
console.log(academy.substring(5,14));

// Transform a string into an array using ' ' as deliminter
console.log(academy.split(' '));

var newNumber = 10.23456789;
console.log(newNumber.toFixed(5));
console.log(newNumber.toPrecision(5));

var anotherNumber = 12.987654;
console.log(Math.round(anotherNumber));
console.log(Math.ceil(anotherNumber));
console.log(Math.floor(anotherNumber));

// This will generate random number
console.log(Math.random());

console.log(Math.ceil(Math.random() * 30));


// FIND THE LONGEST WORD IN A STRING 
function theLongestWord(sentence){
  // In the scenario of comparing
  var max = 0;
  var arrSentence = sentence.split(' ');
  for (var i=0; i < arrSentence.length; i++){
    if (arrSentence[i].length > max) {
      max = arrSentence[i].length;
    }
  }
  return max;
}
console.log(theLongestWord('The quick brown fox jump over the lazy dog'));
console.log(theLongestWord('WalidWazini bin Saiful Bahri'));


function calculateVowel(sentence){
    var vowels = 0;
    sentence = sentence.toLowerCase();
    for (var k = 0; k < sentence.length; k++) {
      if (sentence.charAt(k)=='a' || sentence.charAt(k)=='e' || sentence.charAt(k)=='i' || sentence.charAt(k)=='o' || sentence.charAt(k)=='u') {
        vowels++;
      }
    }
    return vowels;
  }
    
  console.log('This is it = ' + calculateVowel('Asia Developer Academy'))
  