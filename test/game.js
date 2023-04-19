
import * as chai from "chai";
import Game, {EASY, HARD, MEDIUM} from "../game.js";

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

    describe("Check difficulty choice", () => {
        it('The word has the good length for easy', () => {
            expect(game.getRandomWord(EASY).length).lessThanOrEqual(5);
        })
    })

    describe("Check difficulty choice", () => {
        it('The word has the good length for medium', () => {
            expect(game.getRandomWord(MEDIUM).length).greaterThan(5).lessThanOrEqual(7);
        })
    })

    describe("Check difficulty choice", () => {
        it('The word has the good length for hard', () => {
            expect(game.getRandomWord(HARD).length).greaterThan(7);
        })
    })

})

