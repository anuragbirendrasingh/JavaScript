
//select the div tag of your html by div id
// const divRoot = document.getElementById("root");

// //printing the value of a tag using the inerHtml
// const hTag = document.getElementById("h1tag");
// const data = hTag.innerHTML;
// console.log(data);


// //create new html tags which you want in your html file
// const newContent = `<h1>Hi Anurag</h1>
//                     <p> You will be good MERN Developer</p>
//                     <button>Click Me</button>`;

// divRoot.innerHTML = newContent;


//injecting html without innerHtml means ""Dynamically""


const divRoot = document.getElementById("root");

const heading = document.createElement("h1");
heading.textContent = "Baat kaila se na hoi kaam sikhe ke pari"

const about = document.createElement("p");
about.textContent = "Badhiya MERN developer bane ke ba"

const salary = document.createElement("aside");
salary.textContent = "10000"

divRoot.appendChild(heading);
divRoot.appendChild(about);
divRoot.appendChild(salary);



