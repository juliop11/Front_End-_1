
class Movie {

    constructor(titulo, anoLanzamiento, nacionalidad, genero, foto) {
        this.title = titulo;
        this.releaseYear = anoLanzamiento
        this.nacionality = nacionalidad;
        this.genre = genero;
        this.photo = foto;
    }
}
let peli1 = new Movie('Terminator', 1984, 'EEUU', 'Accion', "./terminator.jpeg");
let peli2 = new Movie('Titanic', 1997, 'EEUU', 'Drama', "./titanic.jpeg");
let peli3 = new Movie('Star wars', 2015, 'EEUU', 'Accion', "./starWars.jpeg");

let peliculas = [peli1, peli2, peli3];

function pelis() {

    let recogerPelis = "";

    for (let i = 0; i < peliculas.length; i++) {
        // console.log('foto');
        // console.log(peliculas[i].photo);

        recogerPelis += `
            <div class="card" style="width: 18rem;">
                <img src=${peliculas[i].photo} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${peliculas[i].title}</h5>
                        <p class="card-text">${peliculas[i].releaseYear}</p>
                        <p class="card-text">${peliculas[i].genre}</p>
                    </div>
            </div>`
    }
    $("#pelis").append(recogerPelis)
}


function addMovies() {

    let titulo = $("#titulo").val()
    let anoLanzamiento = $("#año").val()
    let nacionalidad = $("#nacionalidad").val()
    let genero = $("#genero").val()
    let foto = $("#foto").val()
   
    let nuevo = new Movie(titulo, anoLanzamiento,nacionalidad,genero,foto);

    peliculas.push(nuevo)
    // console.log(peliculas);
}


