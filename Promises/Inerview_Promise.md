# 🔥 Core SDE-1 Interview Questions: JavaScript Promises




### 1. What's the difference between `Promise.all` and `Promise.allSettled`?

> **Asked In:** Amazon (2024), Microsoft (2023), Flipkart (2023)

---

### 2. Why would `console.log('Promise')` run before `console.log('Timeout')` in this code?

```javascript
setTimeout(() => console.log('Timeout'), 0);
Promise.resolve().then(() => console.log('Promise'));
console.log('Sync');
````

> **Asked In:** Google (2023), CRED (2024), Frontend Engineering interviews

-----

### 3\. Explain the difference between `Promise.race()` and `Promise.any()`.

> **Asked In:** Uber (2023), Atlassian (2022)

-----

### 4\. How does `async/await` work under the hood?

> **Asked In:** Meta (2023), Adobe (2024)

-----

### 5\. What happens if you call an `async` function without using `await` on its result?

> **Asked In:** Standard SDE-1 screening rounds.

-----

### 6\. How would you run a list of promise-returning functions sequentially vs. in parallel?

> **Asked In:** ServiceNow (2023), Intuit (2022)

