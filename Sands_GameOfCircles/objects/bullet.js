var bullets = [];

function Bullet(x,y,r,s,t,d) {
    
    d = d ? d : 0;
    
    var self = this;
    
    self.x = x;
    self.y = y;
    self.r = r;
    self.s = s;
    self.t = t;
    self.d = d
    
    var isEnemy = false;
    var angle;
    var bulletFill = color(200,200,100);
    var index;
    var direction;
    
    
    if (self.t == "enemy") {
        bulletFill = color(200,100,100);
        isEnemy = true;
        direction = createVector(ship.x - self.x, ship.y - self.y);
        direction.normalize();        
    } 
    
    function move() {
        calcCollisions(self, bullets);
        if (isEnemy) {
            self.x += direction.x * s;
            self.y += direction.y * s;
        } else {
            self.y -= s;
            self.x += d;
        }
    }
    
    
    self.display = function() {
        if (self.y > 0 && self.y < height) {
            move();
            noStroke();
            fill(bulletFill);
            ellipse(self.x, self.y, self.r, self.r);
        } else {
            index = bullets.indexOf(self);
            bullets.splice(index, 1);
        }        
    }
}
