var readlineSync = require('readline-sync');
var readLine = readlineSync.question;
var readInt = readlineSync.questionInt;
var readFloat = readlineSync.questionFloat;

var firstRow = readLine("Enter 1st row: ");
var secondRow = readLine("Enter 2nd row: ");
var thirdRow = readLine("Enter 3rd row: ");

var array = [firstRow[0], firstRow[1], firstRow[2],
             secondRow[0], secondRow[1], secondRow[2],
             thirdRow[0], thirdRow[1], thirdRow[2]];

if ((array[0] === "X" && array[0] === array[1] && array[1] == array[2]) || (array[3] === "X" && array[3] === array[4] && array[4] == array[5]) || (array[6] === "X" && array[6] === array[7] && array[7] == array[8]) || (array[0] === "X" && array[0] === array[3] && array[3] == array[6]) || (array[2] === "X" && array[2] === array[4] && array[4] == array[7]) || (array[2] === "X" && array[2] === array[5] && array[5] == array[8]) ||
(array[0] === "X" && array[0] === array[4] && array[4] == array[8]) || 
(array[2] === "X" && array[2] === array[4] && array[4] == array[6])) {
    console.log("X wins");
} else if ((array[0] === "O" && array[0] === array[1] && array[1] == array[2]) || (array[3] === "O" && array[3] === array[4] && array[4] == array[5]) || (array[6] === "O" && array[6] === array[7] && array[7] == array[8]) || (array[0] === "O" && array[0] === array[3] && array[3] == array[6]) || (array[2] === "O" && array[2] === array[4] && array[4] == array[7]) || (array[2] === "O" && array[2] === array[5] && array[5] == array[8]) ||
(array[0] === "O" && array[0] === array[4] && array[4] == array[8]) || 
(array[2] === "O" && array[2] === array[4] && array[4] == array[6])) {
    console.log("O wins");
} else {
    console.log("Neither wins");
}