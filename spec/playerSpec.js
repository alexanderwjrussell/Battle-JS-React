var Player = require('../lib/player.js');

describe("Player", function() {

    describe("#initialise", function() {
        it("should initialise a player with an empty name", function() {
            var player = new Player;
        expect(player.name).toEqual("");
        });

        it("should initialise a player with 20 health points", function() {
            var player = new Player;
        expect(player.healthPoints).toEqual(20);
        });

        it("should initialise a player with 0 games won", function() {
            var player = new Player;
        expect(player.gamesWon).toEqual(0);
        });

        it("should initialise a player with 0 games lost", function() {
            var player = new Player;
        expect(player.gamesLost).toEqual(0);
        });
    });

    describe("#Customisation", function() {
        it("should allow a player to initialise their players with their own name", function() {
            var player = new Player("Ali");
        expect(player.name).toEqual("Ali");
        });

        it("should allow players to change their name", function() {
            var player = new Player("Ali");
            player.updateName("Dave");
        expect(player.name).toEqual("Dave");
        });
    });
});