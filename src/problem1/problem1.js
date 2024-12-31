var sum_to_n_a = function (n) {
  // your code here
  return (n * (n + 1)) / 2;
};

var sum_to_n_b = function (n) {
  // your code here
  let sumNumbersToN = 0;
  for (let i = 1; i <= n; i++) {
    sumNumbersToN += i;
  }
  return sumNumbersToN;
};

var sum_to_n_c = function (n) {
  // your code here
  return new Array(n).fill(0).reduce((sum, _, index) => sum + (index + 1), 0);
};

console.log(sum_to_n_a(5));
console.log(sum_to_n_b(5));
console.log(sum_to_n_c(5));
