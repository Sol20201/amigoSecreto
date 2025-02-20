//array
let amigos = [];

//1.Agregar nombres al oprimir el boton añadir en forma de lista y valida que no esten en blanco
function añadirTexto() {
    let input = document.getElementById('amigo');
    let texto = input.value.trim();

    if (texto !== "") { //2.Validación de dato no vacio
        let lista = document.getElementById('listaAmigos');
        let nuevoElemento = document.createElement('li'); //3.se crea un elementro en lista
                nuevoElemento.textContent = texto;
                lista.appendChild(nuevoElemento);
                amigos.push(texto);
                input.value = "";
                input.focus();
    } else {
        alert("Añade un nombre válido"); 
    } return;
    
}

//4.Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo"

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres en la lista.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let nombreSeleccionado = amigos[indiceAleatorio];

    document.getElementById('resultado').textContent = "Nombre seleccionado: " + nombreSeleccionado;
    
}




