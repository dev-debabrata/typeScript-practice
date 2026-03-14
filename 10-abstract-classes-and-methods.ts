// Absract Class
abstract class Animal {
  abstract makeSound(): void;

  move(): void {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Bark");
  }
}

const myDog = new Dog();
myDog.makeSound();
myDog.move();

// Abstract Class with Abstract Property
abstract class Person {
  abstract name: string;
  display(): void {
    console.log(this.name);
  }
}

class Employee extends Person {
  name: string;
  empCode: number;

  constructor(name: string, empCode: number) {
    super();
    this.name = name;
    this.empCode = empCode;
  }
}

const emp = new Employee("Debabrata Das", 101);
emp.display();

// Abstract Class with Abstract Method
abstract class Shape {
  abstract getArea(): number;

  printArea(): void {
    console.log(`The Area is: ${this.getArea()}`);
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const circle = new Circle(5);
circle.printArea();
