function translatePigLatin(string) {
    var str = string.toLowerCase();
    var cons = "";
    if (str.charAt(0) == 'a' || str.charAt(0) == 'e' || str.charAt(0) == 'i' || str.charAt(0) == 'o' || str.charAt(0) == 'u') {
        /// for word starts with vowel
        return str + 'way';
    }
    else {
        for (var i = 0; i < str.length; i++) {
            if (str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u') {
                return str.substring(i) + cons + 'ay';
            }
            else {
                cons += str.charAt(i);
            }
        }
    }
    return str + "ay"
}

translatePigLatin("consonant");


/* if(str.charAt(0)== 'a' || str.charAt(0)== 'e' || str.charAt(0)== 'i'|| str.charAt(0)== 'o' || str.charAt(0)== 'u'){
  /// for word starts with vowel
return str+'way';
  }
  /// for the other words
else{
 var cons="";
 for(var i=0; i <str.length; i++){
 if(str.charAt(i)== 'a' || str.charAt(i)== 'e' || str.charAt(i)== 'i'|| str.charAt(i)== 'o' || str.charAt(i)== 'u'){
  return str.substring(i) + cons + 'ay';
 }
 else {
     cons += str.charAt(i);
    }
   }
  }
  return str + "ay"; */