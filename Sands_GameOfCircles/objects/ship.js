var ship;

function Spaceship(x, y, r, s, t) {
    
    //explicit reference to self
    var self = this;
    
    //public on the 'class
    self.x = x;
    self.y = y;
    self.r = r;
    self.s = s;
    self.t = t;
    self.powerActive = false;
    self.canDie = true;
    self.health = 90;
    
    var vertical = 0;
    var horizontal = 0;
    var fireDelay = 200;
    var canFire = true;
    var shipColor = color(100,200,100);
    var bulletSpeed = 30;
    var triBullet = false;
    
    function fireBullet() {
        if (canFire && !triBullet) {
            bullets.push(new Bullet(self.x,self.y - self.r/2,8,bulletSpeed,"player"));
            canFire = false;
            setTimeout(delayFire, fireDelay);
        } else if (triBullet) {
            bullets.push(new Bullet(self.x,self.y - self.r/2,8,bulletSpeed,"player"));
            bullets.push(new Bullet(self.x,self.y - self.r/2,8,bulletSpeed,"player", 10));
            bullets.push(new Bullet(self.x,self.y - self.r/2,8,bulletSpeed,"player", -10));
            canFire = false;
            setTimeout(delayFire, fireDelay);
        }
    }
    
    function delayFire() {
        canFire = true;
    }
    
    function getKeys() {
        if ((keyIsDown(65) || keyIsDown(LEFT_ARROW))  && (self.x > 0)) {
            horizontal = -1;
        } else if ((keyIsDown(68) || keyIsDown(RIGHT_ARROW)) && (self.x < width)) {
            horizontal = 1;
        } else {
            horizontal = 0;
        }

        if ((keyIsDown(87) || keyIsDown(UP_ARROW)) && (self.y > 0)) {
            vertical = 1;
        } else if ((keyIsDown(83) || keyIsDown(DOWN_ARROW)) && (self.y < height)) {
            vertical = -1;
        } else {
            vertical = 0;
        }
        
        if (keyIsDown(32)) {
            fireBullet();
        }
        
        self.x += horizontal * self.s;
        self.y -= vertical * self.s;
    }
    
    self.display = function() {
        calcCollisions(self, bullets);
        calcCollisions(self, enemies);
        powerUpCollisions(powerUpController, self);
        getKeys();
        noStroke();
        fill(shipColor);
        ellipse(self.x, self.y, self.r, self.r);
    };
    
    self.die = function() {
//        console.log("player dead");
//        shipColor = color(200,5,5);
        if (self.canDie) {
            if (self.health > 0) {
                self.health -= 30;
            } else {
                self.health = 90;
                startGame();
            }
        }
        
    };
    
    self.activatePowerup = function() {
        self.powerActive = true;
        choosePowerUp(getRandomInt(4));
        powerBar.startAnimation();
        
    };
    
    self.deactivatePowerup = function() {
        self.powerActive = false;
        shipColor = color(100, 200, 100);
        this.r = 30;
        fireDelay = 200;
        self.canDie = true;
        triBullet = false;
    };
    
    function choosePowerUp(num) {
        switch (num) {
            case 0:
                shipColor = color(10, 200, 200);
                self.r *= 0.5;
                break;
            case 1:
                shipColor = color(10, 100, 200);
                fireDelay /= 3;
                break;
            case 2:
                shipColor = color(50, 250, 50);
                self.r *= 3;
                self.canDie = false;
                break;
            case 3:
                shipColor = color(100, 200, 200);
                triBullet = true;
            default:
                break;
        }
    }
    
}