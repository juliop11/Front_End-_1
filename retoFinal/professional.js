class Professional {

    constructor(nombre, anyo, numerosOscar, foto2) {
        this.name = nombre;
        this.age = anyo;
        this.oscarsNumber = numerosOscar;
        this.photo2 = foto2;
    }
}
let profesional1 = new Professional("Leonardo diCaprio", 1974, 5, "leonardoDiCaprio.jpeg");
let profesional2 = new Professional("Arnold Schwarzenegger", 1947, 1, "arnold.jpeg");
let profesional3 = new Professional("Harrison Ford", 1942, 4, "harrisonFord.jpeg");

let profesionales = [profesional1, profesional2, profesional3];

function profesional() {

    let recogerProfesional = "";

    for (let i = 0; i < profesionales.length; i++) {
        // console.log('foto');
        // console.log(profesionales[i].photo2);

        recogerProfesional += `
            <div class="card" style="width: 18rem;">
                <img src=${profesionales[i].photo2} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${profesionales[i].name}</h5>
                        <p class="card-text">Año nacimiento: ${profesionales[i].age}</p>
                        <p class="card-text">Numeros de oscar: ${profesionales[i].oscarsNumber}</p>
                    </div>
            </div>`
    }
    $("#profesional").append(recogerProfesional)
}


function addProfesional() {

    let nombre = $("#nombre").val()
    let anyo = $("#año2").val()
    let numerosOscar = $("#numerosOscar").val()
    let foto2 = $("#foto2").val()

    let nuevo2 = new Professional(nombre, anyo, numerosOscar, foto2);

    profesionales.push(nuevo2)
    // console.log(profesionales);
}
