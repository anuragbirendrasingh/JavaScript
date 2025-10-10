
// willbehave like sa shaloowcopy due to non primitive data 


// 💥 Kyun hua aisa?
// Because the spread operator copies only the outer array,
// but both still point to the same inner arrays ([1,2] and [2,3]).

// So changing copy1[0] also changes arr[0].

let arr = [[1,2] , [2,3]];
let copy1 = [...arr];
copy1[0].push(9);
console.log("original arr" + arr);
console.log("copied arr" + copy1);

let marks = [[45,47],[78,87]];
let deepCopy1 = JSON.parse(JSON.stringify(marks));
deepCopy1[0].push(32);
console.log("original marks " + marks);
console.log(" copied marks " + deepCopy1);


// ⚠️ Bonus Tip (real-world note)

// This JSON trick is amazing for simple data,
// but it won’t copy functions, undefined, Date, Map, or circular objects correctly.
// For those cases, libraries like Lodash (_.cloneDeep()) or structured cloning are used.


