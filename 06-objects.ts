// const person: { name: string; age: number } = {
//   name: "Debu",
//   age: 25,
// };

interface Person {
  firstName: string;
  lastName: string;
  sayHi: () => string;
}

let employee: Person = {
  firstName: "Debabrata Das",
  lastName: "Das",
  sayHi: (): string => {
    return "Hi there!";
  },
};

console.log("Employee Object");
console.log(employee.firstName);
console.log(employee.lastName);
console.log(employee.sayHi());

// Object Types
interface Person1 {
  name: string;
  age: number;
  address?: string;
}

function greet(person: Person1): string {
  return `Hello, ${person.name}!`;
}

const user: Person1 = {
  name: "Debu",
  age: 25,
};

console.log(greet(user));

// Defining a Car Object
interface Car {
  make: string;
  model: string;
  year: number;
  electric?: boolean;
}

const myCar: Car = {
  make: "BMW",
  model: "M5",
  year: 2024,
  electric: false,
};

console.log(`I drive a ${myCar.year} ${myCar.make} ${myCar.model}.`);

// Nested Object Types for a Book
interface Author {
  name: string;
  birthYear: number;
}

interface Book {
  title: string;
  author: Author;
  pages: number;
  generation: string;
}

const myBook: Book = {
  title: "TypeScript Basics",
  author: {
    name: "Debabrata Das",
    birthYear: 1997,
  },
  pages: 330,
  generation: "5th",
};

console.log(
  `${myBook.title} written by ${myBook.author.name} and birthday year is ${myBook.author.birthYear}.`,
);
