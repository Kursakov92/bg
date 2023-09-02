import readlineSync from 'readline-sync';
import playGame from '../src/index.js';
import randomNumber from '../src/randomNumber.js';
import greeting from '../src/greeting.js';

function findGcd(num1, num2) {
  if (!num2) {
    return num1;
  }

  return findGcd(num2, num1 % num2);
}

function gcd() {
  const number1 = randomNumber(1, 99);
  const number2 = randomNumber(1, 99);
  const correctAnswer = String(findGcd(number1, number2));
  console.log('Find the greatest common divisor of given numbers.');
  const answer = readlineSync.question(`Question: ${number1} ${number2}`);
  console.log(`Your answer: ${answer}`);
  const result = {
    isCorrect: answer === correctAnswer,
    answer,
    correctAnswer,
  };
  return result;
}

export default function brainGcd() {
  const name = greeting();
  playGame(gcd, name);
}
