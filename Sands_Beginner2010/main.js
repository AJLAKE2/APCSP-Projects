var scan = require('readline-sync');
var readLine = scan.question;
var readInt = scan.questionInt;
var readFloat = scan.questionFloat;

var n = readInt("Enter the length of the sequence: ");
var arr = new Array(n);

for (var i = 0; i < n; i++) {
    arr[i] = readInt();
}

var num = 0;

for (var i = 0; i < (n-1); i++) {
    if (arr[i] > arr[i+1]) {
        num++;
    }
}
console.log("\n" + num + " adjacent pairs out of order.");