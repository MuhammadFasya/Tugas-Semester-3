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

function countPrimes(initial, final) {
  let count = 0;
  for (let i = initial; i <= final; i++) {
    if (isPrime(i)) {
      count++;
    }
  }
  return count;
}

function sumOfPrimes(initial, final) {
  let sum = 0;
  for (let i = initial; i <= final; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the initial number: ", (initial) => {
  rl.question("Enter the final number: ", (final) => {
    const initialNum = parseInt(initial);
    const finalNum = parseInt(final);
    const count = countPrimes(initialNum, finalNum);
    const sum = sumOfPrimes(initialNum, finalNum);
    console.log(
      `There are ${count} prime numbers in the range of ${initialNum} to ${finalNum}.`
    );
    console.log(`The sum of these prime numbers is ${sum}.`);
    rl.close();
  });
});
