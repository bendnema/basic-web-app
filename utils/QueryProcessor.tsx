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

  // Return largest number in the query
  const numbers = query.match(/\d+/g);
  if (numbers) {
    const maxNumber = Math.max(...numbers.map(Number));
    return maxNumber.toString();
  }


  return "";

}

