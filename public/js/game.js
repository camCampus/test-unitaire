export const WORDLIST = [
    "aba",
    "pate",
    "croute",
    "lol",
    'pardon',
    "bonjour",
    "puissance",
    'quatre',
    "aqueducs",
    "bavardes",
    "abaque",
    "beigne",
    "cadeau"

]

export const EASY = 1;
export const MEDIUM = 2;
export const HARD = 3;


export default class Game {

    wordToGuess;
    hashWordGuess;
    matchIndex = [];


    getRandomWord(difficulty) {
        let word;

        switch (difficulty) {
            case EASY:
                do {
                    word = this.randomWord()

                } while (word.length > 5)

                return word

            case MEDIUM:
                do {
                    word = this.randomWord()

                } while (word.length <= 5 || word.length > 7)

                return word

            case HARD:
                do {
                    word = this.randomWord()

                } while (word.length <= 7)


                return word
        }
    }

    randomWord() {
        let random = Math.floor(Math.random() * WORDLIST.length);
        return WORDLIST[random];
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
        this.checkIfLetterIsOnTheWord("a");
        let myHash = [...this.hashWordGuess];

        this.macthIndex.forEach((e) => {
            myHash[e] = this.wordToGuess[e];
        })
        return myHash;
    }
}

