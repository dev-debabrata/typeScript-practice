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
