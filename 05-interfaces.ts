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

//
