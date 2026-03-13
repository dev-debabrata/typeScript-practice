// Readonly Object type Property
class ReadonlyExample {
  readonly name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}

const obj = new ReadonlyExample("Debu");
console.log(obj.getName());
