var Ability = require('../lib/ability.js');

describe("Ability", function() {

    describe("#Random Number", function() {
        it("should produce a number between 1 and 10", function() {
            var ability = new Ability;  
            var number = ability.randomNumber();   
            console.log(number);       
        expect(number > 0  && number < 11).toBeTruthy();
        });
    });

      describe("#Random Number", function() {
        it("should produce a number between 1 and 10", function() {
            var ability = new Ability;  
            var number = ability.randomNumber();   
            console.log(number);       
        expect(number > 0  && number < 11).toBeTruthy();
        });
    });
});