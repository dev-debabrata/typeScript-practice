var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Generic Function with Parameter
function displayData(parameter) {
    return parameter;
}
var result1 = displayData("Debabrata Das");
var result2 = displayData("Hello World");
var result3 = displayData(1234567890);
console.log(result1);
console.log(result2);
console.log(result3);
// Generic Function with Array Return type
var displayResult = function (data_item) {
    return new Array().concat(data_item);
};
var numbersArray = displayResult([50, 60, 80, 90]);
var stringArray = displayResult(["Hello world", "Debu"]);
console.log(numbersArray);
console.log(stringArray);
numbersArray.push(100);
stringArray.push("Apple");
console.log(numbersArray);
console.log(stringArray);
// Multiple Generic type Parameter
var displayResult1 = function (id, name) {
    return id + " - " + name;
};
var data_1 = displayResult1(2000, "Debu");
var data_2 = displayResult1(2001, "Hello World");
console.log(data_1);
console.log(data_2);
// Generic with Constraints
function getLength(arg) {
    return arg.length;
}
console.log(getLength("Hello"));
console.log(getLength([10, 20, 30]));
// Generic Function with Single type Parameter
function displayPrint(arg) {
    return arg;
}
var result4 = displayPrint("Debu");
var result5 = displayPrint(720);
var result6 = displayPrint(false);
console.log(result4);
console.log(result5);
console.log(result6);
// Generic Function with Array Parameter
function arrayEl(arr) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var x = arr_1[_i];
        console.log(x);
    }
}
var elements = [101, 102, 103];
arrayEl(elements);
var elements1 = ["Debu", "Nick", "Nikhil"];
arrayEl(elements1);
// Generic Function with Multiple type Parameter
function mergeArrays(arr1, arr2) {
    return __spreadArray(__spreadArray([], arr1, true), arr2, true);
}
var numbers = [1, 2, 3, 4];
var words = ["Hello", "Wold"];
var mergedArray = mergeArrays(numbers, words);
console.log(mergedArray);
