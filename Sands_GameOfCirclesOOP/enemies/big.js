function BigEnemy(y) {
    
    Enemy.call(this, 800, 600, 0.5, color(140, 0, 0));
    this.x = width/2;
    this.y = y - this.r/2;
    this.damage = 100;
    this.staticBar = true;
    
}


BigEnemy.prototype = Object.create(Enemy.prototype);
BigEnemy.prototype.constructor = BigEnemy;


BigEnemy.prototype.move = function() {
//    if (this.y < (height/2))
    this.y += this.speed;
};


BigEnemy.prototype.act = function() {
    this.move();
};
