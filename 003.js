function factorial (number) {
    let product = 1;
    if (number < 0) return 1;
    if (number === 0)return 1;
    return number * factorial(number - product)
  }
console.log(factorial(-2))

