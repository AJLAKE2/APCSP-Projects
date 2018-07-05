var healthBar;

function HealthBar() {
    
    var self = this;
    self.x = 10;
    self.y = 10;
    self.fillColor = color(255,50,50);
    
    self.display = function() {
        if (!ship.canDie) {
            self.fillColor = color(50, 250, 50);
        } else {
            self.fillColor = color(255,50,50);
        }
        noStroke();
        fill(self.fillColor);
        rect(self.x, self.y, 15, ship.health + 5);  
    };
    
}