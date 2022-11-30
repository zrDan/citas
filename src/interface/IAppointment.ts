import { Appointment } from "../models/Appointment";

interface IAppointment {
  add(item: Appointment);
  cancel();
  modify();
}

export { IAppointment };
