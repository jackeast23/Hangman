const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const statusEl = document.querySelector('#status')
const game1 = new Hangman('Car Parts', 6)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage

console.log(game1.puzzle)
console.log(`You have ${game1.numGuesses} remaining guesses`)

window.addEventListener('keypress', function (e) {
    const guess = e.key
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
})