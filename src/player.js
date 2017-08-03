'use strict';

function Player(name = "") {
    this.name = name;
    this.healthPoints = 20;
    this.gamesWon = 0;
    this.gamesLost = 0;
}

Player.prototype.updateName = function(name) {
    this.name = name;
}

module.exports = Player;