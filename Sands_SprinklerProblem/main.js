var readlineSync = require('readline-sync');

var readFloat = readlineSync.questionFloat;

var width = readFloat("W ");
var length = readFloat("L ");


function SystemA(length, width) {
    var pi = 3.14159;
    var halfDiagonal = Math.sqrt((length * length) + (width * width)) / 2;
    var r = width;
    if (width > halfDiagonal) {
        r = halfDiagonal;
    } else {
        r = width;
    }
    var sprinklerArea = (pi * (r * r)) / 2;
    var rectangleArea = length * width;
    var percent = (sprinklerArea / rectangleArea) * 100;
    return Math.round(percent * 100) / 100;
}

function SystemB(length, width) {
    var pi = 3.14159;
    var r = width / 2;
    var sprinklerArea = (pi*(r * r));
    var rectangleArea = length * width;
    var percent = (sprinklerArea / rectangleArea) * 100;
    return Math.round(percent * 100) / 100;
}

function SystemC(length, width) {
    var pi = 3.14159;
    var d = length / 2;
    if (d > width) {
        d = width;
    } else {
        d = length / 2;
    }
    var r = d / 2;
    var sprinklerArea = (pi*(r * r)) * 2;
    var rectangleArea = length * width;
    var percent = (sprinklerArea / rectangleArea) * 100;
    return Math.round(percent * 100) / 100;
}

function FindBest(a,b,c) {
    if (a >= b && a >= c) {
        return "A best";
    } else if (b >= a && b >= c) {
        return "B best";
    } else if (c >= a && c >= b) {
        return "C best";
    } else {
        return "oops";
    }
}

console.log(FindBest(SystemA(length, width), SystemB(length,width), SystemC(length, width)));
console.log("A: " + SystemA(length, width));
console.log("B: " + SystemB(length, width));
console.log("C: " + SystemC(length, width));