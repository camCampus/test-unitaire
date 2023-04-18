
import Chai from "chai";
import Game from "../game.js";


const expect = Chai.expect;
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