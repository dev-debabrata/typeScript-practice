// Readonly Object type Property
var ReadonlyExample = /** @class */ (function () {
    function ReadonlyExample(name) {
        this.name = name;
    }
    ReadonlyExample.prototype.getName = function () {
        return this.name;
    };
    return ReadonlyExample;
}());
var obj = new ReadonlyExample("Debu");
console.log(obj.getName());
var p1 = { x: 10, y: 20 };
console.log("Point Coordinate: ".concat(p1.x, ", ").concat(p1.y));
// Readonly Array of numbers
var numbers = [1, 2, 3, 4, 5];
console.log(numbers);
// Readonly Property in a class
var Car = /** @class */ (function () {
    function Car(make, model) {
        this.make = make;
        this.model = model;
    }
    Car.prototype.getCarInfo = function () {
        return "This is a ".concat(this.make, " car and this model is ").concat(this.model);
    };
    return Car;
}());
var myCar = new Car("BMW", "M5");
console.log(myCar.getCarInfo());
