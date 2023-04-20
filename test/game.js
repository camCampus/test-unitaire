
import * as chai from "chai";
import Game, {EASY, HARD, MEDIUM} from "../public/js/game.js";


const expect = chai.expect;
let appGame = new Game("1");
describe('Game engine test', () => {

    let test = appGame.wordToGuess;
    let i = 0//Math.floor(Math.random() * test.length)

    describe("Check difficulty choice", () => {
        it('The word has the good length for easy', () => {
            expect(appGame.getRandomWord(EASY).length).lessThanOrEqual(5);
        })
    })

    describe("Check difficulty choice", () => {
        it('The word has the good length for medium', () => {
            expect(appGame.getRandomWord(MEDIUM).length).greaterThan(5).lessThanOrEqual(7);
        })
    })

    describe("Check difficulty choice", () => {
        it('The word has the good length for hard', () => {
            expect(appGame.getRandomWord(HARD).length).greaterThan(7);
        })
    })

    describe("Check hash for the word to guess", () => {
        it('Hash-Array length is like the generate word length', () => {
            expect(appGame.hashWord().length).equal(appGame.wordToGuess.length)
        })
    })

    describe("Check hash for the word to guess", () => {
        it('Hash-Array letter foreach is = to *', () => {
           appGame.hashWord().forEach((letter) => {
               expect(letter).is.equal("*");
           })
        })
    })

    describe('Check user play', () => {
        it('The user letter choice is in the word', () => {
            expect(appGame.checkIfLetterIsOnTheWord(test[i])).is.true;
        })
    })

    describe('Check user play', () => {
        it('The user letter choice is not in the word', () => {
            expect(appGame.checkIfLetterIsOnTheWord("ô")).is.false;
        })
    })

    describe('Check Hash word update', () => {
        it('If the letter is on the word display the letter in the hash word', () => {
            expect(appGame.updateHashWord()[i]).is.equal(appGame.wordToGuess[i])
        })
    })

    describe('Check for appGame over', () => {
        it('If the number of max try is reaches', () => {
            expect(appGame.isGameOver(9)).is.true
        })
    })

    describe('Check for appGame over', () => {
        it('If the number of max try is not reaches', () => {
            expect(appGame.isGameOver(2)).is.false
        })
    })


})

