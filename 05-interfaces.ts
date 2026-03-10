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
