// syntax highlighting for modern JavaScript syntax
const fibonacci = (n, memo = new Map()) => {
  const memoizedN = memo.get(n)

  if (memoizedN !== undefined) {
    console.log("Hit cache", n)
    return memoizedN
  }

  if (n < 2) {
    return 1
  }

  const fib = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)

  memo.set(n, fib)

  return fib
}
