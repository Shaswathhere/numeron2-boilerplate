// Iteration 8: Making scoreboard functional

var playAgain = document.getElementById('play-again-button')
var scoreBoard = document.getElementById('score-board')


playAgain.addEventListener('click', () => {
    location.href='game.html'
})

let score = localStorage.getItem('score')
if (score === null){
    score = 0
}
scoreBoard.textContent = score
localStorage.clear()