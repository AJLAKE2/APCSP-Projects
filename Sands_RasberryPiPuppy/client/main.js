var socket = io.connect('http://10.10.90.110:3000'); // create connection

var yPosition = 0;

function setup() {
    createCanvas(800, 800);
    background(255);
    fill(0);
    
    socket.on('update', function(yPos) {
         if (yPos != null) {
             yPosition = yPos * 3;
             document.getElementById("rangefinder").innerHTML = "Rangefinder Value: " + yPos;
         }
    });
}

// draw every frame
function draw() {
    background('#adeeff');
    createShark();
    createBait();
    socket.emit('update');
}

function createShark() {
    
    var x = (width/2) + 50;
    var y = height/2;
    
    var posX = (x + 180) - 455;
    var posY = yPosition - 455;
    
    var fracX = posX / 455;
    var fracY = posY / 455;
    
    var lookX = fracX * 6;
    var lookY = fracY * 6;
    
    // body
    noStroke();
    fill('#52C5DC');
    ellipse(x-40, y, 400, 150);
    
    // dorsal fin
    fill('#52C5DC');
    push();
    translate(x-40, y-75);
    rotate(-Math.PI / 4);
    ellipse(0,0, 70, 180);
    pop();
    
    // mouth
    fill('#b22323');
    ellipse(x+80, y+30, 40, 20);
    
    // gill 1
    fill('#2395b2');
    ellipse(x-10, y, 5, 60);
    
     // gill 2
    fill('#2395b2');
    ellipse(x-20, y, 5, 60);
    
     // gill 3
    fill('#2395b2');
    ellipse(x-30, y, 5, 60);
    
     // gill 4
    fill('#2395b2');
    ellipse(x-40, y, 5, 60);
    
     // gill 5
    fill('#2395b2');
    ellipse(x-50, y, 5, 60);
    
    // right eye
    fill('#FFFFFF');
    ellipse(x+80, y-26, 40, 40);
    
    // right pupil
    fill('#000000');
    ellipse(x+80+lookX, y-26+lookY, 25, 25);
    
    // left eye
    fill('#FFFFFF');
    ellipse(x+30, y-26, 40, 40);
    
    // left pupil
    fill('#000000');
    ellipse(x+30+lookX, y-26+lookY, 25, 25);
    
    // tail 1;
    fill('#52C5DC');
    push();
    translate(x-240, y+20);
    rotate(Math.PI / 4);
    ellipse(0,0, 60, 180);
    pop();
    
    // tail 2;
    fill('#52C5DC');
    push();
    translate(x-240, y-20);
    rotate(-Math.PI / 4);
    ellipse(0,0, 60, 180);
    pop();
    
    // bottom fin
    fill('#52C5DC');
    push();
    translate(x-40, y+75);
    rotate(-Math.PI / 6);
    arc(0, 0, 90, 50, 0,PI+ 2 * QUARTER_PI, CHORD);
    pop();
}

function createBait() {
    var x = (width/2) + 230;
    var y = height/2;
    
    //bait fish
    fill('#28af55');
    ellipse(x+80, yPosition, 20, 30);
    
    // tail 1;
    fill('#28af55');
    push();
    translate(x+84, yPosition+16);
    rotate(Math.PI / 4);
    ellipse(0,0, 16, 10);
    pop();
    
    // tail 2;
    fill('#28af55');
    push();
    translate(x+76, yPosition+16);
    rotate(-Math.PI / 4);
    ellipse(0,0, 16, 10);
    pop();
    
    // eye
    fill('#FFFFFF');
    ellipse(x+77, yPosition-4, 8, 8);
    
    // pupil
    fill('#000000');
    ellipse(x+77, yPosition-4, 4, 4);
    
    // line
    fill('#000000');
    rect(x+80, -13,1, yPosition);
}
