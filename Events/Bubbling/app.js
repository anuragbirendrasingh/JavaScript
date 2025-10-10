
const outer = document.getElementById("outer");
const middle = document.getElementById("middle");
const inner = document.getElementById("inner");

outer.addEventListener("click",()=>{
    console.log("outer div");
    
})

middle.addEventListener("click",()=>{
    console.log("middle div");
    
})

inner.addEventListener("click",()=>{
    console.log("inner div");
    
})

//child to parent event propogate karega 