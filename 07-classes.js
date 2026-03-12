var Person = /** @class */ (function () {
    function Person(name, age) {
        this.nmae = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Hello! " + this.nmae);
    };
    return Person;
}());
var person = new Person("Debabrata Das", 25);
person.greet();
// Class
var Person1 = /** @class */ (function () {
    function Person1(name, age) {
        this.name = name;
        this.age = age;
    }
    Person1.prototype.introduce = function () {
        return "Hi, my name is ".concat(this.name, " and I am ").concat(this.age, " years old.");
    };
    return Person1;
}());
var person1 = new Person1("Debabrata Das", 25);
console.log(person1.introduce());
