var names = "Debabrata Das";
console.log(names);
// Boolean
var isActive = true;
var hasPermission = false;
// Number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
var float = 3.14;
// String
var color = "Blue";
var fullName = "Debabrata Das";
var age = 25;
var sentence = "Hello, My name is ".concat(fullName, " and i'll be ").concat(age + 1, " next year.");
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
var v = true;
v = "string";
Math.round(v);
// Type - Unknown
function proccessValue(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else if (Array.isArray(value)) {
        console.log(value.length);
    }
}
proccessValue([1, 2, 3, 4]);
