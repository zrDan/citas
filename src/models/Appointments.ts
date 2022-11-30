import { Appointment } from "./Appointment";
import { IAppointment } from "../interface/IAppointment";

class Appointments implements IAppointment {
  private list: Array<Appointment>;

  constructor() {
    this.list = new Array<Appointment>();
  }

  getAppointments(): Array<Appointment> {
    return this.list;
  }

  add(appointment: Appointment) {
    this.list.push(appointment);
  }

  cancel() {
    //   Cancel Appointment by any situation
  }

  modify() {
    //   Modify appointment
  }
}

export { Appointments };
