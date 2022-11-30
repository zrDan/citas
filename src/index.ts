// actividad disenar entidades para un proyecto de administracion para gendar citas de consultas
// cada persona puede agendar 1 cita en diferentes horas y dias
// solo 1 persona recibe la informacion
// citas se pueden cancelar/modificar
// penalizacion por cancelar
// citas de unas

import { Appointment } from "./models/Appointment";
import { Appointments } from "./models/Appointments";

let list = new Appointments();

let newAppointment = new Appointment("1", "Saul", "1", "1", new Date());
let newAppointment2 = new Appointment("2", "Erick", "1", "2", new Date());
let newAppointment3 = new Appointment("3", "Mariana", "3", "1", new Date());

list.add(newAppointment);
list.add(newAppointment2);
list.add(newAppointment3);

// let { name } = newAppointment2;
console.log(list.getAppointments());

let { name } = list.getAppointments().find((x) => x.name === "Mariana");
console.log(name);

// let [, , { name }] = list.getAppointments();
// console.log(typeof name);
