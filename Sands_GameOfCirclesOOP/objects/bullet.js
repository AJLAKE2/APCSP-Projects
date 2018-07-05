function Bullet(x,y,r, vector,t, d) {
    
    Sprite.call(this, x, y, r, 0, t);
    
    this.vector = vector;
    this.isEnemy = false;
    this.bulletFill = color(200,200,100);
    this.damage = d;
    
    
    if (this.t == "enemy") {
        this.bulletFill = color(200,100,100);
        this.isEnemy = true;
    }
    
}

Bullet.prototype = Object.create(Sprite.prototype);
Bullet.prototype.constructor = Bullet;

Bullet.prototype.move = function() {
    calcCollisions(this, _bullets);
    this.x += this.vector.x;
    this.y += this.vector.y;
}

Bullet.prototype.checkBoundaries = function() {
    return (this.y > 0 && this.y < height && this.x > -this.r && this.x < (width + this.r));
};

Bullet.prototype.display = function() {
    if (!this.isEnemy)
        powerUpCollisions(_powerUpController, this);
    if (this.checkBoundaries()) {
        this.move();
        noStroke();
        fill(this.bulletFill);
        ellipse(this.x, this.y, this.r, this.r);
    } else {
        _bullets.splice(_bullets.indexOf(this), 1);
    }  
    
}
