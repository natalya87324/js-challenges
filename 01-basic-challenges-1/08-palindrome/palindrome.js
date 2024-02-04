// Solution 1 - using built-in methods

// function isPalindrome(str) {
  
//   const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//   const reversedStr = formattedStr.split('').reverse().join('');

//   return formattedStr === reversedStr;

// }

// Solution 2

function isPalindrome(str) {
  const formattedString = removeNonAlphanumeric(str.toLowerCase());
  const reversedString = reverseString(formattedString);

  return formattedString === reversedString;
}

function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);

    return (
      code >= 97 && code <= 122) ||

      (code >= 48 && code <= 57);
}

function removeNonAlphanumeric(str) {
  let alphaNumericStr = '';

  for (let i = 0; i < str.length; i++) {
    if (isAlphaNumeric(str[i])) {
      alphaNumericStr += str[i]
    }
  }
  return alphaNumericStr;
}


function reverseString(str) {
  let reverse = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }

  return reverse;
}






module.exports = isPalindrome;
