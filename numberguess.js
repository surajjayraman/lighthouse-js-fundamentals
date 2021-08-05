let prompt = require("prompt-sync")();

const guessNumber  = () => {
  let randomNum = Math.floor(Math.random() * 51);
  console.log(randomNum);
  //guess declaration
  let guess = '';
  let attempts = 0;
  let previousGuesses = [];
  let isAnswer = false;
  
  while (!isAnswer){    
    guess =  prompt("Guess a number: ");
    console.log(guess);
    if (parseInt(guess) === randomNum){
      attempts++;
      console.log(`You got it! You took ${attempts} attempts!`);
      isAnswer = true;
    } else if (isNaN(guess) === true) {
      console.log("> " + guess);
      console.log("Not a number! Try again!");
    } else if (previousGuesses.includes(guess)) {
      console.log("> " + parseInt(guess))
      console.log("Already guessed!")      
    } else if (parseInt(guess) < randomNum){
      console.log("> " + parseInt(guess))
      console.log("Too Low!");
      previousGuesses.push(guess);  
      attempts++;    
    } else if (parseInt(guess) > randomNum){
      console.log("> " + parseInt(guess))
      console.log("Too High!");
      previousGuesses.push(guess);
      attempts++;
    }
 }
  return isAnswer; 
}

guessNumber();