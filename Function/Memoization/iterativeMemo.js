function memoize(fn) {
  const cache = {};
  return function(x) {
    if (cache[x]) {
      console.log("cache hit:", x);
      return cache[x];
    }
    const result = fn(x);
    cache[x] = result;
    return result;
  }
}

const square = memoize(function(n) {
  return n * n;
});
