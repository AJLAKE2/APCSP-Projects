var _ship;
var _enemies = [];
var _score = 0;
var _bullets = [];
var _scoreText;
var _waveText;
var _enemyText;
var _powerBar;
var _healthBar;
var _waveController;
var _waveNumber = 0;
var _powerUpController;
var _gameState;
var _menuText;



function setup() {
    createCanvas(600,600);
    bg = color(40);
    createMenu();
//    startGame();
    _gameState = 1;
    frameRate(60);
}

function draw() {
    background(bg);
    switch(_gameState) {
        case 1:
            controlMenu();
            break;
        case 2:
            controlObjects();
            break;
        default:
            break;
    }
}

function controlObjects() {
    _ship.control();
    _powerUpController.control();
    for (var i = _enemies.length - 1; i > -1; i--) {
        _enemies[i].control();
    }
    for (var i = _bullets.length - 1; i > -1; i--) {
        if (_bullets[i] != null) _bullets[i].control();
    }
    _healthBar.control();
    _powerBar.control();
    _scoreText.control();
    _waveText.control();
    _enemyText.control();
}

function startGame() {
    _ship = new Ship(width/2,height/1.5,30,0,"player");
    _enemies = [];
    _score = 0;
    _bullets = [];
    _waveController = new WaveController();
    _waveNumber = 0;
    _waveController.createWave();
    _powerUpController = new PowerUp();
    _powerUpController.startTimer(2000);
    _healthBar = new HealthBar(10,10,color(255,50,50));
    _powerBar = new PowerBar(40,10,color(0,200,255));
    _scoreText = new ScoreText(70, 77, color(255));
    _waveText = new WaveText(70,30,color(240,10,10));
    _enemyText = new EnemyText(70, 52, color(240,10,10));
}

function createMenu() {
    _menuText = new MenuText(width/2,height/2,color(0,200,0));
}

function controlMenu() {
    _menuText.control();
    if (keyIsDown(13)) {
        startGame();
        _gameState = 2;
    }
}



