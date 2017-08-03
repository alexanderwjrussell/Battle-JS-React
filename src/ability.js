'use strict';

function Ability() {

}

Ability.prototype.randomNumber = function() {
    return Math.round(Math.random() * (9) + 1);
}



module.exports = Ability;