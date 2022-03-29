"use strict";

let secretNumber = 15; //Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highScore = 0;

const changeTextContent = function (message, selector) {
  return (document.querySelector(`.${selector}`).textContent = message);
};

changeTextContent(score, "score");
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    changeTextContent("WAIT!! You guessed no number!!", "message");
  } else if (guess === secretNumber) {
    //WHEN THE PLAYER GUESS THE NUMBER
    changeTextContent("THAT'S THE NUMBER!!! CONGRATS!!!", "message");
    changeTextContent(secretNumber, "number");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    //Change highscore
    if (score > highScore) {
      highScore = score;
      changeTextContent(highScore, "highscore");
    }
  } else if (guess !== secretNumber) {
    //IF THE PLAYER MISSES
    if (score > 1) {
      changeTextContent(
        guess > secretNumber ? "Too high..." : "Too low...",
        "message"
      );
      score--;
      changeTextContent(score, "score");
    } else {
      changeTextContent(0, "score");
      changeTextContent("You lost!", "message");
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  //RESET NUMBERS
  score = 10;
  secretNumber = 15; //Math.trunc(Math.random() * 20) + 1;

  //RESET THE TEXTS
  changeTextContent("?", "number");
  document.querySelector(".guess").value = "";
  changeTextContent("Start guessing...", "message");
  changeTextContent(score, "score");

  //RESET STYLES
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
