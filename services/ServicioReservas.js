import { ModeloReservas } from "../models/ModeloReserva.js";
export class ServicioReservas{
    constructor(){}
  async buscarTodas(){
    let reservas=await ModeloReservas.find()
    return reservas
  }
  async buscarPorId(id){
    let reserva=await ModeloReservas.findById(id)
    return reserva
  }
  async modificar(id,datos){
    return await ModeloReservas.findByIdAndUpdate(id,datos)
  }
  async registrar(datos){
    let reservaNueva=new ModeloReservas(datos)
    return await reservaNueva.save()
  }
  async eliminar(id){
    return await ModeloReservas.findByIdAndRemove(id);
  }
}