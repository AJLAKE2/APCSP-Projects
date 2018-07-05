function UI(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
}

UI.prototype.control = function() {
    this.display();
}
