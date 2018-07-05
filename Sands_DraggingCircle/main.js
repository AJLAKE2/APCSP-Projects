var bg;
var holdingObject = false;
var numObjects = 10;
var objects = [];

function setup() {
    createCanvas(800,600);
    bg = color(40);
    for (var i = 0; i < numObjects; i++) {
        objects.push(new DraggableCircle(random(0,800), random(0, 600), random(30,80)));
        objects[i].fill = color(random(0,255),random(0,255),random(0,255));
    }
}

function draw() {
    background(bg);
    for (var i = 0; i < objects.length; i++) {
        objects[i].display();
    }
}

// a class called 'DraggableCircle'
function DraggableCircle(x, y, r) {
    
    //explicit reference to self
    var self = this;
    
    //public on the 'class
    self.x = x;
    self.y = y;
    self.r = r;
    self.fill = 0;
    
    //private
    var dragging = false;
    var dx = 0;
    var dy = 0;
    
    self.display = function() {
        
        // drag when the mouse is down
        if (mouseIsPressed) {
            var d = dist(self.x, self.y, mouseX, mouseY);
            
            if (d <= self.r/1.8 && !holdingObject) {
                if(!dragging) {
                    dragging = true;
                    holdingObject = true;
                    dx = self.x - mouseX;
                    dy = self.y - mouseY;
                    objects.move(this)
                }
            }
            if (dragging) {
                self.x = mouseX + dx;
                self.y = mouseY + dy;
            }
        } else {
            dragging = false;
            holdingObject = false;
        }
        
        noStroke();
        fill(self.fill);
        ellipse(self.x, self.y, self.r, self.r);
    };
}

Array.prototype.move = function(object){
  this.splice(this.length - 1,0,this.splice(this.indexOf(object),1)[0]);
};
