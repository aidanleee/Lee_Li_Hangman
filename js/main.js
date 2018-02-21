(() => { //allways include this as syntax
  // variables always go at the the og the file "let, const, var"

  // this is an array that holds words. Make array for each cateragory
  var words = ["party", "javascript", "vampire", "pancake", "hockey"];

  // storing the random word in a variable
  let currentWord = words[Math.floor(Math.random()*words.length)],
    wordHint = document.querySelector('.current-word'); //call this wordhint. to find go into doucment. use the query selector to find this css class
    wordHint.textContent = currentWord.split("").map(letter => letter = "__").join(" ");
    guessBox = document.querySelector('.letter-guess');

  // Functions go in the middle (logic, etc)
  function makeGuess() {
    //debugger;
    console.log(this.value);
  }

  // Event handling goes at the bottom
  guessBox.addEventListener('keyup', makeGuess);



  // when we start the game. or restart it, do these things
  function init() {
    // generate a random number that corresponds to it in the word array
    var random = Math.random();
  }

  init();
})();
