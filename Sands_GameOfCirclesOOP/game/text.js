function ScoreText(x, y, color) {
    UI.call(this, x, y, color);
}

ScoreText.prototype = Object.create(UI.prototype);
ScoreText.prototype.constructor = ScoreText;
ScoreText.prototype.size = 18;

ScoreText.prototype.display = function() {
    textSize(this.size);
    fill(this.color);
    textAlign(LEFT,CENTER);
    text("Score: " + _score, this.x, this.y);
};


function WaveText(x, y, color) {
    
    UI.call(this, x, y, color);
    
}

WaveText.prototype = Object.create(UI.prototype);
WaveText.prototype.constructor = WaveText;
WaveText.prototype.size = 18;

WaveText.prototype.display = function() {
    textSize(this.size);
    fill(this.color);
    textAlign(LEFT,CENTER);
    text("Wave: " + _waveNumber, this.x, this.y);
};

function EnemyText(x, y, color) {
    
    UI.call(this, x, y, color);
    
}

EnemyText.prototype = Object.create(UI.prototype);
EnemyText.prototype.constructor = EnemyText;
EnemyText.prototype.size = 18;

EnemyText.prototype.display = function() {
    textSize(this.size);
    fill(this.color);
    textAlign(LEFT,CENTER);
    text("Enemies: " + (_waveController.enemyCount - _waveController.deadEnemies), this.x, this.y);
};

function MenuText(x, y, color) {
    UI.call(this, x, y, color);
}

MenuText.prototype = Object.create(UI.prototype);
MenuText.prototype.constructor = MenuText;
MenuText.prototype.size = 18;

MenuText.prototype.display = function() {
    textSize(this.size);
    fill(this.color);
    textAlign(CENTER,CENTER);
    text("Press ENTER to begin!", this.x, this.y);
};