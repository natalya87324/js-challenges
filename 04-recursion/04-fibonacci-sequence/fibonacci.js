function fibonacci(num) {
  //Base case. Parameter num represents the spot (index) in the fibonacci sequence
  if (num < 2) {
    return num;
  }

  return fibonacci(num - 1) + fibonacci(num - 2);
}

module.exports = fibonacci;
