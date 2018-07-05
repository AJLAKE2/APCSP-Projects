var readlineSync = require('readline-sync');
var readLine = readlineSync.question;
var readInt = readlineSync.questionInt;
var readFloat = readlineSync.questionFloat;

var phrase = readLine("Enter text: ");
console.log("The correct text is: ")
console.log(phrase.replace("hte", "the"));