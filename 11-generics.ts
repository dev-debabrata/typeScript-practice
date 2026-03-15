// Generic Function with Parameter
function displayData<type_parameter>(
  parameter: type_parameter,
): type_parameter {
  return parameter;
}

let result1 = displayData<string>("Debabrata Das");
let result2 = displayData<string>("Hello World");
let result3 = displayData<number>(1234567890);

console.log(result1);
console.log(result2);
console.log(result3);

// Generic Function with Array Return type
let displayResult = <type_parameter>(
  data_item: type_parameter[],
): type_parameter[] => {
  return new Array<type_parameter>().concat(data_item);
};

let numbersArray = displayResult<number>([50, 60, 80, 90]);
let stringArray = displayResult<string>(["Hello world", "Debu"]);

console.log(numbersArray);
console.log(stringArray);

numbersArray.push(100);
stringArray.push("Apple");

console.log(numbersArray);
console.log(stringArray);

// Multiple Generic type Parameter
let displayResult1 = <type_1, type_2>(id: type_1, name: type_2) => {
  return id + " - " + name;
};

let data_1 = displayResult1<number, string>(2000, "Debu");
let data_2 = displayResult1<number, string>(2001, "Hello World");

console.log(data_1);
console.log(data_2);

// Generic with Constraints
function getLength<T extends { length: number }>(arg: T): number {
  return arg.length;
}

console.log(getLength("Hello"));
console.log(getLength([10, 20, 30]));

////////////////// Generic Function //////////////////
// Generic Function with Single type Parameter
function displayPrint<T>(arg: T): T {
  return arg;
}

let result4: string = displayPrint<string>("Debu");
let result5: number = displayPrint<number>(720);
let result6: boolean = displayPrint<boolean>(false);

console.log(result4);
console.log(result5);
console.log(result6);

// Generic Function with Array Parameter
function arrayEl<T>(arr: T[]): void {
  for (const x of arr) {
    console.log(x);
  }
}

let elements: number[] = [101, 102, 103];
arrayEl(elements);

let elements1: string[] = ["Debu", "Nick", "Nikhil"];
arrayEl(elements1);

// Generic Function with Multiple type Parameter
function mergeArrays<T, U>(arr1: T[], arr2: U[]): (T | U)[] {
  return [...arr1, ...arr2];
}

const numbers: number[] = [1, 2, 3, 4];
const words: string[] = ["Hello", "Wold"];
const mergedArray: (number | string)[] = mergeArrays(numbers, words);

console.log(mergedArray);

///////////////// Basic Generic Class ///////////////////
class Box<T> {
  private content: T;

  constructor(content: T) {
    this.content = content;
  }

  getContent(): T {
    return this.content;
  }
}

const numBox = new Box<number>(100);
console.log("Number content: ", numBox.getContent());

const strBox = new Box<string>("Hello, TypeScript Generics!");
console.log("String content: ", strBox.getContent());

// Generic Constraints in Class
class Box1<T extends number> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  double(): number {
    return this.value * 2;
  }
}

const numBox1 = new Box1(10);
console.log("Double value: ", numBox1.double());

// Multiple Type Parameters in Generic Class
class Pair<K, V> {
  private key: K;
  private value: V;

  constructor(key: K, value: V) {
    this.key = key;
    this.value = value;
  }

  getKey(): K {
    return this.key;
  }

  getValue(): V {
    return this.value;
  }
}

const userPair = new Pair<number, string>(1, "Debu");
console.log("Key: ", userPair.getKey(), "Value: ", userPair.getValue());
