class Car {
  name;
  wheels;
  color;
  fuel;
  constructor(name, wheels, color, fuel) {
    this.name = name;
    this.wheels = wheels;
    this.color = color;
    this.fuel = fuel;
  }

  describe() {
     console.log(
      `the name of car is ${this.name}  ${this.color}  ${this.wheels}  ${this.fuel}`
    );
  }
}

let car1 = new Car("alto", 4, "red", "diesal");
car1.describe();
console.log(car1.name);
console.log(car1.fuel);

