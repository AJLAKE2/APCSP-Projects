function Ship(x, y, r, vector, t) {
    
    Sprite.call(this, x, y, r, vector, t);
    
    this.powerActive = false;
    this.canDie = true;
    this.canFire = true;
    this.triBullet = false;
    this.color = color(100,200,100);
    this.fireDelay = 200;
    this.bulletSpeed = -30;
    this.bulletDamage = 5;
    this.health = 100;
    this.speed = 4;
    this.vector = createVector(0,0);
    this.healthBoost = false;
    
}

Ship.prototype = Object.create(Sprite.prototype);
Ship.prototype.constructor = Ship;

Ship.prototype.fireBullet = function() {
    var self = this;
    if (this.canFire) {
            if (!this.triBullet) {
                _bullets.push(new Bullet(this.x,this.y - this.r/2,8,createVector(0, this.bulletSpeed),"player",this.bulletDamage));
                this.canFire = false;
                setTimeout(function(){ self.canFire = true;}, self.fireDelay);
            } else if (this.triBullet) {
                _bullets.push(new Bullet(this.x,this.y - this.r/2,8,createVector(0, this.bulletSpeed),"player",this.bulletDamage));
                _bullets.push(new Bullet(this.x+this.r/2,this.y - this.r/2,8,createVector(0, this.bulletSpeed),"player",this.bulletDamage));
                _bullets.push(new Bullet(this.x-this.r/2,this.y - this.r/2,8,createVector(0, this.bulletSpeed),"player",this.bulletDamage));
                this.canFire = false;
                setTimeout(function(){ self.canFire = true;}, self.fireDelay);
            }
    }
};

Ship.prototype.die = function(damage) {
    if (this.canDie) {
            if (this.health > 0) {
                this.health -= damage ? damage : 5;
            } else {
                this.health = 100;
//                console.log("enemies: " + _enemies.length);
//                console.log("bullets: " + _bullets.length);
//                startGame();
                _gameState = 1;
            }
        }
};

Ship.prototype.getKeys = function() {
    if ((keyIsDown(65) || keyIsDown(LEFT_ARROW))  && (this.x > 0)) {
            this.horizontal = -1;
        } else if ((keyIsDown(68) || keyIsDown(RIGHT_ARROW)) && (this.x < width)) {
            this.horizontal = 1;
        } else {
            this.horizontal = 0;
        }

        if ((keyIsDown(87) || keyIsDown(UP_ARROW)) && (this.y > 0)) {
            this.vertical = 1;
        } else if ((keyIsDown(83) || keyIsDown(DOWN_ARROW)) && (this.y < height)) {
            this.vertical = -1;
        } else {
            this.vertical = 0;
        }
        
        if (keyIsDown(32)) {
            this.fireBullet();
        }
    this.vector.set(this.horizontal, this.vertical);
    this.vector.normalize();
    this.vector.mult(this.speed);
}

Ship.prototype.choosePowerUp = function(num) {
    switch (num) {
        case 0:
            this.color = color(10, 200, 200);
            this.r *= 0.5;
            break;
        case 1:
            this.color = color(10, 100, 200);
            this.fireDelay /= 3;
            break;
        case 2:
            this.canFire = false;
            this.color = color(50, 250, 50);
            this.r *= 3;
            this.canDie = false;
            break;
        case 3:
            this.color = color(100, 200, 200);
            this.triBullet = true;
            this.fireDelay /= 2;
            break;
        case 4:
            this.color = color(50,250,50);
            this.healthBoost = true;
            break;
        default:
            break;
        }
};


Ship.prototype.activatePowerup = function() {
    this.powerActive = true;
    this.choosePowerUp(getRandomInt(5));
    _powerBar.startAnimation();  
};

Ship.prototype.deactivatePowerup = function() {
    this.powerActive = false;
    this.color = color(100, 200, 100);
    this.r = 30;
    this.fireDelay = 200;
    this.canDie = true;
    this.triBullet = false;
    this.healthBoost = false;
    this.canFire = true;
};

Ship.prototype.animatePowerUp = function() {
    if(this.healthBoost && this.health < 100) {
        this.health += 0.5;
    }  
};


Ship.prototype.move = function() {
    this.x += this.vector.x;
    this.y -= this.vector.y;
};

Ship.prototype.display = function() {
    this.move();
    calcCollisions(this, _bullets);
    calcCollisions(this, _enemies);
    powerUpCollisions(_powerUpController, this);
    this.animatePowerUp();
    this.getKeys();
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.r, this.r);
};
