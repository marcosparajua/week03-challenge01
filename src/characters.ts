export class Character {
  name: string;
  family: string;
  age: number;
  status: boolean;

  constructor(name: string, family: string, age: number, status: boolean) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.status = status;
  }

  speak(): string {
    return "";
  }
}
