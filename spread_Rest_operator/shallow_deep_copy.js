// the clear visible diffrences of the shallow copy and deepcopy
// loop ---Manual changes >>> creates a deepcopy 
// assignement opearator --- >> creates the shallow copy 

let arr = [1,2,3,4,5];
let newArr = [] ;
for(let num of arr){
    newArr.push(num);
}

newArr.pop();
newArr.pop();

console.log("old arr " + arr); //  1 2 3 4 5
console.log("new arr "  +  newArr);   // 1 2 3


newArr = arr ; // 1 2 3 4 5

newArr.pop(); // 1 2 3 4

console.log("old arr_2 " + arr); // 1 2 3 4 
console.log("new arr_2 "  +  newArr) // 1 2 3 4



// using ... spread operator deep copy
// 👉 Yeh deep copy jaisa behave karta hai kyunki andar sirf strings (primitive data) hain.
// Each value alag memory location me store hoti hai.

let puranaDost = ["anurag","kishan","abhinav","ankit","gunjan"];
let nayaDost = [...puranaDost] ;
nayaDost.push('julli');
nayaDost.push('amman');
console.log("puranaDost -> " + puranaDost);
console.log("nayaDost -> " + nayaDost);


// | Type of data                                      | Spread copy behaviour          |
// | ------------------------------------------------- | ------------------------------ |
// | **Primitive values** (numbers, strings, booleans) | ✅ Deep copy (independent)      |
// | **Objects or arrays inside an array** (nested)    | ⚠️ Shallow copy (still linked) |
