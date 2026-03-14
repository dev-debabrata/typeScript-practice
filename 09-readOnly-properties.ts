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

// Immutable Point coordinates
interface Point {
  readonly x: number;
  readonly y: number;
}

const p1: Point = { x: 10, y: 20 };
console.log(`Point Coordinate: ${p1.x}, ${p1.y}`);

// Readonly Array of numbers
const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];
console.log(numbers);

// Readonly Property in a class
class Car {
  readonly make: string;
  readonly model: string;

  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }

  getCarInfo(): string {
    return `This is a ${this.make} car and this model is ${this.model}`;
  }
}

const myCar = new Car("BMW", "M5");
console.log(myCar.getCarInfo());
