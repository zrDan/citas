import { Person } from "./Person";

class Client extends Person {
  private id: String;
  private phone: Number;
  private penalized: Boolean;
  private penalizedUntilDate: Date | null;

  constructor(
    id: String,
    firstName: String,
    secondName: String,
    firstLastName: String,
    secondLastName: String,
    Age: Number,
    birthDate: Date
  ) {
    super(firstName, secondName, firstLastName, secondLastName, Age, birthDate);
    this.id = id;
    this.penalized = false;
    this.penalizedUntilDate = null;
  }

  getPenalized(): void {
    this.penalized = true;
  }
}

export { Client };
