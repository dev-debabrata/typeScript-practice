class Person {
  nmae: string;
  age: number;

  constructor(name: string, age: number) {
    this.nmae = name;
    this.age = age;
  }

  greet() {
    console.log("Hello! " + this.nmae);
  }
}

const person = new Person("Debabrata Das", 25);
person.greet();

// Class
class Person1 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduce(): string {
    return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const person1 = new Person1("Debabrata Das", 25);
console.log(person1.introduce());

// Class with simple Object
class Person2 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const person2 = new Person2("Debabrata Das", 25);
console.log(person2.name);
person2.greet();

// Managing a Bank Account
class BankAccount {
  accountHolder: string;
  balance: number;

  constructor(accountHolder: string, balance: number) {
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  getBalance(): string {
    return `The balance for ${this.accountHolder} is ${this.balance}`;
  }
}

const account = new BankAccount("Debabrata Das", 10000);
account.deposit(5000);
console.log(account.getBalance());
