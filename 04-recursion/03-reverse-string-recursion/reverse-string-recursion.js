function reverseString(str) {
  if (str === '') {
    return '';
  }

  reverseString(str.slice(1));

  return reverseString(str.slice(1)) + str[0];
}

module.exports = reverseString;
