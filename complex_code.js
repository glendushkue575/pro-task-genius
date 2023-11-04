/* 
Filename: complex_code.js
Content: This code demonstrates a complex implementation of a game called "Guess the Number". 
It involves multiple functions and complex logic to generate and validate random numbers, count the number of guesses, and provide feedback to the user.
*/

// Generate a random number between min and max, inclusive
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Validate user's guess as a valid number
function validateNumberInput(guess) {
  return !isNaN(guess) && guess !== "" && Number.isInteger(Number(guess));
}

// Get user's guess and validate it
function getUserGuess() {
  let guess = prompt("Guess a number between 1 and 100:");
  
  while (!validateNumberInput(guess)) {
    guess = prompt("Invalid input! Guess a number between 1 and 100:");
  }
  
  return parseInt(guess);
}

// Main game logic
function startGuessingGame() {
  const targetNumber = generateRandomNumber(1, 100);
  let numberOfGuesses = 0;
  
  while (true) {
    const guess = getUserGuess();
    numberOfGuesses++;
    
    if (guess === targetNumber) {
      console.log(`Congratulations! You guessed the number ${guess} correctly in ${numberOfGuesses} attempts.`);
      break;
    } else if (guess < targetNumber) {
      console.log(`Try again! The number is higher than ${guess}.`);
    } else {
      console.log(`Try again! The number is lower than ${guess}.`);
    }
  }
}

// Call the main function to start the game
startGuessingGame();