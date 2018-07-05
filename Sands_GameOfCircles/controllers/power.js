var powerBar;

function PowerBar() {
    
    var self = this;
    self.x = 40;
    self.y = 10;
    self.length = 0;
    self.fillColor = color(0,200,255);
    var timeValue = 5000;
    
    self.display = function() {
        noStroke();
        fill(self.fillColor);
        if (self.length < 0)
            self.length = 0;
        rect(self.x, self.y, 15, self.length);  
    };
    
    self.startAnimation = function() {
        self.length = 95;
        setTimeout(incrementValues, 50);
    }
    
    function incrementValues() {
        self.length -= 1;
        timeValue -= 50;
        if (timeValue > 0) {
            setTimeout(incrementValues, 50);
        } else {
            timeValue = 5000;
        }
    }
    
}