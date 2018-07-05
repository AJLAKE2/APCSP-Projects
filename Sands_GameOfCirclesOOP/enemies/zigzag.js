function ZigZagEnemy(y) {
    
    Enemy.call(this, 10, 25, getRandomInt(3) + 1, color(200, 0, 100));
    this.y = y - this.r/2;
    this.canFire = true;
    this.dx = random(-1,1);
    this.dy = 0;
    this.amplitude = (getRandomInt(40) + 10)/10.0;
    this.damage = 10;
    
}


ZigZagEnemy.prototype = Object.create(Enemy.prototype);
ZigZagEnemy.prototype.constructor = ZigZagEnemy;
ZigZagEnemy.prototype.fireDelay = 600;


ZigZagEnemy.prototype.fireBullet = function() {
    var self = this;
    if (this.canFire && this.y > -this.r) {
        _bullets.push(new Bullet(this.x,this.y,8,createVector(0, 15),"enemy",5));
        this.canFire = false;
        setTimeout(function(){ self.canFire = true;}, self.fireDelay);
    }
};

ZigZagEnemy.prototype.move = function() {
    this.dx += .05;
    this.x += sin(this.dx)*this.amplitude;
    this.y += this.speed
};


ZigZagEnemy.prototype.act = function() {
    this.fireBullet();
    this.move();
};

