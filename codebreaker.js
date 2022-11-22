function initialize(){
    solution=parseInt(Math.random() * 998 + 1);
    console.log(solution);
    guessResult=document.getElementById("result");
    remainingGuess=document.getElementById("guessLeft");
    guessesLeft = 7;
    remainingGuess.innerHTML = ("Guesses Remaining: " + guessesLeft);
}

function guessNum(){
    let guess = document.getElementById("numberForm").value;
    if (!(guess <= 999 && guess >= 1)){
        guessResult.innerHTML = ("Error. Please enter a number that fits in the field!");
    }
    else if (guess > solution){
        guessResult.innerHTML = ("The solution is less than the number that you guessed!");
        guessesLeft--;
        remainingGuess.innerHTML = ("Guesses Remaining: " + guessesLeft);
    }
    else if (guess < solution){
        guessResult.innerHTML = ("The solution is greater than the number that you guessed!");
        guessesLeft--;
        remainingGuess.innerHTML = ("Guesses Remaining: " + guessesLeft);
    }
    else{
        guessResult.innerHTML = ("Congratulations!  You have cracked the code!");
    }
    if (guessesLeft <= 0){
        guessResult.innerHTML = ("Sorry!  You have run out of guesses!");
    }
}