function calcCollisions(collider,objects) {
    for (var i = objects.length-1; i > -1; i--) {
        if (dist(collider.x,collider.y,objects[i].x,objects[i].y) < (collider.r/2 + objects[i].r/2) && (collider.t != objects[i].t)) {
            if (collider.t == "player") {
                if (_enemies.indexOf(objects[i]) != -1) {
                    _ship.die(objects[i].damage);
                    objects[i].die();
                    _score++;
                } else if (_bullets.indexOf(objects[i]) != -1) {
                    _ship.die(objects[i].damage);
                    objects.splice(objects.indexOf(collider),1);
                }
            } else if (collider.t == "enemy") {
                if (_enemies.indexOf(collider) != -1) {
                    _enemies[_enemies.indexOf(collider)].die();
                    _score++;
                } else {
                    objects.splice(objects.indexOf(collider),1);
                }
                objects.splice(i,1);
            } 
        }
    }
}


function powerUpCollisions(powerUpObject, checkObject) {
    if (dist(powerUpObject.x, powerUpObject.y, checkObject.x, checkObject.y) < (checkObject.r/2 + powerUpObject.r/2) && powerUpObject.canDisplay == true) {
        powerUpObject.activate();   
        _ship.activatePowerup();
    }
}



