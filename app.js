// Iteration 1: Making the play button in the index.html functional.

var playButton = document.querySelector('.play')
playButton.addEventListener('click',() => {
    window.location.href = 'game.html'
})

// Description: When the play button is clicked the game.html page should be opened
