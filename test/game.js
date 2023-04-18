
const chai = require('chai');
const Game = require("../game.js");


const expect = chai.expect;
let game = new Game();
describe('Game engine test', () => {

    describe("When a letter is found", () => {
        it('return true if letter found', () => {
            expect(game.guess("a")).is.true;
        })
    });
    describe("When a letter is not found", () => {
        it('return false if letter not found', () => {
            expect(game.guess("b")).is.false;
        })
    })
})