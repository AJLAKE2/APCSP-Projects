// standard enemy constructor
function StandardEnemy(y) {
    // inherits from Enemy
    Enemy.call(this, 30, 25, 4, color(200, 100, 100));
    this.y = y - this.r/2;
    this.damage = 50;
}

StandardEnemy.prototype = Object.create(Enemy.prototype);
StandardEnemy.prototype.constructor = StandardEnemy;

// unique movement
StandardEnemy.prototype.move = function() {
    this.y += this.speed
};

// frame update
StandardEnemy.prototype.act = function() {
    this.move();
};

