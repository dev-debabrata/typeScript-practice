// Simple Array
let alphas: string[];
alphas = ["1", "2", "3", "4"];
console.log(alphas[0]);
console.log(alphas[1]);

// Single Array
const nums: number[] = [1, 2, 3, 4];
console.log(nums[0]);

// Array Object
const arr_names: number[] = new Array(4);

for (let i = 0; i < arr_names.length; i++) {
  arr_names[i] = i * 2;
  console.log(arr_names[i]);
}

// Array Constructor accepts comma separated values
const names: string[] = new Array("Debu", "Nick", "Nikhil", "Tom");

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// Array Distructuring
let arr: number[] = [12, 13];
let [x, y] = arr;

console.log(x);
console.log(y);

// Array Traversal using for in loop
let j: any;
let nums1: number[] = [1001, 1002, 1003, 1004];

for (j in nums1) {
  console.log(nums1[j]);
}
