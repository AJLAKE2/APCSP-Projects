// Manages waves
function WaveController() {
    
    var self = this;
    // The verticle distance between enemies when spawned
    self.offset = -200;
    // Initial number of enemies
    self.enemyCount = 0;
    // Number of Dead Enemies
    self.deadEnemies = 0;
    
    // Generates random integer between min and max parameters
    var generateRandomNumber = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
 
    // Returns a scaled list by applying the scale values to corresponding list values
    self.createEnemyList = function(list, scale) {
        var scaledList = [];
        //Adds a number of enemy times equal to its corresponding scale value
        for (var i = 0; i < scale.length; i++) {
            for (var j = 0; j < scale[i]; j++) {
                scaledList.push(list[i]);
            }
        }
        return scaledList;
    };  
    
    // List of Enemy types
    self.enemyList = [0, 1, 2, 3, 4, 5];
    // List of corresponding percentages/scale values
    self.listScale = [20, 20, 20, 20, 15, 5];
    // Generates scaled list
    self.scaledEnemyList = self.createEnemyList(self.enemyList, self.listScale);
    
    // Generates new wave of enemies
    self.createWave = function() {
        _waveNumber++;     
        for (var i = 0; i < _waveNumber; i++) {
            var randomNumber = generateRandomNumber(0, self.scaledEnemyList.length);
            self.chooseEnemy(self.scaledEnemyList[randomNumber], self.offset * i);   
        }
    };
    
    // Called when an Enemy dies, checks if all the enemies in a wave are dead
    // If so, it creates a new wave
    self.checkWave = function() {
        if (self.deadEnemies == self.enemyCount) {
            self.deadEnemies = 0;
            self.enemyCount = 0;
            self.createWave();
        } 
    };
    
    // Spawns enemies based on the type of enemy
    self.chooseEnemy = function(type, y) {
        switch(type) {
            case 0:
               _enemies.push(new StandardEnemy(y));
                break;
            case 1:
                _enemies.push(new ZigZagEnemy(y));
                break;
            case 2: 
                _enemies.push(new StrongEnemy(y));
                break;
            case 3:
                _enemies.push(new HomingEnemy(y));
                break;
            case 4:
                _enemies.push(new PuffEnemy(y));
                break;
            case 5:
                _enemies.push(new BigEnemy(y));
                break;
            default:
                break;
        }  
    };
    
}