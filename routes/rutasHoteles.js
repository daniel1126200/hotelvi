import express from "express";
import { ControladorReservas } from "../controllers/ControladorReservas.js";
import { ControladorHabitacion } from "../controllers/ControladorHabitacion.js";


let controladorHabitacion = new ControladorHabitacion();
export let rutasAPI = express.Router();
//ACA PONE SUS ENDPOINTS
rutasAPI.post("/api/habitaciones",controladorHabitacion.registrar)
rutasAPI.get("/api/habitaciones",controladorHabitacion.buscarTodas)
rutasAPI.get("/api/habitacion/:id",controladorHabitacion.buscarPorId)
rutasAPI.put("/api/habitaciones/:id",controladorHabitacion.modificar)
rutasAPI.delete("/api/habitaciones/:id",controladorHabitacion.eliminar)

//

let controladorReservas = new ControladorReservas();
//ACA PONE SUS ENDPOINTS
rutasAPI.post("/api/reservas", controladorReservas.registrar); //lleva datos
rutasAPI.get("/api/reservas", controladorReservas.buscarTodas);
rutasAPI.get("/api/reservas/:id", controladorReservas.buscarPorId);
rutasAPI.put("/api/reservas/:id", controladorReservas.modificar); //lleva datos
rutasAPI.delete("/api/reservas/:id", controladorReservas.eliminar);

