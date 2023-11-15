function isPrime(number) {
    if (number < 2) {
      return false;
    }
    
for (let i = 2; i <= Math.sqrt(number); i++) {
  if (number % i === 0) {
    return false;
  }
}  
    return true;
  }
  
  function findPrimes() {
    const primes = [];
  
    for (let i = 0; i <= 1000; i++) {
      primes.push({ number: i, isPrime: isPrime(i) });
    }
  
    return primes;
  }
  
  const primeNumbers = findPrimes();
  primeNumbers.forEach((prime) => {
    const { number, isPrime } = prime;
    const message = isPrime ? "é primo" : "não é primo";
    console.log(`${number} - ${message}`);
  });