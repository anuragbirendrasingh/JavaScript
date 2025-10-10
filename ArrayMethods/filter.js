

// let arr = [1,2,3,4,5,56,67,34,31,90];

// let ans = arr.filter((item)=>{
//     return item % 2==0;
// });
// console.log(ans);



// let words = ["apple","banana","kivi","mango","blueberry"];

// let ans = words.filter((item)=>{
//      return item.length > 5;
// })
// console.log(ans);


// const people = [
//     { name: "Tom" , age:16},
//     { name: "Lucy" , age:22},
//     { name: "Jake" , age:14},


    
// ]

// const ans =  people.filter((item)=>{
//     return item.age>18;
// })
// console.log(ans);



// const tasks = [
//     {title:"clean room",done:true},
//     {title:"Buy food",done:false},
//     {title:"study js",done:false},
// ];
// const ans = tasks.filter((item)=>{
//     return !item.done
// })
// console.log(ans);



const tasks = [
    "john@gmail.com","amv@yahoo.com","katy@gmail.com"
];
const ans = tasks.filter((item)=>{
    return !item.includes("@gmail.com")
})
console.log(ans);
