// Task
// If possible, divide the integers 1,2,…,n into two sets of equal sum.

// Input
// A positive integer n <= 1,000,000.

// Output
// If it's not possible, return [ ] (Javascript and Python) or ( ) (Python) or [[],[] ] (Java, C#) or None (Scala). If it's possible, return two disjoint sets. Each integer from 1 to n must be in one of them. The integers in the first set must sum up to the same value as the integers in the second set. The sets can be returned in a tuple, list, or array, depending on language.

// Examples:
// For n = 8, valid answers include:
// [1, 3, 6, 8], [2, 4, 5, 7] (or [[1, 3, 6, 8], [2, 4, 5, 7]])
// [8, 1, 3, 2, 4], [5, 7, 6]
// [7, 8, 3], [6, 1, 5, 4, 2], and others.
// For n = 9 it is not possible. For example, try [6, 8, 9] and [1, 2, 3, 4, 5, 7], but the first sums to 23 and the second to 22. No other sets work either.

function createTwoSetsOfEqualSum(n) {
  // Divide the numbers 1,2,...,n into two sets/arrays of equal sum.
  // If it's not possible, return [].

  return [];
}

function podzielCiag(n) {
  const S = (n * (n + 1)) / 2;

  if (S % 2 !== 0) {
      console.log("Nie można podzielić ciągu na dwie równe sumy.");
      return;
  }

  const polowaS = S / 2;
  let k = Math.floor((Math.sqrt(8 * polowaS + 1) - 1) / 2);

  const pierwszaCzesc = [];
  const drugaCzesc = [];

  for (let i = 1; i <= n; i++) {
      if (i <= k) {
          pierwszaCzesc.push(i);
      } else {
          drugaCzesc.push(i);
      }
  }

  return [pierwszaCzesc, drugaCzesc];
}

const n = 8;
const [pierwsza, druga] = podzielCiag(n);

console.log("Pierwsza część:", pierwsza);
console.log("Druga część:", druga);
console.log("Druga część:", druga.reduce((el, acc) => acc += el));
console.log("Pierwsza część:", pierwsza.reduce((el, acc) => acc += el));
