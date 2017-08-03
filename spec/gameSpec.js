var Game = require('../lib/game.js');
var Player = require('../lib/player.js');
describe("Game", function() {
    
    describe("#Initialisation", function() {
        it("should initialise with 0 games played", function() {
            var game = new Game;
            expect(game.gamesPlayed).toEqual(0);
        });

        it("should initialise with 2 players", function() {
            var player1 = new Player;
            var player2 = new Player;
            var game = new Game(player1, player2);
        expect(game.players).toEqual([player1, player2]);
        });
    });

    describe("#Starting a Game", function() {
        // it("", function() {
           
        // expect(...).toEqual(...);
        // });
    });
});