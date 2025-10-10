let arr = ["anurag" , "birendra" , "singh"] ;
let [first , second ,third] = arr ;
// console.log(first);  // anurag

let [, dusra, ,] = arr ;
// console.log(dusra);  // birendra

let [, , tisra]= arr ;
// console.log(tisra);  // singh

const fruits = ["apple","banana" ,"cherry" , 'guava',"mango"] ;
const [one , ...rest] = fruits ;
// console.log(one);   //apple
// console.log(rest);  // [ 'banana', 'cherry', 'guava', 'mango' ]



const nestedData = [1,[2,4]];
const [ones , [...three]] = nestedData ;
// console.log(ones);  // 1
console.log(three);  // [2,4]


// Array destructuring uses square brackets []
// and extracts values based on their position (index) in the array.
// The order of the variables is important.










