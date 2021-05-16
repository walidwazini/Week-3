/*  1. Set two variables (m for column, n for row)
            2. Make outer loop with n and inner loop with m
            3.
        */
var m;
var n;
for (n = 7; n >= 1; n--) {   // Descending strairs
    for (m = 1; m <= n; m++) {
        document.write('#');
    }
    document.write('<br>');
}

var i;
var j;
for (j = 1; j <= 8; j++) {    // asending stairs
    for (i = 1; i <= j; i++) {
        document.write('i');
    }
    document.write('<br>');
}