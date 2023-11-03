import { Api } from "./Api.js";
import "dotenv/config";
//console.log(process.env)  // remove this after you've confirmed it is working

let servidor = new Api(); //creando un objeto de la clase Api

//levantamos el servidor
servidor.levantarServidor();
