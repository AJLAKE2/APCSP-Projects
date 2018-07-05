var canvasWidth = 1200;
var canvasHeight = 800;

var minWidth = 5;
var maxWidth = canvasWidth/2;

var minHeight = 5;
var maxHeight = canvasHeight/2;

var green;
var purple;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    frameRate(1);
    green = color(17, 137, 64);
    purple = color(128, 102, 159);
}

function draw() {
    background('#282828');
    createRect(green);
    createRect(purple);
    
}

function randomInt(a,b) {
    return Math.floor(random(a + 1, b)) + a;
}

function createRect(fillColor) {
    var rectWidth = randomInt(minWidth, maxWidth);
    var rectHeight = randomInt(minHeight, maxHeight);
    fill(fillColor);
    noStroke();
    rect(randomInt(0, canvasWidth - rectWidth), randomInt(0, canvasHeight - rectHeight), rectWidth, rectHeight);
}

