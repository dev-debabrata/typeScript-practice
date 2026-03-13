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
