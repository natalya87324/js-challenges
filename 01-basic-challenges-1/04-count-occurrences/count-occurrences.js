function countOccurrences(str, char) {
  let totalChar = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === char) {
      totalChar++;
    }
  }
  return totalChar;
}

module.exports = countOccurrences;
