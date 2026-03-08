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
// Type - Never
// 1. Function that never returns
function throwError(message) {
    throw new Error(message);
}
///////////////////////////////////////////////
// let and const
// let
var car_name = "BMW";
var car_price = 10000000;
console.log(car_name);
console.log(car_price);
var bool = true;
if (bool) {
    var result_1 = 10;
    console.log(result_1);
}
var bool1 = false;
if (bool1) {
    var num_1 = 1;
    console.log(num_1);
}
else {
    var num_2 = 2;
    console.log(num_2);
}
// Const
var lang = "TypeScript";
var pi = 3.14;
console.log("Language: ".concat(lang));
console.log("Value of PI: ".concat(pi));
if (true) {
    var PI = 3.14;
    console.log(PI);
}
// Conditional operator
var num = -2;
var result = num > 0 ? "Positive number." : "Negative number.";
console.log(result);
// Type Operators
var num = 12;
console.log(typeof num);
// Boolean - Conditional Expression
var age1 = 25;
var isAdult = age >= 18;
if (isAdult) {
    console.log("You are an Adult.");
}
else {
    console.log("You are not an adult.");
}
// Conditional statement - (Ternary operator)
var score = 80;
var isPassing = score >= 70;
var result1 = isPassing ? "Pass" : "Fail";
console.log(result1);
