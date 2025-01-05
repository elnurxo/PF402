function factorial(n) {
  if (n === 1) {
    // Base case
    return 1;
  }
  return n * factorial(n - 1); // Recursive case
}

console.log(factorial(5)); // Output: 120

//iteration
//1 -> 5 * factorial(4)
//2 -> 5 * 4 * factorial(3)
//3 -> 5 * 4 * 3 * factorial(2)
//4 -> 5 * 4 * 3 * 2 * factorial(1)
//5 -> 5 * 4 * 3 * 2 * 1 => 120
