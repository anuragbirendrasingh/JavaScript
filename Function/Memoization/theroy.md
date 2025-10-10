# Memoization Cheat Sheet (Complete Guide for SDE-1)

---

## 1. Introduction
**Memoization** एक optimization technique है जो किसी function के **previously computed results** को cache में store करती है।  
अगर वही input दोबारा आता है, तो **calculation skip करके cache से result** लौटाया जाता है।  

**Purpose:**  
- Expensive / recursive functions को fast बनाना  
- Repeated calculations avoid करना  

**Key Rule:**  
> Memoization केवल **pure functions** पर सही से काम करता है।  

---

## 2. Terminology

| Term | Meaning |
|------|---------|
| Cache | Memory structure जो input → output store करता है |
| Cache Hit | Input पहले से cache में मौजूद है → direct result return |
| Cache Miss | Input cache में नहीं है → function execute और cache में store |
| Pure Function | Same input → same output, side-effect free function |

---

## 3. How Memoization Works (Basic Steps)

1. Create an empty cache (usually an object or map)
2. When function is called:
   - Check if input exists in cache
     - **Hit:** return cached result
     - **Miss:** calculate result, store in cache, then return
3. For recursive functions, always call **memoized version** inside recursion

---

## 4. JavaScript Example (Basic Memoization)

```js
function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log("Cache Hit ✅", key);
      return cache[key];
    }
    console.log("Cache Miss ❌", key);
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

// Example: Fibonacci
const fib = memoize(function(n) {
  if (n <= 1) return n;
  return fib(n-1) + fib(n-2);
});

console.log(fib(5)); // calculates and caches
console.log(fib(5)); // uses cache
