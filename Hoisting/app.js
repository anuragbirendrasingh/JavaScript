// ReferenceError: Cannot access 'a' before initialization
// console.log(a);
// let a = 5;
//const b = 10 ;


// undefined
// console.log(b);
// var b = 5;


// this is hoisting calling the function before initalisation
// Demo();
// function Demo(){
//     console.log("Hi ");
    
// }

Demo1();
function Demo1(){
    let a = 5;
    let b = 10;
    let add = a + b ;
    console.log(add);
}

let a = 2 ;
let b = 3 ;
Demo2(a,b);
function Demo2(a,b){
    console.log(typeof(a+b));
    
}

