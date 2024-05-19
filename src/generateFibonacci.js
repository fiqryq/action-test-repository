function generateFibonacci(limit) {
  const fibonacciSequence = [0, 1];
  let i = 2;
  
  while (fibonacciSequence[i - 1] + fibonacciSequence[i - 2] <= limit) {
    fibonacciSequence[i] = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
    i++;
  }
  
  return fibonacciSequence;
}

const fibonacciNumbers = generateFibonacci(1000);
console.log(fibonacciNumbers);
