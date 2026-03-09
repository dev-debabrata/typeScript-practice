// Optional Parameters in Function
function disp_details(id, name, mail_id) {
    console.log("Id: ", id);
    console.log("Name: ", name);
    console.log("Email Id: ", mail_id);
}
disp_details(111, "Debabrata Das");
disp_details(112, "Soma Das", "Somadas@gmail.com");
// Rest Parameter in Function
function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i]; // sum += nums[i];
    }
    console.log("Sum of the numbers: ", sum);
}
addNumbers(1, 2, 3);
addNumbers(10, 20, 30, 40);
// Function Constractor
var myFunction = new Function("a", "b", "return a * b");
var x = myFunction(4, 3);
console.log(x);
// Recursion & TypeScript Functions
// function factorial(number) {
//   if (number <= 0) {
//     return 1;
//   } else {
//     return number * factorial(number - 1);
//   }
// }
// console.log(factorial(6));
// Lambda Function
var foo = function (x) { return 10 + x; };
console.log(foo(100));
// Arrow Function with Parameter
var multiply = function (x, y) {
    var res = x * y;
    return res;
};
console.log(multiply(5, 6));
// Arrow Function without Parameter
var greet = function () {
    return "Hello World";
};
console.log(greet());
// Arrow Funtion with Multiple Parameter
var sum;
var add = function (a, b, c) {
    sum = a + b + c;
    return sum;
};
var result = add(10, 20, 30);
console.log("The Result is: " + result);
