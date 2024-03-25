function sumOfEvenSquares(numbers) {
  const evenNums = numbers.filter((num) => num % 2 === 0);
  const squareNums = evenNums.map((num) => num ** 2);
  const finalSum = squareNums.reduce((total, value) => {
    return total + value;
  }, 0);

  return finalSum;
}

module.exports = sumOfEvenSquares;
