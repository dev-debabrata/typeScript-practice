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
