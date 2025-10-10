// functional spread opeartor

// you use the rest operator as the final parameter in a function, 
// it collects all the remaining arguments passed to the function 
// into a standard JavaScript Array.

// Key Rules:

// A function can only have one rest parameter.

// The rest parameter must be the last parameter in the function definition.

function fruits(firstArgs, secondArgs,...spreadArgs){
       console.log(firstArgs);
       console.log(secondArgs);
       console.log(spreadArgs);  //  [ 'apple', 'cherry', 'jamun' ]  // creating a new array
       
       
       return ;
}

fruits('mango','banana','apple','cherry','jamun');




///  destructuring

const arr = [10,20,30,40,50,60,70];
const [first,second,...remaining] = arr ;
console.log(first);
console.log(second);
console.log(remaining);

// object destructuring

const person = {
    name : ' anurag',
    age : 32 ,
    class : 10 ,
    jilla :"ballia bagi"
}

const {name, age , ...bakiSab} = person ;
console.log(naam);
console.log(age);
console.log(bakiSab);










