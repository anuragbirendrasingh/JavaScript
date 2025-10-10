
// short circuting and terniarnary operator?//


// const fruits = ['apple','bananna','apple','orange','apple'];

// let ans = fruits.reduce((acc,item)=>{
//    acc[item] = acc[item] ? acc[item] + 1 : 1
//    return
// },{})

// console.log(ans);


const nested = [[1,2],[3,4],[5]];//[1,2,3,4,5]

let ans = nested.reduce((acc,curr)=>{
   return acc.concat(curr)
},[]);