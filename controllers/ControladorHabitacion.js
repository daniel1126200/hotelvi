import { ServicioHabitacion } from "../services/ServicioHabitacion.js";
export class ControladorHabitacion {
  constructor() {}

  async buscarTodas(request, response) {
    try {
      let servicioHabitacion=new ServicioHabitacion()
      response.status(200).json({
        mensaje: "exito buscando todas las habitaciones",
        datos:await servicioHabitacion.buscarTodas()
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "fallamos" + error,
      });
    }
  }
  async buscarPorId(request, response) {
    try {
      let servicioHabitacion=new ServicioHabitacion()
      let id = request.params.id;
      response.status(200).json({
        mensaje: "exito buscando los datos por id",
        datos:await servicioHabitacion.buscarPorId()
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "fallamos" + error,
      });
    }
  }
  async modificar(request, response) {
    try {
      let servicioHabitacion = new ServicioHabitacion();
      let id = request.params.id;
      let datos = request.body;
      const habitacionModificada = await servicioHabitacion.modificar(id, datos);
  
      if (habitacionModificada) {
        response.status(200).json({
          mensaje: "Éxito modificando la habitación",
          datos: habitacionModificada, 
        });
      } else {
        response.status(404).json({
          mensaje: "No se encontró la habitación con el ID proporcionado", 
        });
      }
    } catch (error) {
      response.status(500).json({
        mensaje: "Error al modificar la habitación: " + error.message,
      });
    }
  }
  
 async registrar(request, response) {
    try {
      let servicioHabitacion=new ServicioHabitacion()
      let datos = request.body;
      await servicioHabitacion.registrar(datos)
      response.status(200).json({
        mensaje: "exito registrando las habitaciones",
        datos:datos
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "fallamos" + error,
      });
    }
  }
 async eliminar(request, response) {
    try {
      let servicioHabitacion=new ServicioHabitacion()
      let id = request.params.id;
      await servicioHabitacion.eliminar(id)
      response.status(200).json({
        mensaje: "exito eliminando las habitaciones",
        datos: "aca los datos",
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "fallamos" + error,
      });
    }
  }
}
