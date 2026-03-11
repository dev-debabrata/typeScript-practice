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
