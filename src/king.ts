import { Character } from "./characters";

export class King extends Character {
  yearsRule: number;

  constructor(
    name: string,
    family: string,
    age: number,
    status: boolean,
    yearsRule: number
  ) {
    super(name, family, age, status);
    this.yearsRule = yearsRule;
  }

  speak(): string {
    return "Vais a morir todos";
  }
}
