var readlineSync = require('readline-sync');
var readLine = readlineSync.question;
var readInt = readlineSync.questionInt;
var readFloat = readlineSync.questionFloat;

var phrase = readLine("Enter a phrase: ");

function boxString(str) {
    var longLine = "****";
    var shortLine = "*";

    for (i = 0; i < phrase.length; i ++) {
        longLine += "*";
    }
    for (i = 0; i < (phrase.length + 2); i ++) {
        shortLine += " ";
    }
    shortLine += "*";

    console.log(longLine);
    console.log(shortLine);
    console.log("* " + phrase + " *");
    console.log(shortLine);
    console.log(longLine);
}

boxString(phrase);
