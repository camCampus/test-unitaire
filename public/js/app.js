import Game from "./game.js";


let gameContainer = document.querySelector("#word");
let diffContainer = document.querySelector("#select-diff");
let btnPlayerGuess = document.querySelector('#btn-player-guess');
let input = document.querySelector('#player-guess')
let scoreContainer = document.querySelector('#score');

let game;



diffContainer.childNodes.forEach((child) => {
    child.addEventListener('click', () => {
        game = new Game(child.id, wordList)
        console.log(game.wordToGuess)
        displayHashWord(game.hashWordGuess)
        diffContainer.style.display = "none";
        displayScore();

    })
})

btnPlayerGuess.addEventListener('click', () => {
    if (game.isGameOver(getPlayerValue(game))) {
        alert("Game Over")
        window.location.reload();
    }
})


function displayHashWord(word) {

    word.forEach((letter) => {
        let div = document.createElement('div');
        div.classList.add('letter');
        div.innerText += letter;
        gameContainer.appendChild(div);
    })
}

function getPlayerValue(game) {
    var letters = /^[A-Za-z]+$/;
    let displayWord = [];
    if (input.value !== '' && input.value.length === 1 && input.value.match(letters)) {
        gameContainer.innerHTML = "";
        scoreContainer.innerHTML = "";
        if (!game.checkIfLetterIsOnTheWord(input.value)) {
            game.numbOfTry ++ ;
        }
        displayHashWord(game.updateHashWord());
        displayScore();
        return game.numbOfTry;
    }
    alert("Incorrect input")
}

function displayScore() {
    let maxScore = document.createElement('p');
    maxScore.innerHTML = "Max try = " + game.maxTry;
    let tryScore = document.createElement('p');
    tryScore.innerHTML = "try = " + game.numbOfTry;
    scoreContainer.appendChild(tryScore)
    scoreContainer.appendChild(maxScore)
}

