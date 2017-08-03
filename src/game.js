'use strict';

function Game(player1, player2) {
    this.gamesPlayed = 0;
    this.players = [player1, player2];
}

module.exports = Game;