function StrongEnemy(y) {
    
    Enemy.call(this, 100, 60, 1, color(200, 100, 0));
    this.y = y - this.r/2;
    this.canFire = true;
    this.damage = 10;
    
}


StrongEnemy.prototype = Object.create(Enemy.prototype);
StrongEnemy.prototype.constructor = StrongEnemy;
StrongEnemy.prototype.fireDelay = 1000;


StrongEnemy.prototype.fireBullet = function() {
    var self = this;
    if (this.canFire && this.y > -this.r) {
        _bullets.push(new Bullet(this.x,this.y,15,this.aimBullet(5),"enemy",20));
        this.canFire = false;
        setTimeout(function(){ self.canFire = true;}, self.fireDelay);
    }
};

StrongEnemy.prototype.move = function() {
    if (this.y < height / 3)
        this.y += this.speed
};


StrongEnemy.prototype.act = function() {
    this.fireBullet();
    this.move();
};
