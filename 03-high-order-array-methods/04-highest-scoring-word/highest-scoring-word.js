// Solution 1
// function highestScoringWord(wordsString) {
//   const wordsArr = wordsString.toLowerCase().split(' ');

//   let score = 0;
//   let highestWord = '';
//   let currentScore = 0;
//   wordsArr.map((word) => {
//     currentScore = word.split('').reduce((sum, letter) => {
//       return sum + letter.charCodeAt(0) - 96;
//     }, 0);
//     if (currentScore > score) {
//       score = currentScore;
//       highestWord = word;
//     }
//   });
//   return highestWord;
// }

//Solution 2
function highestScoringWord(str) {
  const words = str.split(' ');

  const scores = words.map(word => {
    let score = 0;
    for (const letter of word) {
      score += letter.charCodeAt(0) - 96;
    }
    return score;
  });

  let highestScore = 0;
  let highestIndex = 0;

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > highestScore) {
      highestScore = scores[i];
      highestIndex = i;
    }
  }

  return words[highestIndex];
}

module.exports = highestScoringWord;
