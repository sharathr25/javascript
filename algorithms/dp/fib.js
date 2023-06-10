// fib without memo, this takes lot of time
// const fib = n => {
//   if (n <= 1) return 1
//   return fib(n - 1) + fib(n - 2)
// }

const fib = (n, memo = {}) => {
  if (n in memo) return memo[n]
  if (n <= 1) return 1
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
  return memo[n]
}

console.log(fib(10))
console.log(fib(50))
