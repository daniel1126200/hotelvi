import { ModeloHabitacion } from "../models/ModeloHabitacion.js"
export class ServicioHabitacion{
    constructor(){}
  async buscarTodas(){
    let habitaciones=await ModeloHabitacion.find()
    return habitaciones
  }
  async buscarPorId(id){
    let habitacion=await ModeloHabitacion.findById(id)
    return habitacion
  }
  async modificar(id,datos){
    return await ModeloHabitacion.findByIdAndUpdate(id,datos,{new:true})
  }
  async registrar(datos){
    let habitacionNueva=new ModeloHabitacion(datos)
    return await habitacionNueva.save()
  }
  async eliminar(id){
    return await ModeloHabitacion.findByIdAndRemove(id);
  }
}