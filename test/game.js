
import * as chai from "chai";
import Game, {EASY, HARD, MEDIUM} from "../public/js/game.js";

const expect = chai.expect;
let game = new Game();
describe('Game engine test', () => {

    let test = game.wordToGuess;
    let i = Math.floor(Math.random() * test.length)

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

    describe("Check hash for the word to guess", () => {
        it('Hash-Array length is like the generate word length', () => {
            expect(game.hashWord().length).equal(game.wordToGuess.length)
        })
    })

    describe("Check hash for the word to guess", () => {
        it('Hash-Array letter foreach is = to *', () => {
           game.hashWord().forEach((letter) => {
               expect(letter).is.equal("*");
           })
        })
    })

    describe('Check user play', () => {
        it('The user letter choice is in the word', () => {
            expect(game.checkIfLetterIsOnTheWord(test[i])).is.true;
        })
    })

    describe('Check user play', () => {
        it('The user letter choice is not in the word', () => {
            expect(game.checkIfLetterIsOnTheWord("ô")).is.false;
        })
    })

    describe('Check Hash word update', () => {
        it('If the letter is on the word display the letter in the hash word', () => {
            expect(game.updateHashWord()[i]).is.equal(game.wordToGuess[i])
        })
    })

})

