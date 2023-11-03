import mongoose from "mongoose";

 export async function EstablecerConexionBD(){
    try {
        await mongoose.connect(process.env.DATABASE)
        console.log("Exito Conectando la Base de datos..")
    } catch (error) {
        console.log("error: "+error)
    }
}