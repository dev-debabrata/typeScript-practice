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
