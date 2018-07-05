// constructor for enemies
function Enemy(health, radius, speed, color) {
    _waveController.enemyCount++;
    this.t = "enemy";
    this.health = health;
    this.maxHealth = health;
    this.r = radius;
    this.speed = speed;
    this.color = color;
    this.x = random(0,width);
    this.y = -this.r/1.5;
    this.staticBar = false;
}

// performs the task of killing off an enemy
Enemy.prototype.die = function() {
    this.health -= 10;
    if (this.health <= 0) {
        _waveController.deadEnemies++;
        _waveController.checkWave();
        _enemies.splice(_enemies.indexOf(this),1);
    }
};

// manages an enemies movement
Enemy.prototype.constrainMovement = function() {
    // if enemy moves off the screen, it returns to the opposite side
    if (this.x > (width + this.r) || this.x < -this.r) {
        this.x = width - this.x;
    }
    
    //if an enemy moves off the bottom of the scree, it returns to the top
    if (this.y > (height + this.r)) {
        this.y = -this.r;
    }
};

// Checks if enemy is on screen, used to determine whether checking collisions or firing bullets is necessary
Enemy.prototype.checkLocation = function() {
    return (this.y > -this.r && this.y < (height + this.r))
};

// Updates each frame
Enemy.prototype.control = function() {
    this.constrainMovement();
    this.act(); 
    if (this.checkLocation()) 
        calcCollisions(this, _bullets);
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.r, this.r);
    this.showHealthBar();
};

// controls the enemies health bar
Enemy.prototype.showHealthBar = function() {
    noStroke();
    fill(color(255,50,50));
    if (!this.staticBar) {
        rect(this.x - ((this.maxHealth + 4)/4), this.y - (this.r/1.2), (this.health + 4) / 2, this.r/7.5); 
    }
    else {
        if (this.y > -this.r/2)
            rect(width/2 - ((this.maxHealth + 4)/12), 20, (this.health + 4) / 6, 10); 
    }
        
};

// aims bullet towards player
Enemy.prototype.aimBullet = function(speed) {
    var direction = createVector(_ship.x - this.x, _ship.y - this.y);
    direction.normalize();   
    direction.mult(speed);  
    return direction;
};

