// 1. How many row
var lines = 9;
// 2. TO create object in row    
for (var j = 0; j < lines; j++) {
    // 3. To create object in column
    for (var i = 0; i < lines; i++) {
        //  - i is column, j is row
        // If i and j has the same output, the tile will be #
        if ((i % 2 == 0 && j % 2 == 0) || (i % 2 == 1 && j % 2 == 1)) {
            document.write('#')
        }
        // 
        else {
            document.write('0')
        }
    }
    document.write('<br/>')
}
