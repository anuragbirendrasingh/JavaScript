function Person(name){
   this.name = name ;
}

Person.prototype.sayHello = function (){
    console.log("Hello ");
    
}


const p1 = new Person("Anurag");
p1.sayHello();


// | Feature        | Class | Constructor Function |
// | -------------- | ----- | -------------------- |
// | Real mechanism | ❌     | ✅                    |
// | Uses prototype | ✅     | ✅                    |
// | Hoisting       | ❌     | ✅                    |
// | Cleaner syntax | ✅     | ❌                    |
// | Recommended    | ✅     | Rarely               |