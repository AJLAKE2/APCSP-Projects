var enemies = [];
var deadEnemies = 0;
function Enemy(x,y,r,t) {
    
    var self = this;
    
    self.x = x;
    self.y = y;
    self.r = r;
    self.t = t;
    self.speed = getRandomInt(3) + 1;
    
    var fireDelay = 600;
    var canFire = true;
    var dx = random(-1,1);
    var dy = 0;
    var amplitude = (getRandomInt(40) + 10)/10.0;
    
    function move() {
        dx += .05;
//        dy += .03;
        self.x += sin(dx)*amplitude;
        if (self.x > width || self.x < 0) {
            self.x = width - self.x;
        }
//        self.y += sin(dy)*4;
        if (self.y > height) {
            self.y = 0;
        }
        self.y += self.speed
    }
    
    function fireBullet() {
        if (canFire) {
            bullets.push(new Bullet(self.x,self.y + self.r/2,8,15,"enemy"));
            canFire = false;
            setTimeout(delayFire, fireDelay);
        }
    }
    
    function delayFire() {
        canFire = true;
    }
    
    self.display = function() {
        calcCollisions(self, bullets);
        fireBullet();
        noStroke();
        move();
        fill(200,0,100);
        ellipse(self.x, self.y, self.r, self.r);
    }
    
    self.die = function() {
        enemies.splice(enemies.indexOf(self),1);
//        enemies.push(new Enemy(5, 40, 25, "enemy"));
    };
}