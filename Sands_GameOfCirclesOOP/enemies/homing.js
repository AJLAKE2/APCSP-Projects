function HomingEnemy(y) {
    
    Enemy.call(this, 10, 15, 3, color(200));
    
    this.vector;
    this.damage = 25;
    this.y = y - this.r/2;
    
}


HomingEnemy.prototype = Object.create(Enemy.prototype);
HomingEnemy.prototype.constructor = HomingEnemy;

HomingEnemy.prototype.move = function() {
    this.vector = createVector(_ship.x - this.x, _ship.y - this.y);
    this.vector.normalize();   
    this.vector.mult(this.speed);
    this.x += this.vector.x;
    this.y += this.vector.y;
};


HomingEnemy.prototype.act = function() {
    this.move();
};

