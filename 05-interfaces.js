var customer = {
    firstName: "Debabrata Das",
    lastName: "Das",
    sayHi: function () {
        return "Hi there!";
    },
};
console.log("customer object");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());
var options = { program: "test", commandLine: "Hello" };
console.log(options.commandLine);
options = { program: "text1", commandLine: ["Hello", "World"] };
// console.log(options.commandLine[0]);
// console.log(options.commandLine[1]);
options = {
    program: "text1",
    commandLine: function () {
        return "Hello world";
    },
};
var fn = options.commandLine;
console.log(fn());
var list2 = ["Debabrata", "Das"];
var ageList = {
    Debabrata: 25,
    Das: 30,
};
console.log(list2[0]);
console.log(ageList["Debabrata"]);
var drummer = {};
drummer.age = 27;
drummer.intrument = "Drummes";
console.log("Age: " + drummer.age);
console.log("Instrument: " + drummer.intrument);
var obj = { v1: 12, v2: 23 };
console.log("Value 1: " + obj.v1 + "Value 2: " + obj.v2);
var square = {
    color: "red",
    name: "square",
};
console.log(square.color);
console.log(square.name);
var Printer = /** @class */ (function () {
    function Printer() {
    }
    Printer.prototype.print = function () {
        console.log("Printing...");
    };
    Printer.prototype.scan = function () {
        console.log("Scanning...");
    };
    Printer.prototype.copy = function () {
        console.log("Copying...");
    };
    return Printer;
}());
var printer = new Printer();
printer.print();
printer.scan();
printer.copy();
