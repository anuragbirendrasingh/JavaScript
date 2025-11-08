## 💻 JavaScript Array Iteration Methods: Quick Revision

Here is a detailed, interview-focused summary of the four most commonly used non-mutating array iteration methods in JavaScript: **`.map()`**, **`.filter()`**, **`.find()`**, and **`.reduce()`**.

---

### 1. 🗺️ `.map()` (Transformation)

| Aspect | Details | Interview Focus |
| :--- | :--- | :--- |
| **Purpose** | To create a **new array** by calling a provided function on **every element** in the original array. | Used for **data transformation**. The output array will **always have the same length** as the input array. |
| **Return Value** | A **new array** containing the results of calling the function on every element. | **Non-mutating.** Returns a new array reference. |
| **Callback Arguments** | `(element, index, array)` | Mention its high-level counterpart: **`Promise.all()`** for transforming asynchronous results. |
| **Example Use Case** | Extracting names from an array of user objects: `users.map(user => user.name)` | |

---

### 2. 🔍 `.filter()` (Selection)

| Aspect | Details | Interview Focus |
| :--- | :--- | :--- |
| **Purpose** | To create a **new array** containing only the elements that satisfy a provided **testing condition** (a function that returns `true` or `false`). | Used for **data selection**. Output array length can be **less than or equal to** the input array length. |
| **Return Value** | A **new array** with the selected elements, or an empty array if no elements pass the test. | **Non-mutating.** Always returns an array (even if empty). |
| **Callback Arguments** | `(element, index, array)` | It's a key part of **Functional Programming** paradigms. Discuss its performance vs. a manual `for` loop (typically negligible). |
| **Example Use Case** | Getting all users who are over 18: `users.filter(user => user.age > 18)` | |

---

### 3. 🎯 `.find()` (Retrieval)

| Aspect | Details | Interview Focus |
| :--- | :--- | :--- |
| **Purpose** | To return the **first element** in the array that satisfies the provided testing function. | Used for **single element retrieval**. It stops iterating immediately once the condition is met. |
| **Return Value** | The **value of the first element** that passes the test, or **`undefined`** if no element is found. | **Non-mutating.** Returns the element itself (a reference to the object, if applicable), **not an array**. |
| **Callback Arguments** | `(element, index, array)` | Distinguish it from `.filter()`: `find` gives the element; `filter` gives an array (even if it only contains one element). |
| **Example Use Case** | Finding the specific user with ID 5: `users.find(user => user.id === 5)` | |

---

### 4. 🧮 `.reduce()` (Aggregation)

| Aspect | Details | Interview Focus |
| :--- | :--- | :--- |
| **Purpose** | To execute a **reducer function** (callback) on each element of the array, resulting in a **single output value**. | Used for **aggregation**, calculating sums, counting occurrences, or flattening arrays. It's the **most versatile** iteration method. |
| **Return Value** | The single, **accumulated value** that results from the final call to the reducer function. This can be a number, object, array, etc. | **Non-mutating.** Returns a single value. Must provide an **initial value** (second argument) for best practice and consistency. |
| **Callback Arguments** | `(accumulator, element, index, array)` | Explain the **`accumulator`** concept (the running total/result). Complex tasks like implementing `.map()` or `.filter()` can be done using only `.reduce()`. |
| **Example Use Case** | Calculating the total price of items: `cart.reduce((total, item) => total + item.price, 0)` | |

---

## 💡 Interview Point of Aspect: Key Takeaways

1.  **Immutability:** All four methods are **non-mutating**. They return a **new** data structure (array or single value) and leave the original array untouched. This is crucial for predictable state management (e.g., in React/Redux).
2.  **Versatility:** Mention that **`.reduce()`** is technically powerful enough to implement the logic of `.map()` and `.filter()`, demonstrating a deep understanding of array operations.
3.  **Performance:** While all these methods are highly readable and performant, mention that `.find()` is more efficient than `[...].filter()[0]` for single item retrieval because it stops iterating early.

---

