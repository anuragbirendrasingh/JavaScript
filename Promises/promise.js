
let p1 = new Promise((resolve,reject)=>{

    // let data = true ;
    // let data = false;
    let data = undefined;

    if(data)
    {
        resolve("data fetched")
    }
    else
    {
        reject("data not fetched")
    }

});

// console.log(p1);

p1.then(()=>{
    console.log("OK");
    
})
.catch(()=>{
    console.log("NOT OK");
    
})











