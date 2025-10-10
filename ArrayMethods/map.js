

//ythis will always return the arr == the lengthh of the original arr;
// map is basically used for the looping on the array
// let arr = [1,2,3,4,5,6];

// let ans = arr.map((item)=>{
//     return
// })

// console.log( ans);



// que1. 
// const words = ['hello','world','javaScript'];
// const ans = words.map((item)=>{
//     return item.toUpperCase();
// })
// console.log(ans);

// *** qun


// const words = ['hello','world','javaScript'];
// const ans = words.map((item)=>{
//    let s1 =  item.slice(0,1);
//    let s2 = item.slice(1);
//    return s1.toUpperCase() + s2;
// })
// console.log(ans);





const people = [
    {name : "Alice",age:25},
    {name:"Bob",age:32}
]

const a =people.map((item)=>{
    // return item[name];
    // return item.name ==>> only gives string
    delete item.age;
    return item;
})
console.log(a);


const users = [
    {name:"Tom "},
    {name:"Jerry"}
]
const b = users.map((item)=>{
     item.status = "done";
    return item;
})
console.log( b);





const fruits  = ["apple","banana","cherry"];

const c = fruits.map((item , index)=>{
  return item + index;
})
console.log(c);


// const arr = [ ];

// const c = fruits.map((item , index)=>{
//   return item * index;
// })
// console.log(c);


const files = ["image.jpg","document.pdf","music.mp3"];
const e = files.map((item)=>{
    let temp = item.split(".");
    return temp[0]
})
console.log(e);


