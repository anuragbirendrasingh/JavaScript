function add(a, b) {
  return a + b;
}

function curriedAdd(a) {
  return function (b) {
    return a + b;
  };
}

const addTwo = curriedAdd(4);
const result = addTwo(3);
console.log(result);

const directresult = curriedAdd(4)(3);
console.log(directresult);

const addThree = (a) => (b) => (c) => a + b + c;
const one = addThree(1);
const two = one(2);
const result1 = two(3);
console.log(result1);

const addFour = (a) => (b) => (c) => (d) => {
  return a + b + c + d;
};
const ans = addFour(4)(4)(4)(4);
console.log(ans);
