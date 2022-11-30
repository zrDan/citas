import { Area } from "./Area";
import { Person } from "./Person";

class Employee extends Person {
  private id: String;
  private area: Area;

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
  }
}

export { Employee };
