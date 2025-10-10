// Cleaner function parameters: You can destructure objects directly
// in a function's parameter list.
// This is a common pattern in modern
//  JavaScript frameworks like React to handle props.

function display({ name, age }) {
  console.log(name, age);
}

const user = { name: "Anurag", age: 20 };
display(user);

function print(person) {
  console.log(
    `name : ${person.name} ${"\n"} baap : ${person.baap} ${"\n"} age : ${
      person.age
    }`
  );
}
const person = { name: "Kishan mahtha", age: 25, baap: " anurag singh" };
print(person);
