import Game from "./game.js";


let gameContainer = document.querySelector("#word");
let diffContainer = document.querySelector("#select-diff")


let playerDiff;


function initGame(id) {
    let game = new Game(id);
    game.hashWord()

    return game;
}

function displayHashWord(game) {
    game.hashWordGuess.forEach((letter) => {
        let div = document.createElement('div');
        div.classList.add('letter');
        div.innerText += letter;
        gameContainer.appendChild(div);
    })
}

diffContainer.childNodes.forEach((child) => {
    child.addEventListener('click', () => {
        let actualGame = initGame(child.id);
        diffContainer.style.display = "none";
        displayHashWord(actualGame);
        console.log(game.wordToGuess)
    })
})




