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
