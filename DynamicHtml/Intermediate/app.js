console.log("js loaded");


// let inputTag = document.getElementById("inputTag");
// console.dir(inputTag);


// let textArea = document.getElementById("textareaTag");
// console.dir(textArea);


const root = document.getElementById("root");

let para = document.createElement("p")
para.textContent = "Helo from Js"

root.appendChild(para);


const h1 = document.createElement("h1");
h1.innerText = "Hello From JS";
root.appendChild(h1);



const btn = document.createElement("button");
btn.innerText = "Click me";
btn.style.backgroundColor = "red";

btn.setAttribute("id", "btnid");

btn.addEventListener("click", () => {
  alert("Btn Clicked");
});

root.appendChild(btn);

let mobile = ["apple","samsung","nokia"];
for(let i=0;i<mobile.length ;i++){
    let p = document.createElement("li");
    p.textContent = mobile[i];  
    root.appendChild(p);
}

