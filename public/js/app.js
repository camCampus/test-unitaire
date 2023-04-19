import Game from "./game.js";

let gameContainer = document.querySelector("#word");
let diffContainer = document.querySelector("#select-diff")

let game = new Game();
let playerDiff;

game.hashWord();

function initGame(id) {
    game.getRandomWord(id);
    game.hashWord()
}

function displayHashWord() {
    game.hashWordGuess.forEach((letter) => {
        console.log(typeof letter)
        let div = document.createElement('div');
        div.classList.add('letter');
        div.innerText += letter;
        gameContainer.appendChild(div);
    })
}

diffContainer.childNodes.forEach((child) => {
    child.addEventListener('click', () => {
        initGame(child.id);
        diffContainer.style.display = "none";
        displayHashWord();
    })
})




