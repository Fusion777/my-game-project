/*  Global variables:
    1. const word -> original hidden word that needs to be guessed;
    2. let guessLetter -> one of the letters to choose from, if a 
    current letter clicked exists in the original word, the corresponding
    square shows that letter or letters, if there are more than one such
    letter in the word; that letter becomes inactive in the letters
    to choose; the number of guesses left decreases by one;
    3. let guessWord -> a word that user inputs as a guess, if that word
    corresponds to the original word, the user wins;
    4. constLetters(array) -> after user clicks a letter, the corresponding
    button becomes inactive;
    5. guessCount -> number of guesses left */
    
/*  Global functions:
    1. checkWin -> checks if the const guessWord corresponds to the original
    word; if yes, the user wins and the game ends; if no, counter
    decreases left guesses by one and game waits for next guessLetter
    or guessWord. If no more guesses left in the counter, the user loses.
    2. deactivateLetter -> the chosen letters or buttons become inactive;
    3. countDown -> decreases the number of guesses, until it reaces zero.
    When zero guesses left the user loses and the game ends. */

    // const word;
    // let guessLetter;
    // let guessWord;
    // const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    // let guessCount;
    
    let countDown = document.getElementById("numberElement");
    let count = 6;
    countDown.innerHTML = count;
    const word = "VORTEX";
    const buttons = document.querySelectorAll("button");
    let resultEl = document.getElementById("result");
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            let cnt = Number(countDown.innerHTML) - 1;
            countDown.innerHTML = cnt;
            let buttonLetter = this.innerText;
            if (word.includes(buttonLetter)) {
                resultEl.innerText = `The letter ${buttonLetter} exists in the word!`;
            } else {
                resultEl.innerText = `There is no letter ${buttonLetter} in this word, try again!`;
            }
        })
    })


    const wordButton = document.getElementById("guessWord");
    let inputField = document.getElementById("input");
    inputField.addEventListener("input", function() {
        let inputValue = inputField.value;
        let convertedValue = inputValue.toUpperCase();
        inputField.value = convertedValue;
    })
    wordButton.addEventListener("click", function() {
        let buttonWord = inputField.value;
        inputField.value = "";
        if(buttonWord === word) {
                resultEl.innerText = "You guessed the word!";
        } else {
            resultEl.innerText = "Oops! Try again...";
        }
    })