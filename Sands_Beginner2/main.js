var readlineSync = require('readline-sync');
var readLine = readlineSync.question;
var readInt = readlineSync.questionInt;
var readFloat = readlineSync.questionFloat;

var phrase = readLine("Enter start day: ");

if (phrase === "U") {
    Sun();
} else if (phrase === "M") {
    Mon();
} else if (phrase === "T") {
    Tue();
} else if (phrase === "W") {
    Wed();
} else if (phrase === "R") {
    Thu();
} else if (phrase === "F") {
    Fri();
} else if (phrase === "S") {
    Sat();
}

function Sun() {
    console.log("  Sun   Mon   Tue   Wed   Thu   Fri   Sat  ");
    generateLine();
    console.log("*  1  *  2  *  3  *  4  *  5  *  6  *  7  *");
    generateLine();
    console.log("*  8  *  9  *  10 *  11 *  12 *  13 *  14 *");
    generateLine();
    console.log("*  15 *  16 *  17 *  18 *  19 *  20 *  21 *");
    generateLine();
    console.log("*  22 *  23 *  24 *  25 *  26 *  27 *  28 *");
    generateLine();
    console.log("*  29 *  30 *     *     *     *     *     *");
    generateLine();
    
}

function Mon() {
    console.log("  Sun   Mon   Tue   Wed   Thu   Fri   Sat  ");
    generateLine();
    console.log("*     *  1  *  2  *  3  *  4  *  5  *  6  *");
    generateLine();
    console.log("*  7  *  8  *  9  *  10 *  11 *  12 *  13 *");
    generateLine();
    console.log("*  14 *  15 *  16 *  17 *  18 *  19 *  20 *");
    generateLine();
    console.log("*  21 *  22 *  23 *  24 *  25 *  26 *  27 *");
    generateLine();
    console.log("*  28 *  29 *  30 *     *     *     *     *");
    generateLine();
    
}

function Tue() {
    console.log("  Sun   Mon   Tue   Wed   Thu   Fri   Sat  ");
    generateLine();
    console.log("*     *     *  1  *  2  *  3  *  4  *  5  *");
    generateLine();
    console.log("*  6  *  7  *  8  *  9  *  10 *  11 *  12 *");
    generateLine();
    console.log("*  13 *  14 *  15 *  16 *  17 *  18 *  19 *");
    generateLine();
    console.log("*  20 *  21 *  22 *  23 *  24 *  25 *  26 *");
    generateLine();
    console.log("*  27 *  28 *  29 *  30 *     *     *     *");
    generateLine();
    
}

function Wed() {
    console.log("  Sun   Mon   Tue   Wed   Thu   Fri   Sat  ");
    generateLine();
    console.log("*     *     *     *  1  *  2  *  3  *  4  *");
    generateLine();
    console.log("*  5  *  6  *  7  *  8  *  9  *  10 *  11 *");
    generateLine();
    console.log("*  12 *  13 *  14 *  15 *  16 *  17 *  18 *");
    generateLine();
    console.log("*  19 *  20 *  21 *  22 *  23 *  24 *  25 *");
    generateLine();
    console.log("*  26 *  27 *  28 *  29 *  30 *     *     *");
    generateLine();
    
}

function Thu() {
    console.log("  Sun   Mon   Tue   Wed   Thu   Fri   Sat  ");
    generateLine();
    console.log("*     *     *     *     *  1  *  2  *  3  *");
    generateLine();
    console.log("*  4  *  5  *  6  *  7  *  8  *  9  *  10 *");
    generateLine();
    console.log("*  11 *  12 *  13 *  14 *  15 *  16 *  17 *");
    generateLine();
    console.log("*  18 *  19 *  20 *  21 *  22 *  23 *  24 *");
    generateLine();
    console.log("*  25 *  26 *  27 *  28 *  29 *  30 *     *");
    generateLine();
    
}

function Fri() {
    console.log("  Sun   Mon   Tue   Wed   Thu   Fri   Sat  ");
    generateLine();
    console.log("*     *     *     *     *     *  1  *  2  *");
    generateLine();
    console.log("*  3  *  4  *  5  *  6  *  7  *  8  *  9  *");
    generateLine();
    console.log("*  10 *  11 *  12 *  13 *  14 *  15 *  16 *");
    generateLine();
    console.log("*  17 *  18 *  19 *  20 *  21 *  22 *  23 *");
    generateLine();
    console.log("*  24 *  25 *  26 *  27 *  28 *  29 *     *");
    generateLine();
    console.log("*  30 *     *     *     *     *     *     *");
    generateLine();
    
}

function Sat() {
    console.log("  Sun   Mon   Tue   Wed   Thu   Fri   Sat  ");
    generateLine();
    console.log("*     *     *     *     *     *     *  1  *");
    generateLine();
    console.log("*  2  *  3  *  4  *  5  *  6  *  7  *  8  *");
    generateLine();
    console.log("*  9  *  10 *  11 *  12 *  13 *  14 *  15 *");
    generateLine();
    console.log("*  16 *  17 *  18 *  19 *  20 *  21 *  22 *");
    generateLine();
    console.log("*  23 *  24 *  25 *  26 *  27 *  28 *  29 *");
    generateLine();
    console.log("*  30 *     *     *     *     *     *     *");
    generateLine();
    
}

function generateLine() {
    var line = ""
    for (i = 0; i < 43; i ++) {
        line += "*";
    }
    console.log(line);
}