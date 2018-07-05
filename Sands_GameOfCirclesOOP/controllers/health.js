function HealthBar(x, y, color) {
    
    UI.call(this, x, y, color);
    
}

HealthBar.prototype = Object.create(UI.prototype);
HealthBar.prototype.constructor = HealthBar;

HealthBar.prototype.display = function() {
    if (!_ship.canDie) {
        this.color = color(50, 250, 50);
    } else {
        this.color = color(255,50,50);
    }
    noStroke();
    fill(this.color);
    rect(this.x, this.y, 15, _ship.health + 5);  
};