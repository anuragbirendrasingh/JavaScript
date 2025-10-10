
// Callback एक function होता है जो किसी दूसरे function को argument के रूप में पास किया जाता है, 
// और वह function बाद में call होता है (जैसे event के बाद, या किसी async काम के बाद)।

function Namste(naam){
    console.log("Hello 👋")
    naam();
}

Namste(naam);

function naam(){
    console.log("Anurag Bhai")
}



// 🧠 Callback के इंटरव्यू प्रश्न:
// Callback Function क्या होता है और यह क्यों ज़रूरी है?

// Callback Hell क्या है और इससे कैसे बचा जा सकता है?

// Callback और Promise में क्या अंतर है?

// Callback को React में कहाँ-कहाँ इस्तेमाल किया जाता है?


// | Feature        | Callback                        | Promise                    | async/await                         |
// | -------------- | ------------------------------- | -------------------------- | ----------------------------------- |
// | Readability    | 😵 Complex (nested functions)   | 😐 Better than callback    | ✅ Very clean and readable           |
// | Error Handling | Manual                          | `.catch()`                 | `try...catch`                       |
// | Syntax         | Function inside function        | Chained methods            | Looks synchronous, but async        |
// | Use Case       | Basic async (like `setTimeout`) | API call, fetch, file read | Long async chains with cleaner code |
// | Example        | `setTimeout(()=>{},1000)`       | `fetch().then().catch()`   | `await fetch()`                     |




// | Concept              | किससे जुड़ा है     | कैसे                                           |
// | -------------------- | ------------------ | ---------------------------------------------- |
// | Callback             | सबका आधार          | Promise भी internally callback यूज़ करता है    |
// | Promise              | Callback से evolve | Error handling और readability के लिए           |
// | `.then()`/`.catch()` | Promise का method  | resolve/reject होने पर callback assign करता है |
// | async/await          | Promise पर built   | Promises को handle करने का नया syntax          |





// | समझना है         | तो याद रखो                                         |
// | ---------------- | -------------------------------------------------- |
// | **Promise**      | एक object है जो future task का result hold करता है |
// | **.then/.catch** | Promise को handle करने वाले methods हैं            |
// | **async/await**  | Promises को readable बनाने के लिए है               |
// | **callback**     | Asynchronous code की base technique है             |
