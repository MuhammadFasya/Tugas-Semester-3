const readline = require("readline");

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function nextPrime(n) {
  n++;
  while (!isPrime(n)) {
    n++;
  }
  return n;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number: ", (answer) => {
  const userInput = parseInt(answer);
  const nextPrimeNumber = nextPrime(userInput);
  console.log(`The prime number after ${userInput} is ${nextPrimeNumber}`);
  rl.close();
});
