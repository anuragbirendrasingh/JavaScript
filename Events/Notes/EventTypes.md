🧠 परिभाषा: Event-Bubbling
जब किसी nested (अंदर वाले) HTML element पर कोई event होता है, तो वह event DOM में ऊपर की तरफ parent elements तक travel करता है।

➡️ इसे event bubbling कहते हैं
➡️ ये JavaScript में default behavior है


// 🧠 परिभाषा: Event-capture

| Feature                 | Bubbling                         | Delegation                                         | Capturing                        |
| ----------------------- | -------------------------------- | -------------------------------------------------- | -------------------------------- |
| क्या होता है?           | Event नीचे से ऊपर travel करता है | Parent पर listener लगाकर बच्चों को handle करते हैं | Event ऊपर से नीचे जाता है        |
| Use Case                | समझने के लिए                     | Performance + Dynamic UI                           | Rare, advanced control           |
| Listener कहाँ लगाते हैं | child + parent पर                | सिर्फ parent पर                                    | किसी पर भी (`useCapture = true`) |



//Event-Delegation

🧠 परिभाषा:
Event delegation एक technique है जिसमें हम किसी parent element पर एक event listener लगाते हैं और उसी से हम उसके सभी child elements के events को handle करते हैं।

➡️ हम event bubbling का फायदा उठाते हैं
➡️ इससे हमें हर child पर अलग listener लगाने की ज़रूरत नहीं होती


🎯 Example:

<ul id="list">
  <li>Apple</li>
  <li>Banana</li>
  <li>Mango</li>
</ul>

<script>
  document.getElementById("list").addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
      console.log("You clicked:", e.target.innerText);
    }
  });
</script>


✅ Output (if Banana is clicked):

You clicked: Banana

Delegation = performance + dynamic UI + cleaner code