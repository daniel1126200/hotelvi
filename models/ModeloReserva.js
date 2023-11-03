import mongoose from "mongoose";

const Schema=mongoose.Schema

const Reserva=new Schema({
    nombre:{
      type:String,
      required:true 
    },
    Apellido: {
        type:String,
        required:true
    },
    Numero:{
        type:Number,
        required:true
    },
    Fecha_inicio :{
        type:Date,
        required:true
    },
    Fecha_Final :{
        type:Date,
        required:true
    },
    Numero_personas :{
        type:Number,
        required:true
    },
    DiferenciaDias: {
        type: Number,
        required: true 
      }
})
export const ModeloReservas=mongoose.model('Reservas',Reserva)