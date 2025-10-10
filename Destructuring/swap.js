
const user = { naam : 'anurag'};
const country = user.country ? user.country : "nhi diya hai"
console.log(country);



//swapping without temp variable

let first = 1 ;
let second = 2 ;
    [first,second] = [second,first];
    console.log(second); // 1
    console.log(first);  // 2
    

// printing the all key using for of loop
// one object can not  have the  duplicate key other wise it will replace the first coming key 
// const arr = [{name : 'kishan' ,  baap : 'anurag' , name : 'ankit' ,age : 25 , name : 'bholu'}];
// for(let {name} of arr){
//     console.log(name);   // op bholu
// }

const arr = [
    {name : 'kishan'},
    {baap : 'anurag'},
    { name : 'ankit'},
    {name : 'bholu'},
    {age : 20},
];

// for(let {name} of arr){
//     console.log(name);   // op all value of name
// }

arr.filter(obj => 'name' in obj).forEach(obj => console.log(obj.name));

    