// use ctrl+shift+v to see the notes in vs code 


DOM Selection Methods in JavaScript:

1. getElementById("id")
   → Returns 1 element (Element)
   → Use for unique IDs

2. getElementsByClassName("class")
   → Returns live HTMLCollection
   → Use for class-based selection (loopable)

3. getElementsByTagName("tag")
   → Returns live HTMLCollection
   → Use for tag-level selection (e.g., all <li>)

4. querySelector("css-selector")
   → Returns first matching element
   → Use when CSS-like precision is needed

5. querySelectorAll("css-selector")
   → Returns static NodeList (loopable via forEach)
   → Use when selecting multiple elements using CSS selector

Trick to rem : c ke baad d aata hai dot(.) isliye use ".className" 
| Use Case                                        | Include `#` or `.`?         |
| ----------------------------------------------- | --------------------------- |
| `querySelector()` / `querySelectorAll()`        | ✅ YES — use `#id`, `.class` |
| `getElementById()` / `getElementsByClassName()` | ❌ NO — pass name only       |



| Property           | `innerHTML`                                  | `innerText`                              |
| ------------------ | -------------------------------------------- | ---------------------------------------- |
| ✅ Returns          | HTML content (including tags)                | Visible text (only what’s displayed)     |
| ✍️ Editable        | Yes — you can insert HTML code               | Yes — plain text only                    |
| 🧠 Interprets HTML | ✅ Yes                                        | ❌ No                                     |
| 👀 Hidden elements | Included                                     | Ignored (not shown in view)              |
| 🔐 Security        | ⚠️ Prone to XSS if used with untrusted input | ✅ Safer for plain text                   |
| 🧪 Example         | `elem.innerHTML = "<b>Hello</b> World!"`     | `elem.innerText = "<b>Hello</b> World!"` |
| 🔍 Result          | Renders: **Hello** World!                    | Shows: `<b>Hello</b> World!` as text     |

