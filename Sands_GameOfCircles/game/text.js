var scoreText;
var waveText;

function ScoreText() {
    var self = this;
    
    self.display = function() {
        textSize(18);
        fill(255);
        text("Score: " + deadEnemies, 70, 60);
    };
}

function WaveText() {
    var self = this;
    
    self.display = function() {
        textSize(18);
        fill(240,10,10);
        text("Wave: " + waveNumber, 70, 30);
    };
}