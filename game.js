export const WORDLIST = [
    "bonjour",
    "jour",
    "puissance",
    "table",
    "paaaaf",
    'un',
    'quatre',
    "unmotsuperlong",
    "poidsjgoidfjgodfjgofdjgoidfj",
]

export const EASY = 1;
export const MEDIUM = 2;
export const HARD = 3;
export default class Game {


    guess(letter) {
        if (letter === "a") {
            return true
        }
        return false
    }

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
        return  WORDLIST[random];
    }
}

