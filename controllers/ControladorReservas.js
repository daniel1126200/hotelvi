import { ServicioReservas } from "../services/ServicioReservas.js";

export class ControladorReservas {
  constructor() {}

 async buscarTodas(request, response) {
    try {
      let servicioReservas=new ServicioReservas()
      response.status(200).json({
        mensaje: "exito buscando todas las reservas",
        datos:await servicioReservas.buscarTodas() 
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "fallamos" + error,
      });
    }
  }
async  buscarPorId(request, response) {
    try {
      let servicioReservas=new ServicioReservas()
      let id = request.params.id;
      response.status(200).json({
        mensaje: "exito buscando las reservas por id",
        datos:await servicioReservas.buscarPorId()
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "fallamos" + error,
      });
    }
  }
async  modificar(request, response) {
    try {
      let servicioReservas=new ServicioReservas()
      let id = request.params.id;
      let datos = request.body;
      await servicioReservas.modificar(id,datos)
      response.status(200).json({
        mensaje: "exito modificando las reservas",
        datos: "aca los datos",
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "fallamos" + error,
      });
    }
  }
  async registrar(request, response) {
    try {
      let servicioReservas = new ServicioReservas();
      let datos = request.body;
      const fechaInicio = new Date(datos.Fecha_inicio);
      const fechaFinal = new Date(datos.Fecha_Final);
      const diferenciaDias = Math.ceil((fechaFinal - fechaInicio) / (1000 * 60 * 60 * 24)); 
      datos.DiferenciaDias = diferenciaDias;
      await servicioReservas.registrar(datos);
  
      response.status(200).json({
        mensaje: "Éxito registrando la reserva",
        datos:datos
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "Fallamos: " + error,
      });
    }
  }
  
 async eliminar(request, response) {
    try {
      let servicioReservas=new ServicioReservas()
      let id = request.params.id;
      await servicioReservas.eliminar(id)
      response.status(200).json({
        mensaje: "exito eliminando las reservas",
        datos:id
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "fallamos" + error,
      });
    }
  }
}
