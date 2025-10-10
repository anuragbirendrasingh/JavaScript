function myOwnSetTimeout(fn, duration)
{
    setTimeout(fn,duration)
}

myOwnSetTimeout(()=>{
    console.log("My own SetTimeout")
},10000)