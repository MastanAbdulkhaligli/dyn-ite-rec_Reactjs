const codes = {
  iterative_fib: `const fibonacci = (num) => {
  var num1 = 0;
  var num2 = 1;
  var sum;
  var i = 0;
  for (i = 0; i < num - 1; i++) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
  }
  return num2;
};`,
  recursive_fib: `const r_fibonacci = (n) => {
  if (n <= 1) {
    return n;
  } else {
    return r_fibonacci(n - 1) + r_fibonacci(n - 2);
  }
};`,
  iterative_binary: `const find_binary_iterative = (decimal_number) => {
  var bin = "";

  while (decimal_number > 0) {
    bin = (decimal_number % 2) + bin;
    decimal_number = Math.floor(decimal_number / 2);
  }

  return bin;
};`,
  recursive_binary: `const find_binary_recursive = (decimal_number) => {
  if (decimal_number == 0) return 0;
  else
    return (
      (decimal_number % 2) +
      10 * find_binary_recursive(parseInt(decimal_number / 2))
    );
};`,
};

export default codes;
