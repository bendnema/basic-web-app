export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "Rohan";
  }

  if (query.toLowerCase().includes("id")) {
    return "bnematad";
  }

  // What is 97 to the power of 34?
  if (query.toLowerCase().includes("to the power of")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length >= 2) {
      const base = Number(numbers[0]);
      const exponent = Number(numbers[1]);
      return Math.pow(base, exponent).toString();
    }
  }

  // adds numbers in query or multiples numbers in a query
  if (query.toLowerCase().includes("plus")) {
    const numbers = query.match(/\d+/g);
    if (numbers) {
      const sum = numbers.reduce((acc, num) => acc + Number(num), 0);
      return sum.toString();
    }
  } else if (query.toLowerCase().includes("multiplied by")) {
    const numbers = query.match(/\d+/g);
    if (numbers) {
      const product = numbers.reduce((acc, num) => acc * Number(num), 1);
      return product.toString();
    }
  }

  // return prime numbers in query
  if (query.toLowerCase().includes("prime")) {
    const primeNumbers = query.match(/\d+/g)?.filter(num => {
      const n = Number(num);
      if (n <= 1) return false;
      for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
      }
      return true;
    }).sort((a, b) => Number(a) - Number(b));
    if (primeNumbers && primeNumbers.length > 0) {
      return primeNumbers.join(", ");
    }
  }

  // finds numbers in a query that are both a square and a cube
  const numbers = query.match(/\d+/g);
  if (numbers) {
    const squareAndCube = numbers.find(num => {
      const n = Number(num);
      return Number.isInteger(Math.sqrt(n)) && Number.isInteger(Math.cbrt(n));
    });
    if (squareAndCube) {
      return squareAndCube;
    }
  } 

  // minus numbers in query
  if (query.toLowerCase().includes("minus")) {
    const numbers = query.match(/\d+/g);
    if (numbers) {
      const difference = numbers.map(Number).reduce((acc, num) => acc - num);
      return difference.toString();
    }
  }

  // Return largest number in the query
  const largestNumbers = query.match(/\d+/g);
  if (largestNumbers) {
    const maxNumber = Math.max(...largestNumbers.map(Number));
    return maxNumber.toString();
  }




  return "";

}
