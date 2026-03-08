// Simple Array
var alphas;
alphas = ["1", "2", "3", "4"];
console.log(alphas[0]);
console.log(alphas[1]);
// Single Array
var nums = [1, 2, 3, 4];
console.log(nums[0]);
// Array Object
var arr_names = new Array(4);
for (var i = 0; i < arr_names.length; i++) {
    arr_names[i] = i * 2;
    console.log(arr_names[i]);
}
// Array Constructor accepts comma separated values
var names = new Array("Debu", "Nick", "Nikhil", "Tom");
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// Array Distructuring
var arr = [12, 13];
var x = arr[0], y = arr[1];
console.log(x);
console.log(y);
// Array Traversal using for in loop
var j;
var nums1 = [1001, 1002, 1003, 1004];
for (j in nums1) {
    console.log(nums1[j]);
}
