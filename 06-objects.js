// const person: { name: string; age: number } = {
//   name: "Debu",
//   age: 25,
// };
var employee = {
    firstName: "Debabrata Das",
    lastName: "Das",
    sayHi: function () {
        return "Hi there!";
    },
};
console.log("Employee Object");
console.log(employee.firstName);
console.log(employee.lastName);
console.log(employee.sayHi());
function greet(person) {
    return "Hello, ".concat(person.name, "!");
}
var user = {
    name: "Debu",
    age: 25,
};
console.log(greet(user));
var myCar = {
    make: "BMW",
    model: "M5",
    year: 2024,
    electric: false,
};
console.log("I drive a ".concat(myCar.year, " ").concat(myCar.make, " ").concat(myCar.model, "."));
var myBook = {
    title: "TypeScript Basics",
    author: {
        name: "Debabrata Das",
        birthYear: 1997,
    },
    pages: 330,
    generation: "5th",
};
console.log("".concat(myBook.title, " written by ").concat(myBook.author.name, " and birthday year is ").concat(myBook.author.birthYear, "."));
function calculateArea(rec) {
    return rec.width * rec.height;
}
var myRectangle = {
    width: 10,
    height: 5,
};
console.log("Area: ".concat(calculateArea(myRectangle)));
