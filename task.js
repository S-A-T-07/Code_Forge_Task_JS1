const targetNumber = Math.floor(Math.random() * 100) + 1;
let numberOfGuesses = 0;

function checkGuess() {
    // Get the user's guess
    const userGuess = parseInt(document.getElementById("guess").value);
    numberOfGuesses++;

    // Get the message element
    const message = document.getElementById("message");

    if (userGuess === targetNumber) {
        message.textContent = `Congratulations! You guessed the correct number ${targetNumber} in ${numberOfGuesses} guesses.`;
    } else if (userGuess < targetNumber) {
        message.textContent = `Try again. The number is higher than ${userGuess}. Guesses so far: ${numberOfGuesses}`;
    } else {
        message.textContent = `Try again. The number is lower than ${userGuess}. Guesses so far: ${numberOfGuesses}`;
    }
    // Clear the input field
    document.getElementById("guess").value = "";
}