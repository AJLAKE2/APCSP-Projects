function Sprite(x, y, vector, team) {
    this.x = x;
    this.y = y;
    this.vector = vector;
    this.team = team;
}

Sprite.prototype.control = function() {
    this.move();
    this.display();
}