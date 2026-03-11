interface Person {
  firstName: string;
  lastName: string;
}

// Interface and Object
interface Person {
  firstName: string;
  lastName: string;
  sayHi: () => string;
}

let customer: Person = {
  firstName: "Debabrata Das",
  lastName: "Das",
  sayHi: (): string => {
    return "Hi there!";
  },
};

console.log("customer object");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());

// Union type and Interface
interface RunOptions {
  program: string;
  commandLine: string[] | string | (() => string);
}

let options: RunOptions = { program: "test", commandLine: "Hello" };
console.log(options.commandLine);

options = { program: "text1", commandLine: ["Hello", "World"] };
// console.log(options.commandLine[0]);
// console.log(options.commandLine[1]);

options = {
  program: "text1",
  commandLine: () => {
    return "Hello world";
  },
};

let fn: any = options.commandLine;
console.log(fn());

// Interface Array
interface nameList {
  [index: number]: string;
}

let list2: nameList = ["Debabrata", "Das"];

interface ages {
  [index: string]: number;
}

let ageList: ages = {
  Debabrata: 25,
  Das: 30,
};

console.log(list2[0]);
console.log(ageList["Debabrata"]);

// Simple Interface Inheritance
interface Person1 {
  age: number;
}

interface Musician extends Person1 {
  intrument: string;
}

let drummer = <Musician>{};
drummer.age = 27;
drummer.intrument = "Drummes";

console.log("Age: " + drummer.age);
console.log("Instrument: " + drummer.intrument);

// Multiple Interface
interface Parent1 {
  v1: number;
}

interface Parent2 {
  v2: number;
}

interface Child extends Parent1, Parent2 {}

const obj: Child = { v1: 12, v2: 23 };
console.log("Value 1: " + obj.v1 + "Value 2: " + obj.v2);

// Extending Interface
interface Shape {
  color: string;
}

interface ColoredShape extends Shape {
  name: string;
}

const square: ColoredShape = {
  color: "red",
  name: "square",
};

console.log(square.color);
console.log(square.name);

// Extending a Multiple Interface
interface Printable {
  print(): void;
}

interface Scanable {
  scan(): void;
}

interface MultifuntionalDevice extends Printable, Scanable {
  copy(): void;
}

class Printer implements MultifuntionalDevice {
  print() {
    console.log("Printing...");
  }

  scan() {
    console.log("Scanning...");
  }

  copy() {
    console.log("Copying...");
  }
}

const printer = new Printer();
printer.print();
printer.scan();
printer.copy();

// Enhanching and Exsting Interface
interface User {
  name: string;
}

interface EnhancedUser extends User {
  age: number;
  greet(): void;
}

const user: EnhancedUser = {
  name: "Debabrata Das",
  age: 25,
  greet() {
    console.log(
      `Hello, my name is $${this.name} and i'm ${this.age} year old.`,
    );
  },
};

user.greet();

// Creating Composite Interfaces
interface Product {
  name: string;
  price: number;
}

interface DiscountedProduct extends Product {
  discount: number;
}

interface ProductWithReviews extends Product {
  reviews: string[];
}

interface FeauturedProduct extends DiscountedProduct, ProductWithReviews {
  featured: boolean;
}

const product: FeauturedProduct = {
  name: "Smartphone",
  price: 50000,
  discount: 30,
  reviews: ["Greet product!", "Highly recommended."],
  featured: true,
};

console.log(product.featured);
console.log(product.reviews);
