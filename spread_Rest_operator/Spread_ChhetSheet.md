| Use Case             | Example        | Result                   |
| -------------------- | -------------- | ------------------------ |
| Copy array           | `[...arr]`     | New array (shallow copy) |
| Merge arrays         | `[...a, ...b]` | Combined array           |
| Copy object          | `{...obj}`     | New object               |
| Merge objects        | `{...a, ...b}` | Combined object          |
| Spread into function | `fn(...arr)`   | Passes each element      |
| String → array       | `[..."hello"]` | `['h','e','l','l','o']`  |


⚡ Bonus Tip:

## Spread operator works only with iterables (like arrays, strings, Maps, Sets).
## For non-iterables (like plain objects), it works only inside {} brackets.