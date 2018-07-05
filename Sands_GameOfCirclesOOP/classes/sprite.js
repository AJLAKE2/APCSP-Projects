function Sprite(x, y, r, vector, t) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.vector = vector;
    this.t = t;
}

Sprite.prototype.control = function() {
    this.display();
}
