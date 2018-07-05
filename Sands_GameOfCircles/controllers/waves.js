var waveController;
var waveNumber = 1;

function WaveController() {
    
    var self = this;
    
    self.enemyCount = 0;
    self.deadEnemies = 0;
    
    self.createWave = function() {
        waveNumber++;
        for (var i = 0; i < self.enemyCount; i++) {
            enemies.push(new Enemy(random(0,width), random(-width/2,0), 25, "enemy"));
        }
    };
    
    self.checkWave = function() {
        if (self.deadEnemies == self.enemyCount) {
            self.enemyCount *= 2;
            self.deadEnemies = 0;
            self.createWave();
        }
    }
}