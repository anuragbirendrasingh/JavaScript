const obj = {
    name : "anurag",
    age : 25,
    fn : ()=>{
        console.log("Fn as a key-value in js");
        return;
        
    }
}

console.log(obj);  // { name: 'anurag', age: 25, fn: [Function: fn] }

const fnans = obj.fn(); //Fn as a key-value in js
                        // undefined
console.log(fnans);

