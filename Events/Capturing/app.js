
const outer = document.getElementById("outer");
const middle = document.getElementById("middle");
const inner = document.getElementById("inner");

outer.addEventListener("click",()=>{
    console.log("outer div");
    
},true)

middle.addEventListener("click",()=>{
    console.log("middle div");
    
},true)

inner.addEventListener("click",()=>{
    console.log("inner div");
    
},true)

//parent to child chalega ab 

// useCapture last parameter me paas hua hai yanha jo decide karta hai ki 
// boolean value (useCapture ki value) jab true ho tabrun karega call back function
