function PowerBar(x, y, color) {
    
    UI.call(this, x, y, color)
    this.length = 0;
    this.shouldAnimate = false;
    this.timeValue = 5000;
}

PowerBar.prototype = Object.create(UI.prototype);
PowerBar.prototype.constructor = PowerBar;
PowerBar.prototype.stepValue = 50;
PowerBar.prototype.width = 15;

PowerBar.prototype.startAnimation = function() {
    this.length = 105;
    this.shouldAnimate = true;
};

PowerBar.prototype.display = function() {
    noStroke();
    fill(this.color);
    if (this.shouldAnimate)
        this.length -= .35;
    if (this.length < 0) {
        this.length = 0;
        this.shouldAnimate = false;
    }
    rect(this.x, this.y, this.width, this.length);  
};

