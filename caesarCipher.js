function caesar13(str) {
    var answer = ''
    for (var i = 0; i < str.length; i++) {
        // charCodeAt() takes a letter and give the ASCII value 
        var asciiNum = str[i].charCodeAt();
        // 65 = A, 77 = N
        if (asciiNum >= 65 && asciiNum <= 77) {
            // fromCharCode() takes a ASCII num give you the letter
            answer += String.fromCharCode(asciiNum + 13);
        }
        else if (asciiNum >= 78 && asciiNum <= 90) {
            answer += String.fromCharCode(asciiNum - 13);
        }
        // 97 == a, 110 == n
        else if (asciiNum >= 97 && asciiNum <= 110) {
            answer += String.fromCharCode(asciiNum + 13);
        }
        // 111 == m, 122 == z
        else if (asciiNum >= 111 && asciiNum <= 122) {
            answer += String.fromCharCode(asciiNum - 13);
        }
        else {
            // jUST INCLUDE THE CHARACTER, dont change it
            answer += str[i];
        }
    }
    return answer;
}

// [a, b, c, d, e, f, g, h, i, j,  k,  l,  m,  n,  o,  p,  q,  r,  s,  t,  u,  v,  w,  x,   y, z]
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,  25, 26]

document.write(caesar13('A'));
document.write(caesar13('Z'));
document.write(caesar13(' Freecode /Camp'));