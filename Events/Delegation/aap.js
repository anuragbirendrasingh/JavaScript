
const outer = document.getElementById("outer");
const middle = document.getElementById("middle");
const inner = document.getElementById("inner");

outer.addEventListener("click",(e)=>{
      console.log("clicked on",e.target.id);    
})


//--->>> Events object

outer.addEventListener("click",(e)=>{
    console.log(e); // ek object aa rah hai 
    console.log(e.target); // purra div tag jissi div tag pr click kiya
    console.log(e.target.value); //undefined ---bcz only valid for input tags
    console.log(e.target.innerText); //jo jo attribute paas kiya tha vo vo aa raha hai div ke click hone ke basis pr
                                     //outer div ke click -->>> ouetr middle inner
                                     //inner div ke click hone pr -->> inner baas 
    
   console.log(e.target.innerHTML); //string me sare tag ko wrap kar ke dega 

    
    
    
    
    // console.log("clicked on",e.target.id);
    
})