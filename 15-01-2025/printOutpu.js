function subtract(a, b) {
    return a - b;
  }
  
  function divide(a, b) {
    return b !== 0 ? a / b : "Division by zero";
  }
  
  function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  }
  
  function applyFunctionsSequentially(value, functions) {
    return functions.reduce((acc, fn) => fn(acc), value);
  }
  
  function main() {
    const result1 = subtract(20, 5); 
    console.log("Result 1 (Subtraction):", result1);
  
    const result2 = divide(result1, 3); 
    console.log("Result 2 (Division):", result2);
  
    const factResult = factorial(4); 
    console.log("Result 3 (Factorial):", factResult);
  
    const functions = [
      (x) => x * 2,   
      (x) => x + 3,    
      (x) => x - 1,    
    ];
    const sequentialResult = applyFunctionsSequentially(5, functions);
    console.log("Result 4 (Sequential Functions):", sequentialResult);
  
    const finalResult = subtract(factResult, sequentialResult); 
    console.log("Final Result:", finalResult);
  }
  
  main();
  