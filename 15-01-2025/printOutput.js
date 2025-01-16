function multiply(a, b) {
  return a * b;
}

function add(a, b) {
  return a + b;
}

function recursiveSum(n) {
  if (n <= 0) return 0;
  return n + recursiveSum(n - 1);
}

function composeFunctions(f1, f2, x, y) {
  const intermediateResult = f1(x, y);
  return f2(intermediateResult, y);
}

function main() {
  const result1 = multiply(4, 3);
  console.log("Result 1 (Multiplication):", result1);

  const result2 = add(10, result1);
  console.log("Result 2 (Addition):", result2);

  const recursiveResult = recursiveSum(5);
  console.log("Result 3 (Recursive Sum):", recursiveResult);

  const composedResult = composeFunctions(multiply, add, 2, 3);

  console.log("Result 4 (Composed Functions):", composedResult);

  const finalResult = add(recursiveResult, composedResult);
  console.log("Final Result:", finalResult);
}

main();
