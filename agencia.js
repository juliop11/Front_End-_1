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
    
    let destino = document.getElementById("destino").value;
    destino = destino.toUpperCase();

    if (destino == "CANARIAS" || destino == "MALLORCA" || destino == "GALICIA") {

        todaInformacion();
    }
}
