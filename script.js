var current = '';
var randCombo = combinationGenerator(); //random combination/code
var guessesRemaining = 7;
document.getElementById('codebreaker').innerText = "CodeBreaker";

function clear() {
    current = '';
    document.getElementById('current').innerText = "Current Guess: ";
}

function combinationGenerator() { //generates the combination / vault code value
    return '' + (Math.floor(Math.random() * 3) + 1) + (Math.floor(Math.random() * 3) + 1) + (Math.floor(Math.random() * 3) + 1);
}

function guess(num) {
    if (current.length < 3) {
        current += num;
        document.getElementById('current').innerText = "Current Guess: " + current;
    }
    if (current.length === 3) {check();}
}

function check() {
    var history = document.getElementById('history');
    if (current === randCombo) {
        history.innerText += "\n" + "Congrats! You have cracked the code and opened the vault!";
        reset();
    } 
    else if (current < randCombo) {
        history.innerText += "\n" + current + " is too low.";
        guessesRemaining--;
        change();
        clear();
    } 
    else {
        history.innerText += "\n" + current + " is too high.";
        guessesRemaining--;
        change();
        clear();
    }
}

function change() { //changes guess clock to updated version
    document.getElementById('clock').innerText = "Guesses Remaining: " + guessesRemaining;
    if (guessesRemaining <= 0) {
        document.getElementById('history').innerText += "\n" + "Out of guesses! The code was " + randCombo;
        reset();
    }
}

function reset() { //resets the game
    randCombo = combinationGenerator();
    guessesRemaining = 7;
    current = '';
    document.getElementById('clock').innerText = "Guesses left: 7";
    document.getElementById('current').innerText = "Current Guess: ";
}
