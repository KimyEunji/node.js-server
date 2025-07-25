import { TablaAlumnos } from "../models/alunmos.model.js";

TablaAlumnos.create({

    nombre: "Kim Sujin",
    edad: 20,
    calificacion: 5.4

},
{

    nombre: "Kimy",
    edad: 21,
    calificacion:6.5

}
)

export const test = ()=>{

    console.log("llamando al controlador desde app")

} // Poder llamar al controlador en app