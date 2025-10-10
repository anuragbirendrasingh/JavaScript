# DOM Properties & Methods Cheat Sheet

A quick reference for commonly used **properties** and **methods** of HTML elements in JavaScript.

---

## 1. **Common to All Elements** (from `HTMLElement`)
| Property / Method | Description |
|-------------------|-------------|
| `.innerHTML` | Get/Set HTML content inside an element |
| `.textContent` | Get/Set text only (ignores HTML tags) |
| `.style` | Access inline styles (e.g. `element.style.color = "red"`) |
| `.className` | Get/Set all CSS classes as a string |
| `.classList` | Add/Remove/Toggle classes (e.g. `element.classList.add("active")`) |
| `.id` | Get/Set the element’s `id` |
| `.hidden` | Show/Hide element (`true` hides it) |
| `.title` | Tooltip text (`title` attribute) |
| `.dataset` | Access `data-*` attributes |
| `.tabIndex` | Get/Set tab order in focus |
| `.contentEditable` | Make element editable in browser |

---

## 2. **Event Methods** (from `EventTarget`)
| Method | Description |
|--------|-------------|
| `.addEventListener(event, handler)` | Attach an event handler |
| `.removeEventListener(event, handler)` | Remove an event handler |
| `.dispatchEvent(event)` | Manually trigger an event |

---

## 3. **Node Methods** (Work for all DOM nodes)
| Method | Description |
|--------|-------------|
| `.appendChild(node)` | Append a child element |
| `.removeChild(node)` | Remove a child element |
| `.replaceChild(new, old)` | Replace a child |
| `.cloneNode(true/false)` | Clone element (deep copy if `true`) |
| `.hasChildNodes()` | Check if node has children |

---

## 4. **Specific Elements**

### 4.1 `<input>` & `<textarea>` (HTMLInputElement)
| Property | Description |
|----------|-------------|
| `.value` | Current value |
| `.type` | Type of input (`text`, `password`, etc.) |
| `.checked` | For checkboxes/radios |
| `.placeholder` | Placeholder text |
| `.disabled` | Disable input |
| `.readOnly` | Make input read-only |
| `.maxLength` | Maximum characters allowed |
| `.min` / `.max` | Min/Max numeric value |
| `.step` | Step interval for numbers |

---

### 4.2 `<form>` (HTMLFormElement)
| Property | Description |
|----------|-------------|
| `.elements` | Collection of all form controls |
| `.action` | URL where form data is sent |
| `.method` | HTTP method (`GET`/`POST`) |
| `.submit()` | Submit form programmatically |
| `.reset()` | Reset form fields |

---

### 4.3 `<img>` (HTMLImageElement)
| Property | Description |
|----------|-------------|
| `.src` | Image source URL |
| `.alt` | Alt text |
| `.width` / `.height` | Image dimensions |
| `.naturalWidth` / `.naturalHeight` | Actual image size |

---

### 4.4 `<a>` (HTMLAnchorElement)
| Property | Description |
|----------|-------------|
| `.href` | Full link URL |
| `.target` | Target attribute (`_blank`, `_self`) |
| `.text` | Link text |

---

## 5. **Traversal Properties**
| Property | Description |
|----------|-------------|
| `.parentElement` | Parent element |
| `.children` | HTMLCollection of child elements |
| `.firstElementChild` | First child element |
| `.lastElementChild` | Last child element |
| `.nextElementSibling` | Next sibling element |
| `.previousElementSibling` | Previous sibling element |

---

## 6. **Style & Class Helpers**
| Method | Description |
|--------|-------------|
| `.classList.add("class")` | Add a class |
| `.classList.remove("class")` | Remove a class |
| `.classList.toggle("class")` | Toggle a class |
| `.getComputedStyle(element)` | Get final calculated styles |

---

## 7. **Exploration in Browser**
To see all available properties & methods for an element in the browser:
```javascript
let el = document.querySelector("input");
console.dir(el); // View all properties in console
