'use strict';
// console.log(document.querySelector('.guess-message').textContent);

// document.querySelector('.guess-message').textContent = 'Exellent!';

// document.querySelector('.question').textContent = 7;

// console.log(document.querySelector('.number-input').value);
// document.querySelector('.number-input').value = 15;

// document.querySelector('.score').textContent = 11;

// console.log(document.querySelector('.guess-message').textContent);

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);

  //   console.log(guessingNumber, typeof guessingNumber);

  // No input
  if (!guessingNumber) {
    document.querySelector('.guess-message').textContent = 'Ведите число!';

    // Player Won
  } else if (guessingNumber === secretNumber) {
    document.querySelector('.guess-message').textContent = 'Вы Угадали!!!';
    document.querySelector('.question').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'rgb (9, 250, 21)';
    document.querySelector('.question').style.width = '50rem';
    if (score > highScore) {
      score = highScore;
      document.querySelector('.highscore').textContent = highScore;
    }

   
  } else if (guessingNumber !== secretNumber) {
    if (score > 1) {
      document.querySelector('.guess-message').textContent =
        guessingNumber > secretNumber ? 'Слишком много!!' : 'Слишком мало!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guess-message').textContent = 'Game Over!!!';
      document.querySelector('.score').textContent = 0;
    }
}
// Too high
//   } else if (guessingNumber > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.guess-message').textContent = 'Слишком много!!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.guess-message').textContent = 'Game Over!!!';
//       document.querySelector('.score').textContent = 0;
//     }
//     // Too low
//   } else if (guessingNumber < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.guess-message').textContent = 'Слишком мало!!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.guess-message').textContent = 'Game Over!!!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }


document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.question').textContent = '???';
  document.querySelector('.question').style.width = '25rem';
  document.querySelector('.guess-message').textContent = 'Начни угадывать!';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number-input').value = '';
  document.querySelector('body').style.backgroundColor = 'rgb (0, 0, 0)';
}
);
