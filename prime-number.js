//My answer
var range = 100
for (var i=2; i <= range; i++) {
    var check = 0;
    for (var j =2; j < i; j++) {
        if (i % j == 0) {
            check = 1;
        }
    }
    if (i > 1 && check == 0) {
      console.log(i);
      document.write(i + '<br>')
    }
}


//exercise answwer (checking + listing out)
function isPrime(num){
  for (var i=2; i<num; i++){
    if(num%i==0){
      return false;
    }
  }
  return true;
  }

document.write(isPrime(23));