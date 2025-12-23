// Inheritance: hamesha parent → child class ke beech hoti hai

class Animal {
  speaks() {
    console.log("Animals Make A Sound");
  }
}

// Child class without super usage
class Dog extends Animal {
  speaks() {
    console.log("Dog Barks");
  }
}

// Child class with super usage
class Cat extends Animal {
  speaks() {
    super.speaks(); // Parent class method
    console.log("Mew Mew Mew");
  }
}

// ---------- Object Creation ----------
const dog = new Dog();
const cat = new Cat();
const animal = new Animal();

// ---------- Method Calls ----------
dog.speaks();     // Dog Barks
cat.speaks();     // Animals Make A Sound + Mew Mew Mew
animal.speaks(); // Animals Make A Sound

// ---------- Prototype Chain Proof ----------
console.log(dog.__proto__ === Dog.prototype);               // true
console.log(Dog.prototype.__proto__ === Animal.prototype); // true

// Prototype chain:
// dog → Dog.prototype → Animal.prototype → Object.prototype

