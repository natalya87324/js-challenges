function fizzBuzzArray(num) {
  const resultArray = [];
  
  for (let i = 1; i <= num; i++) {
    
    if (i % 3 === 0 && i % 5 === 0) {
      resultArray.push('FizzBuzz');
    } else if (i % 5 === 0) {
      resultArray.push('Buzz');
    } else if (i % 3 === 0) {
      resultArray.push('Fizz');
    } else {
      resultArray.push(i);
    }
    
  }
  
  return resultArray;
}

module.exports = fizzBuzzArray;
