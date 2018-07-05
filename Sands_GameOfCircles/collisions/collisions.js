function calcCollisions(collider,objects) {
    for (var i = objects.length-1; i > -1; i--) {
        if (dist(collider.x,collider.y,objects[i].x,objects[i].y) < (collider.r/2 + objects[i].r/2) && (collider.t != objects[i].t)) {
            if (collider.t == "player") {
                if (enemies.indexOf(objects[i]) != -1) {
//                    waveController.enemyCount *= 2;
//                    waveController.createWave();
                    waveController.deadEnemies++;
                    waveController.checkWave();
                }
                objects.splice(i,1);
                if (enemies.indexOf(objects[i]) != -1)
                    deadEnemies++;
                ship.die();
            } else if (collider.t == "enemy") {
                if (enemies.indexOf(collider) != -1) {
                    enemies[enemies.indexOf(collider)].die();
                    deadEnemies++;
//                    waveController.enemyCount *= 2;
//                    waveController.createWave();
                    waveController.deadEnemies++;
                    waveController.checkWave();
                } else {
                    objects.splice(objects.indexOf(collider),1);
                }
                objects.splice(i,1);
            } 
        }
    }
}


function powerUpCollisions(powerUpObject, playerObject) {
    if (dist(powerUpObject.x, powerUpObject.y, playerObject.x, playerObject.y) < (playerObject.r/2 + powerUpObject.r/2) && powerUpObject.canDisplay == true) {
        powerUpObject.activate();   
        ship.activatePowerup();
    }
}

