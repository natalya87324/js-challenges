function countVowels(str) {
  const formattedStr = str.toLowerCase();
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let i = 0; i < formattedStr.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (vowels[j] === formattedStr[i]) {
        count += formattedStr[i].length;
      }
    }
  }

  return count;
}

module.exports = countVowels;
