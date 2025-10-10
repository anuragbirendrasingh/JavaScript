| Concept              | Hoisted    | TDZ Error   | Access Before Init | Default Value   |
| -------------------- | ---------- | ----------- | ------------------ | --------------- |
| `var`                | ✅ Yes      | ❌ No        | ✅ Allowed          | `undefined`     |
| `let` / `const`      | ✅ Yes      | ✅ Yes       | ❌ Not Allowed      | ❌ Error         |
| Function Declaration | ✅ Yes      | ❌ No        | ✅ Allowed          | ✅ Full Function |
| Function Expression  | ✅ Var part | ✅ TypeError | ❌ Not Allowed      | `undefined`     |
