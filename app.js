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




