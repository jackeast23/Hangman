// HTTP (Hypertext Transfer Protocol)
// Request - What do we want to do
// Response - What was actually done

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

// Making an HTTP request
const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4) {
        const data = JSON.parse(e.target.responseText)
        console.log(data)
    }
})

request.open('GET', 'http://puzzle.mead.io/puzzle')
request.send()