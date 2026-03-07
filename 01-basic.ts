let names: string = "Debabrata Das";
console.log(names);

// Boolean
let isActive: boolean = true;
let hasPermission = false;

// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let float: number = 3.14;

// String
let color: string = "Blue";
let fullName: string = "Debabrata Das";
let age: number = 25;
let sentence: string = `Hello, My name is ${fullName} and i'll be ${age + 1} next year.`;
console.log(sentence);

// BigInt
// const bigNumber: bigint = 90078912345678919n;
// const hugNumber = BigInt(90078912345678919); // Alternetive syntex

// // Symbol
// const uniqueKey: symbol = Symbol("description");
// const obj = {
//   [uniqueKey]: "This is a unique property",
// };
// console.log(obj[uniqueKey]);

// Type - any
let v: any = true;
v = "string";
Math.round(v);

// Type - Unknown
function proccessValue(value: unknown) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (Array.isArray(value)) {
    console.log(value.length);
  }
}

proccessValue([1, 2, 3, 4]);

// Type - Never
// 1. Function that never returns
function throwError(message: string): never {
  throw new Error(message);
}
