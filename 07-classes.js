var Person = /** @class */ (function () {
    function Person(name, age) {
        this.nmae = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Hello! " + this.nmae);
    };
    return Person;
}());
var person = new Person("Debabrata Das", 25);
person.greet();
// Class
var Person1 = /** @class */ (function () {
    function Person1(name, age) {
        this.name = name;
        this.age = age;
    }
    Person1.prototype.introduce = function () {
        return "Hi, my name is ".concat(this.name, " and I am ").concat(this.age, " years old.");
    };
    return Person1;
}());
var person1 = new Person1("Debabrata Das", 25);
console.log(person1.introduce());
// Class with simple Object
var Person2 = /** @class */ (function () {
    function Person2(name, age) {
        this.name = name;
        this.age = age;
    }
    Person2.prototype.greet = function () {
        console.log("Hello, I'm ".concat(this.name, " and I'm ").concat(this.age, " years old."));
    };
    return Person2;
}());
var person2 = new Person2("Debabrata Das", 25);
console.log(person2.name);
person2.greet();
// Managing a Bank Account
var BankAccount = /** @class */ (function () {
    function BankAccount(accountHolder, balance) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    BankAccount.prototype.getBalance = function () {
        return "The balance for ".concat(this.accountHolder, " is ").concat(this.balance);
    };
    return BankAccount;
}());
var account = new BankAccount("Debabrata Das", 10000);
account.deposit(5000);
console.log(account.getBalance());
