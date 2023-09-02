import readlineSync from 'readline-sync';
import playGame from '../src/index.js';
import randomNumber from '../src/randomNumber.js';
import greeting from '../src/greeting.js';

function isPrime(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
}

function primeGame() {
  const number = randomNumber(1, 99);
  console.log(`Answer "yes" if given number is prime. Otherwise answer "no". \nQuestion: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const result = {
    isCorrect: answer === correctAnswer,
    answer,
    correctAnswer,
  };
  return result;
}

export default function brainPrime() {
  const name = greeting();
  playGame(primeGame, name);
}
