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
