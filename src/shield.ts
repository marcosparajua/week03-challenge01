import { Character } from "./characters";

export class Shield extends Character {
  lord: string;
  servitudeDegree: number;

  constructor(
    name: string,
    family: string,
    age: number,
    status: boolean,
    lord: string,
    servitudeDegree: number
  ) {
    super(name, family, age, status);
    this.lord = lord;
    this.servitudeDegree = servitudeDegree;
  }

  speak(): string {
    return "Soy un loser";
  }
}
