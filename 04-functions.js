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
