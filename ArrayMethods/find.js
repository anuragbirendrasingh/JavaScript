

// let arr = ["abc","def","ijk","xyz"];
// let target = "ijk";

// const ans = arr.find(()=>{
//     if(item== target){
//  return item;
//     }
// })
// console.log(ans);



// let arr = [
//     {
//         name : "xyz",
//         age : 10
//     },
//     {
//         name : "abc",
//         age : 55
//     },
//     {
//         name : "pqr",
//         age : 42
//     },
//     {
//         name : "mno",
//         age : 99
//     },
//     {
//         name : "pqr",
//         age : 33
//     },
// ]

// let ans = arr.find((i)=>{
//       return i.age>90;
// })
// console.log(ans);


// 
// const products = [
    
//        { name: "phone",stock:3},
//        { name: "laptop",stock:0},
//        { name: "tablet",stock:5},
//        { name: "pani",stock:0},
    
// ]


// let ans = products.find((i)=>{
//     return i.stock==0 
// })
// console.log(ans);


let meriArr = [[1,2,3],[4,5,6],[7,8,9],[-10,-11,-12]];
// let ans = meriArr.find((i)=>{
//     let sum = 0;
//     for(let j of i){
//         sum+=j;
//     }

//     return sum<0;
    
// })
// console.log(ans);


let target = 8;
let ans = meriArr.find((item)=>{
   let temp  = item.find((innerItem)=>{
        return innerItem == target
    })

    return temp
});
console.log(ans);


