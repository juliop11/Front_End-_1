

function todaInformacion() {
    let url=window.location;
    const params = new URLSearchParams(url.search);
    let nombre = params.get("nombre");
    let origen = params.get("origen");
    let destino = params.get("destino");
    let personas = params.get("personas");
    let entrada = params.get("entrada");
    let salida = params.get("salida")

    let informacion = {
        nombre: nombre,
        origen: origen,
        destino: destino,
        personas: personas,
        entrada: entrada,
        salida: salida
    }

    console.log(informacion);
}

todaInformacion();
