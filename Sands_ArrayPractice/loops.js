var scan = require('readline-sync');
var readLine = scan.question;
var readInt = scan.questionInt;
var readFloat = scan.questionFloat;

var c = [1,5,3,7,3,9,6,74,3,1,5,3,7,3,9,6,74,3,1,5,3,7,3,9,6,74,3,1,5,3,7,3,9,6,74,3,1,5,3,7,3,9,6,74,3];
var sum = 0;
for (var i = 0; i < c.length; i++) {
    sum+= c[i]; 
}
console.log(' the sum is : ' + sum);

sum = 0;
for (var i = 0; i < c.length; i++) {
    if (c[i] % 2 == 0) {
        sum+= c[i];
    } 
}
console.log(' the sum of even numbers is : ' + sum);