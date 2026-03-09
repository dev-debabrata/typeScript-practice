// Optional Parameters in Function
function disp_details(id: number, name: string, mail_id?: string) {
  console.log("Id: ", id);
  console.log("Name: ", name);
  console.log("Email Id: ", mail_id);
}

disp_details(111, "Debabrata Das");
disp_details(112, "Soma Das", "Somadas@gmail.com");

// Rest Parameter in Function
function addNumbers(...nums: number[]) {
  let i;
  let sum: number = 0;

  for (i = 0; i < nums.length; i++) {
    sum = sum + nums[i]; // sum += nums[i];
  }
  console.log("Sum of the numbers: ", sum);
}

addNumbers(1, 2, 3);
addNumbers(10, 20, 30, 40);

// Function Constractor
let myFunction = new Function("a", "b", "return a * b");
let x = myFunction(4, 3);
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
let foo = (x: number) => 10 + x;
console.log(foo(100));

// Arrow Function with Parameter
const multiply = (x: number, y: number): number => {
  let res: number = x * y;
  return res;
};

console.log(multiply(5, 6));

// Arrow Function without Parameter
const greet = () => {
  return "Hello World";
};
console.log(greet());

// Arrow Funtion with Multiple Parameter
let sum: number;
const add = (a: number, b: number, c: number) => {
  sum = a + b + c;
  return sum;
};

let result = add(10, 20, 30);
console.log("The Result is: " + result);
