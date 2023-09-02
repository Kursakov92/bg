import readlineSync from 'readline-sync';
import playGame from '../src/index.js';
import randomNumber from '../src/randomNumber.js';
import greeting from '../src/greeting.js';

function isEven(n) {
  return n % 2 === 0;
}

function evenGame() {
  const number = randomNumber(1, 99);
  console.log(`Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const result = {
    isCorrect: answer === correctAnswer,
    answer,
    correctAnswer,
  };
  return result;
}

export default function brainEven() {
  const name = greeting();
  playGame(evenGame, name);
}
