var powerUpController;
function PowerUp() {
    
    var self = this;
    
    self.x = random(0,width);
    self.y = random(0,height);
    self.r = 25;
    self.canDisplay = false;
    self.powerActive = false;
    
    self.display = function() {
        if (self.canDisplay && !self.powerActive) {
            noStroke();
            fill(100,100,200);
            ellipse(self.x, self.y, self.r, self.r);
        }
        
    };
    
    self.startTimer = function(time) {
        setTimeout(setPowerUp, time);
    };
    
    function setPowerUp() {
        self.x = random(0,width);
        self.y = random(0,height);
        self.canDisplay = true;
        self.powerActive = false;
    }
    
    self.activate = function() {
        self.powerActive = true;
        self.canDisplay = false;
        setTimeout(deactivate, 5000);
    };
    
    function deactivate() {
        ship.deactivatePowerup();
        self.powerActive = false;
        self.startTimer(random(2000,4000));
    }
}