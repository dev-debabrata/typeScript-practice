// Access Modifier Public, Private, Protected
class Animal {
  public name: string;
  private age: number;
  protected species: string;
  constructor(name: string, age: number, species: string) {
    this.name = name;
    this.age = age;
    this.species = species;
  }

  public getInfo(): string {
    return `${this.name} is a ${this.species}.`;
  }

  public getAge(): number {
    return this.age;
  }
}

class Dog extends Animal {
  constructor(name: string, age: number) {
    super(name, age, "Dog");
  }

  public getDetails(): string {
    return `${this.name} is a ${this.species} and is ${this.getAge()} years old.`;
  }
}

const myDog = new Dog("Buddy", 3);
console.log(myDog.name);
console.log(myDog.getInfo());
console.log(myDog.getDetails());

// Public Access Modifier
class Animal1 {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public makeSound(): void {
    console.log(`${this.name} makes sound.`);
  }
}

const dog = new Animal1("Dog");
dog.makeSound();

// Private Access Modifier
class Person {
  private ssn: string;

  constructor(ssn: string) {
    this.ssn = ssn;
  }

  public getSSN(): string {
    return this.ssn;
  }
}

const person = new Person("123-45-6789");
console.log(person.getSSN());

// Protected Access Modifier
class User {
  protected age: number;

  constructor(age: number) {
    this.age = age;
  }
}

class Employee extends User {
  public getRetirementAge(): number {
    return this.age + 65;
  }
}

const empRetirement = new Employee(30);
console.log(empRetirement.getRetirementAge());
