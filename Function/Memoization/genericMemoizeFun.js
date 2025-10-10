// outer fun --> hof jo ek fun ko memoize karta hai
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    //cache hit
    if (cache[key]) {
      console.log(`chache hit for key ${key}`);
      return cache[key];
    }
    //cache miss
    const result = fn.apply(this, args);

    cache[key] = result;
    console.log(`caclulated and cached : ${key} - > ${result}`);

    return result;
  };
}

// memoise the expensive function
const memoizefibonaccie = memoize(function fb(n) {
  if (n <= 1) {
    return n;
  }
  return memoizefibonaccie(n - 1) + memoizefibonaccie(n - 2);
});

console.log("first call (Calculates)");
console.log(`result -> ${memoizefibonaccie(5)}`);
//calculation and caching hogi

console.log(`second call (Uses karega cache ko)`);
console.log(`result --> ${memoizefibonaccie(5)}`);
