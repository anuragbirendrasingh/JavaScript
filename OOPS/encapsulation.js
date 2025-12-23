// encapsulation --> kissi particular field ko private banana
// data hiding
// controlled access
// validation logic

class User {
  #age;

  constructor(name, age, gender) {
    this.name = name;
    this.#age = age;
    this.gender = gender;
  }

  get age() {
    return this.#age;
  }

  set age(value) {
    if (value < 0) {
      throw new Error("Age can not be negative");
    }
    this.#age = value;
  }
}

const user1 = new User("Anurag", 25, "Male");
// console.log(user1,user1.age);

// user1.#age ❌ SyntaxError   ✅ Real encapsulation achieved

// user1.#age = 40 ; //Property '#age' is not accessible outside class 'User' because it has a private identifier.
// yahh naya property hai original hmne jo private field set kar rakhi hai vahh allag hai
user1.age = 40;
console.log(user1, user1.age);
