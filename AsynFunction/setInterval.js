const button = document.getElementById("btn");
console.log("1");

const intervalID = setInterval(()=>{
    console.log("Anurag");
    
},5000)


const intervalID1 = setInterval(()=>{
    console.log("Ankit");
    
},3000) 


console.log("Second Task TO Print");


button.addEventListener("click",()=>{
    clearInterval(intervalID) 
    clearInterval(intervalID1)  // this is imporatnat to get the id of the setInterval to determine the browser which interval you want to stop
})


//***** */
const intervalId3  = setInterval(()=>{
    console.log("Kishan Bhandari");
    
},8000);

console.log(intervalId3); // yahh to print kar dega baas ek id ki value lekin iske andar ka log "kishan" nhi chalega 
                          //  because of ki yahh call back me pass hai turant iske baad clrear interval chal jaa raha hai isse ye 
                        //  chal nhi paa raha hai 

clearInterval(intervalId3);
//****** */


const intervalID4 = setInterval(()=>{
    console.log("kishan Bhandari");
    clearInterval(intervalID4);
},6000)