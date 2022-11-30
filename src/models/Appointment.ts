class Appointment {
  private id: string;
  public name: string;
  private patientId: string;
  private employeeId: string;
  private date: Date;

  constructor(
    id: string,
    name: string,
    patientId: string,
    employee: string,
    date: Date
  ) {
    this.id = id;
    this.name = name;
    this.patientId = patientId;
    this.employeeId = employee;
    this.date = date;
  }
}

export { Appointment };
