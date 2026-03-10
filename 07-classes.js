var Person = /** @class */ (function () {
    function Person(name, age) {
        this.nmae = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Hello " + this.nmae);
    };
    return Person;
}());
var person = new Person("Debabrata Das", 25);
person.greet();
