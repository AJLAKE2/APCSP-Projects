function PowerUp() {
    
    Sprite.call(this,width/2,height/2, 25);
    
    this.canDisplay = false;
    this.powerActive = false;
    this.dx = 0;
    this.dy = 0;
    this.amplitude = 10;
    
}

PowerUp.prototype = Object.create(Sprite.prototype);
PowerUp.prototype.constructor = PowerUp;

PowerUp.prototype.startTimer = function(time) {
    var self = this;
    setTimeout(function(){
        self.x = random(0,width);
        self.y = random(0,height);
        self.canDisplay = true;
        self.powerActive = false;
    }, time);  
};

PowerUp.prototype.activate = function() {
    var self = this;
    self.powerActive = true;
    self.canDisplay = false;
    setTimeout(function(){
        _ship.deactivatePowerup();
        self.powerActive = false;
        self.startTimer(random(2000,4000));
    }, 5000);
};

PowerUp.prototype.constrainMovement = function() {
    if (this.x > (width + this.r) || this.x < -this.r) {
        this.x = width - this.x;
    }
    if (this.y > (height + this.r) || this.y < -this.r) {
        this.y = height - this.y;
    }
};

PowerUp.prototype.move = function() {
    this.dx += random(-10,10)/50;
    this.dy += random(-10,10)/50;
    this.x += sin(this.dx)*this.amplitude;
    this.y += sin(this.dy)*this.amplitude;
};

PowerUp.prototype.display = function() {
    if (this.canDisplay && !this.powerActive) {
        noStroke();
        fill(100,100,200);
        this.move();
        this.constrainMovement();
        ellipse(this.x, this.y, this.r, this.r);
    }
};
