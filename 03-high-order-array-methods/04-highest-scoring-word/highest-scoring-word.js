function highestScoringWord(wordsString) {
  const wordsArr = wordsString.toLowerCase().split(' ');

  let score = 0;
  let highestWord = '';
  let currentScore = 0;
  wordsArr.map((word) => {
    currentScore = word.split('').reduce((sum, letter) => {
      return sum + letter.charCodeAt(0) - 96;
    }, 0);
    if (currentScore > score) {
      score = currentScore;
      highestWord = word;
    }
  });
  return highestWord;
}

module.exports = highestScoringWord;
