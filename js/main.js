(() => {
  //variables always go at the top of the file

  var words = ["online", "repeat", "server", "output", "binary"];

  let wordHint =document.querySelector('.current-word'),
      guessBox = document.querySelector('.letter-guess'),
      wrongLetterList = document.querySelector('.wrong-letters'),
      wrongGuesses = 0,
      correctGuesses =0,
      resetScreen = document.querySelector('.reset-screen'),
      currentWord = null,
      resetButton = resetScreen.querySelector('button');
      wrongLetterArray = [];

//when we start the game or reatsrt it, do these thing
// functions go in the middle

  function showResetScreen(message) {
    resetScreen.classList.add('show-piece');
    resetScreen.querySelector('h3').textContent = message;
      wrongLetterList.textContent = "";
  }
  function resetGame() {
    wrongGuesses = 0;
    let gamePieces = Array.from(document.querySelectorAll('.show-piece'));
    gamePieces.forEach(piece => piece.classList.remove('show-piece'));


    init();
  }

  function makeGuess() {
    console.log(this.value);
    if(this.value == " " || this.value.length <1){
      return;
    }
    let currentGuess = this.value;
    if(currentWord.indexOf(this.value) < 0) {
      if (wrongGuesses >= 6) {
        alert('you lose, loser!')
        showResetScreen();
      }else {
        document.querySelector(`.wrong${wrongGuesses}`).classList.add('show-piece');
        wrongGuesses++;

        wrongLetterArray.push(this.value);
        wrongLetterList.textContent = wrongLetterArray.join(" ");

      }
    } else {
        var matchAgainst = currentWord.split("");
        var hintString = wordHint.textContent.split(' ');

      matchAgainst.forEach((letter, index) => {
        if(letter === currentGuess){
          hintString[index]= currentGuess;
          correctGuesses++;
        }
      });
      wordHint.textContent = "";
      wordHint.textContent = hintString.join(" ");

      if(correctGuesses == currentWord.length) {
        showResetScreen('Game over! You won!');
      }


    }

    // if() {
    //   currentWord = words[Math.floor(Math.random()*word.length)];
    // }
  }


//event hanging goes at the bottom
  guessBox.addEventListener('keyup', makeGuess);
  resetButton.addEventListener('click', resetGame);



  function init(){
    //generate a random number and grab the word that corresponds to it in word array
    currentWord = words[Math.floor(Math.random()*words.length)];
    wordHint.textContent = currentWord.split("").map(letter => letter = "_").join(" ");
  }
  init();
})();
