abstract class Person {
  protected firstName: String;
  protected secondName: String;
  protected firstLastName: String;
  protected secondLastName: String;
  protected Age: Number;
  protected birthDate: Date;

  constructor(
    firstName: String,
    secondName: String,
    firstLastName: String,
    secondLastName: String,
    Age: Number,
    birthDate: Date
  ) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.firstLastName = firstLastName;
    this.secondLastName = secondLastName;
    this.Age = Age;
    this.birthDate = birthDate;
  }
}

export { Person };
