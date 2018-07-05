var scan = require('readline-sync');
var readLine = scan.question;
var readInt = scan.questionInt;
var readFloat = scan.questionFloat;

var word = readLine("Enter Statement: ");

for (var i = 0; i < word.length; i++) {
    console.log(createSpace(i) + word.charAt(i));
}

function createSpace(x){
    var spaces = "";
    for (var i = 0; i < x; i++) {
        spaces += "   ";
    }
    return spaces;
}