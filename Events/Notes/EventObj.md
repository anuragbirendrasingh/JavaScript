# 🌐 JavaScript Events — Bubbling, Delegation, and Event Object (in Hindi)

---

## 🔸 1. Event Object (`event`, या `e`)

जब भी किसी HTML element पर कोई event (जैसे `click`, `input`, etc) trigger होता है, JavaScript उस event से जुड़ी जानकारी एक **event object** के रूप में देती है।

### 📦 Event Object में क्या-क्या होता है?

| Property | मतलब | कब काम आता है |
|----------|------|----------------|
| `e.target` | जिस element पर event हुआ | पता लगाने के लिए कि किसने click किया |
| `e.currentTarget` | जिस element पर listener लगाया गया | delegation में फर्क समझने के लिए |
| `e.type` | event का type | जैसे: `click`, `keydown` |
| `e.timeStamp` | कब हुआ event | rarely used |
| `e.bubbles` | क्या event bubble करेगा? | true/false |
| `e.stopPropagation()` | event को ऊपर जाने से रोके | bubbling रोकने के लिए |
| `e.preventDefault()` | default behaviour रोके | जैसे form का submit |

---

### 📌 Example:

```js
element.addEventListener("click", function(e) {
    console.log("Clicked on:", e.target);
    console.log("Text:", e.target.innerText);
});



| Property              | काम क्या करता है                         | Example                               |
| --------------------- | ---------------------------------------- | ------------------------------------- |
| `e.target`            | जिस element पर click हुआ                 | `e.target.innerText`                  |
| `e.currentTarget`     | जिस पर listener actual में लगा है        | Delegation में फर्क देखने के लिए      |
| `e.target.value`      | input, select, textarea की value देता है | `e.target.value` (input field के लिए) |
| `e.target.innerText`  | element का visible text देता है          | `"Submit"`                            |
| `e.target.innerHTML`  | element के अंदर का raw HTML              | `"<span>Hi</span>"`                   |
| `e.stopPropagation()` | bubbling को रोकता है                     | किसी stage पर event रोकना             |
| `e.preventDefault()`  | default काम को रोकता है                  | form को auto-submit होने से रोकना     |


