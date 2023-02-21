
let datos = [];

function todaInformacion() {

    let nombre = document.getElementById("nombre").value;
    let origen = document.getElementById("origen").value;
    let destino = document.getElementById("destino").value;
    let personas = document.getElementById("personas").value;
    let entrada = document.getElementById("entrada").value;
    let salida = document.getElementById("salida").value;

    let informacion = {
        nombre: nombre,
        origen: origen,
        destino: destino,
        personas: personas,
        entrada: entrada,
        salida: salida
    }

    datos.push(informacion);
    console.log(datos);

}



function mostrarSolicitudes() {

    let personas = [];

    for (let i = 0; i < datos.length; i++) {

        if (datos[i].destino.toUpperCase() == "CANARIAS" || datos[i].destino.toUpperCase() == "MALLORCA" || datos[i].destino.toUpperCase() == "GALICIA") {

          console.log(datos[i]);

            personas += `<ul> 
                <li>Nombre: ${datos[i].nombre}</li>
                <li>Origen: ${datos[i].origen}</li>
                <li>Destino: ${datos[i].destino}</li>
                <li>Personas: ${datos[i].personas}</li>
                <li>Entrada: ${datos[i].entrada}</li>
                <li>Salida: ${datos[i].salida}</li>
           </ul>`

        }     
    }

    document.getElementById("inner").innerHTML =personas;
}

