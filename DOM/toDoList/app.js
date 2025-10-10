
let box = document.getElementById("root");

//create label
let label = document.createElement("label");
label.innerText = "Let's add your first task "

//create input
let input = document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("placeholder","Enter your task");

//create button
let addbtn = document.createElement("button");
addbtn.innerText = "Click Me";

//create a container to show your task
let taskList = document.createElement("ul");





//append elements to the boxes
box.appendChild(label);
box.appendChild(input);
box.append(addbtn);
box.appendChild(taskList);


addbtn.addEventListener("click",()=>{
    let taskText = input.value.trim()//get input and trim spaces
    if(taskText==""){
        alert("Please enter your task");
        return
    }
    let taskItem = document.createElement("li");
    taskItem.innerText = " 📜" + taskText ;
    taskList.appendChild(taskItem);
    input.value = ""; //clear the input after adding task
})


