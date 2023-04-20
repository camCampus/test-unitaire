export const EASY = "1";
export const MEDIUM = "2";
export const HARD = "3";

export default class Game {

    constructor(diff, wordList) {
        this.wordList = wordList
        this.wordToGuess = this.getRandomWord(diff).split('');
        this.hashWord();
    }


    hashWordGuess;
    matchIndex = [];
    maxTry;
    numbOfTry = 0;



    getRandomWord(difficulty) {
        let word;

        switch (difficulty) {
            case EASY:
                this.maxTry = 8;
                do {
                    word = this.randomWord();

                } while (word.length > 5)

                return word;

            case MEDIUM:
                this.maxTry = 6;
                do {
                    word = this.randomWord();

                } while (word.length <= 5 || word.length > 7)

                return word;

            case HARD:
                this.maxTry = 4;
                do {
                    word = this.randomWord();

                } while (word.length <= 7)

                return word;
        }
    }

    randomWord() {
        let random = Math.floor(Math.random() * this.wordList.length);
        return this.wordList[random];
    }


    hashWord() {
        this.hashWordGuess = [...this.wordToGuess]
        for (let i = 0; i < this.hashWordGuess.length; i++) {
            this.hashWordGuess[i] = "*";
        }

        return this.hashWordGuess;
    }

    checkIfLetterIsOnTheWord(letter) {

        this.macthIndex = [];
        for (let i = 0; i < this.wordToGuess.length; i++) {
            if (this.wordToGuess[i] === letter) {
                this.macthIndex.push(i);
            }
        }
        return this.macthIndex.length !== 0;
    }

    updateHashWord() {
        //this.checkIfLetterIsOnTheWord(this.wordToGuess[0]);
        let myHash = [...this.hashWordGuess];

        this.macthIndex.forEach((e) => {
            myHash[e] = this.wordToGuess[e];
        })
        this.hashWordGuess = [...myHash];
        return myHash;
    }

    isGameOver(numbOfTry) {
        return numbOfTry > this.maxTry;
    }
}


