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
