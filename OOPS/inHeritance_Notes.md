
---

# 📌 JS OOP – Inheritance & Polymorphism (Quick Notes)

---

## 1️⃣ Inheritance (JS)

✔ Inheritance **hamesha 2 classes ke beech hoti hai**
✔ Child class → Parent class se properties & methods inherit karti hai
✔ JS me inheritance **prototype chain** se hoti hai

```js
class Dog extends Animal {}
```

👉 Internally:

```
Dog.prototype → Animal.prototype → Object.prototype
```

---

## 2️⃣ `extends` keyword

✔ `extends` = inheritance
✔ Child class automatically parent ke methods access kar sakti hai

---

## 3️⃣ Method Overriding

✔ Same method name in parent & child
✔ Child ka method → parent ko override karta hai

```js
class Animal {
  speaks() {}
}

class Dog extends Animal {
  speaks() {} // override
}
```

---

## 4️⃣ Polymorphism in JavaScript

❌ Compile-time polymorphism → **NOT supported**
❌ Method overloading → **NOT supported**

✅ Runtime polymorphism → **SUPPORTED**

👉 Method call ka decision **runtime pe hota hai**

```js
const a = new Animal();
const d = new Dog();

a.speaks(); // Animal version
d.speaks(); // Dog version
```

---

## 5️⃣ `super` keyword

### 🔹 In methods

✔ Optional
✔ Parent ka method call karne ke liye

```js
super.speaks();
```

---

### 🔹 In constructor

❗ **MANDATORY**

```js
constructor() {
  super();
}
```

❌ Nahi lagaya → Runtime Error

---

## 6️⃣ `super` lagane ya na lagane ka effect

| Case                     | Result                |
| ------------------------ | --------------------- |
| Override without `super` | Sirf child ka output  |
| Override with `super`    | Parent + child output |

---

## 7️⃣ `console.log(obj.method())` Trap

```js
speaks() {
  console.log("Dog Barks");
}
```

```js
console.log(obj.speaks());
```

Output:

```
Dog Barks
undefined
```

👉 Reason: method **return kuch nahi karta**

---

## 8️⃣ Getter / Setter & Encapsulation (Recall)

✔ Private field → `#field`
✔ Controlled access → getter / setter

```js
get age() { return this.#age; }
set age(v) { this.#age = v; }
```

---

## 9️⃣ Prototype Chain Proof (Interview Gold)

```js
obj.__proto__ === Class.prototype // true
Class.prototype.__proto__ === Parent.prototype // true
```

---

## 🔥 One-Line Interview Answers (Must Remember)

🟢 **Inheritance**

> JavaScript uses prototype-based inheritance internally, even when using class syntax.

🟢 **Polymorphism**

> JavaScript supports runtime polymorphism via method overriding, but not compile-time polymorphism.

🟢 **super keyword**

> super is optional in methods but mandatory in constructors of derived classes.

---

## 🧠 Final Mental Model

```
Object
 ↑
Animal
 ↑
Dog / Cat
```

Method resolution → **runtime**
Access control → **private fields + setters**

---


