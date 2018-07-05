function PuffEnemy(y) {
    
    Enemy.call(this, 100, 50, 2, color(200, 0, 200));
    
    this.x = 0;
    this.y = y - this.r/2;
    this.canFire = true;
    this.damage = 10;
    this.rotate = false;
    
    this.dx = 0;
    this.amplitude = 5;
}


PuffEnemy.prototype = Object.create(Enemy.prototype);
PuffEnemy.prototype.constructor = PuffEnemy;
PuffEnemy.prototype.fireDelay = 500;


PuffEnemy.prototype.fireBullet = function() {
    var self = this;
    if (this.canFire && this.y > -this.r) {
        this.rotate = !this.rotate;
        if (this.rotate) {
            _bullets.push(new Bullet(this.x,this.y,8,createVector(8, 8),"enemy",5));
            _bullets.push(new Bullet(this.x,this.y,8,createVector(-8, 8),"enemy",5));
            _bullets.push(new Bullet(this.x,this.y,8,createVector(8, -8),"enemy",5));
            _bullets.push(new Bullet(this.x,this.y,8,createVector(-8, -8),"enemy",5));
        } else {
            _bullets.push(new Bullet(this.x,this.y,8,createVector(0, 8),"enemy",5));
            _bullets.push(new Bullet(this.x,this.y,8,createVector(8, 0),"enemy",5));
            _bullets.push(new Bullet(this.x,this.y,8,createVector(0, -8),"enemy",5));
            _bullets.push(new Bullet(this.x,this.y,8,createVector(-8, 0),"enemy",5));
        }
        this.canFire = false;
        setTimeout(function(){ self.canFire = true;}, self.fireDelay);
    }
};

PuffEnemy.prototype.move = function() {
    this.dx += .01;
    this.x += sin(this.dx)*this.amplitude;
    this.y += this.speed;
};


PuffEnemy.prototype.act = function() {
    this.fireBullet();
    this.move();
};
