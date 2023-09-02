export default function playGame(game, name) {
  for (let i = 0; i < 3; i += 1) {
    const { isCorrect, answer, correctAnswer } = game();
    const userName = name;
    if (isCorrect) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${userName}!`);
      }
    }
    if (!isCorrect) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
      break;
    }
  }
}
