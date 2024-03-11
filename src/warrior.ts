import { Character } from "./characters";

export class Warrior extends Character {
  weapon: string;

  constructor(
    name: string,
    family: string,
    age: number,
    status: boolean,
    weapon: string
  ) {
    super(name, family, age, status);
    this.weapon = weapon;
  }

  speak(): string {
    return "Primero pego y luego pregunto";
  }
}
