// Importacion de librerias
import mongoose from "mongoose"; // Conectar una base de datos
import cors from "cors"; // Dar seguridad a un server 
import dotenv from "dotenv"; // Para llamar lo que hay en env
import express from "express"; // Crear un server local 

dotenv.config();
mongoose.connect(process.env.urlBD)// Conectar con mongodb compass
.then(()=>{

    console.log("Conexcion establecida correctamente UwU.")

})
.catch((error)=>{

    console.log("No se establecio coneccion UnU.", error)

}) // Promesa de verificacion de funciones

const app = express(); // Servidor realizado 
app.use(cors());
app.listen(4000, ()=>{
    console.log("Te escuho correctaemnte!!")
}) // Verificar si funciona el server 
