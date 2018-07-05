function setup() {
    createCanvas(600,600);
    bg = color(40);
    startGame();
}

function draw() {
    background(bg);
    ship.display();
    for (var i = enemies.length - 1; i > -1; i--) {
        enemies[i].display();
    }
    for (var i = bullets.length - 1; i > -1; i--) {
        if (bullets[i] != null) bullets[i].display();
    }
    powerUpController.display();
    healthBar.display();
    powerBar.display();
    scoreText.display();
    waveText.display();
}

function restart() {
//    enemies = [];
//    bullets = [];
//    ship.x = width/2;
//    ship.y = height/1.5;
//    waveController.deadEnemies = 0;
//    waveController.enemyCount = 1;
//    waveController.createWave();
}

function startGame() {
    ship = new Spaceship(width/2,height/1.5,30,4,"player");
    enemies = [];
    deadEnemies = 0;
    bullets = [];
    waveController = new WaveController();
    waveController.enemyCount = 1;
    waveController.createWave();
    waveNumber = 1;
    powerUpController = new PowerUp();
    powerUpController.startTimer(2000);
    healthBar = new HealthBar();
    powerBar = new PowerBar();
    scoreText = new ScoreText();
    waveText = new WaveText();
//    enemies.push(new Enemy(5, 40, 25, "enemy"));
}



