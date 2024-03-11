import { Character } from "./characters";

export class Advisor extends Character {
  lord: string;

  constructor(
    name: string,
    family: string,
    age: number,
    status: boolean,
    lord: string
  ) {
    super(name, family, age, status);
    this.lord = lord;
  }

  speak(): string {
    return "No sé por qué, pero creo que voy a morir pronto";
  }
}
