
let faldaVaquera = { tipo: "falda vaquera", precio: 20 };
let vestidoBlanco = { tipo: "vestido blanco", precio: 18 };
let pantalonMarron = { tipo: "pantalon marron", precio: 12 }
let vestidoTunico = { tipo: "vestido tunico", precio: 22 };
let pantalonBlanco = { tipo: "pantalon blanco", precio: 24 };
let camisaRayas = { tipo: "camisa rayas", precio: 16 }
let gorro = { tipo: "gorro", precio: 20 };
let vestido = { tipo: "vestido", precio: 32 }

let carrito = [];

jQuery(() => {
    $("#boton1").on("click", () => {
        carrito.push(faldaVaquera);
        console.log(carrito);
    })
    $("#boton2").on("click", () => {
        carrito.push(vestidoBlanco);
        console.log(carrito);
    })
    $("#boton3").on("click", () => {
        carrito.push(pantalonMarron);
        console.log(carrito);
    })
    $("#boton4").on("click", () => {
        carrito.push(vestidoTunico);
        console.log(carrito);
    })
    $("#boton5").on("click", () => {
        carrito.push(pantalonBlanco);
        console.log(carrito);
    })
    $("#boton6").on("click", () => {
        carrito.push(camisaRayas);
        console.log(carrito);
    })
    $("#boton7").on("click", () => {
        carrito.push(gorro);
        console.log(carrito);
    })
    $("#boton8").on("click", () => {
        carrito.push(vestido);
        console.log(carrito);
    })

    $("#botonCarrito").on('click', () => {

        let suma = 0;

        for (let i = 0; i < carrito.length; i++) {

            $("#modalTotal").append(
                `<ul> <li>${carrito[i].tipo} -- ${carrito[i].precio}</li> </ul>`
            )
            suma += carrito[i].precio
        }
        $("#modalTotal").append(`<p>Total: ${suma}$</p>`)
        console.log(suma);
    })
  
})





