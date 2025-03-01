# amigoSecreto
Challenge amigo secreto Alura
Proposito: desarrollar una aplicación que permita a los usuarios ingresar nombres

de amigos en una lista para luego realizar un sorteo aleatorio y determinar quién 

es el "amigo secreto".


Funcionalidades a crear:

1.Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".

2.Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

3.Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

4.Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.


Pasos iniciales: 

*Se crea un repositorio llamado amigoSecreto

*Se crea un README, este aumentará la información a medida que se avance con el proyecto

 -->Un buen README incluye información sobre la instalación, dependencias, cómo ejecutar el proyecto, y posibles problemas o soluciones.
 
*Se descarga base HTML y CSS y se aperturan en VS.


Pasos del código js:

Explicación línea por línea:
Obtener el valor del input:

js
Copiar
Editar
let input = document.getElementById('amigo');
let texto = input.value.trim();
Se obtiene el campo de texto donde el usuario escribe (input).
Se extrae su valor (value) y se eliminan espacios en blanco al inicio y al final con trim().
Validar que el input no esté vacío:

js
Copiar
Editar
if (texto !== "") {
Se verifica si el usuario escribió algo. Si el campo está vacío, se muestra una alerta y no se agrega nada.
Obtener la lista donde se agregarán los nombres:

js
Copiar
Editar
let lista = document.getElementById('listaAmigos');
Se selecciona la lista <ul> donde se mostrarán los nombres.
Crear un nuevo elemento de lista (li):

js
Copiar
Editar
let nuevoElemento = document.createElement('li');
Se crea un nuevo elemento de tipo li para agregar a la lista.
Asignar el texto ingresado al nuevo elemento:

js
Copiar
Editar
nuevoElemento.textContent = texto;
Se coloca el texto del usuario dentro del nuevo elemento de lista.
Agregar el nuevo elemento a la lista:

js
Copiar
Editar
lista.appendChild(nuevoElemento);
Se añade el nuevo li dentro de la lista <ul>.
Guardar el nombre en el array amigos:

js
Copiar
Editar
amigos.push(texto);
Se agrega el nombre al array amigos para su posible uso posterior.
Limpiar el input y devolverle el foco:

js
Copiar
Editar
input.value = "";
input.focus();
Se borra el contenido del input para que el usuario pueda escribir otro nombre.
Se devuelve el foco al campo de texto para facilitar la escritura de más nombres.
Mostrar alerta si el input está vacío:

js
Copiar
Editar
} else {
    alert("Añade un nombre válido"); 
}
return;
Si el usuario intentó agregar un nombre vacío, se muestra una alerta.
return; finaliza la función.

Definir la función sortearAmigo()

js
Copiar
Editar
function sortearAmigo() {
Se declara una función llamada sortearAmigo(), que no recibe parámetros y se ejecuta cuando el usuario presiona el botón "Sortear amigo".
Verificar si la lista está vacía

js
Copiar
Editar
if (amigos.length === 0) {
Se comprueba si el array amigos está vacío (length === 0).
Si no hay nombres, el sorteo no puede realizarse.
Mostrar una alerta si no hay nombres en la lista

js
Copiar
Editar
    alert("No hay nombres en la lista.");
    return;
Se muestra un mensaje de alerta al usuario.
return; detiene la ejecución de la función para evitar errores.
Generar un número aleatorio dentro del rango de la lista

js
Copiar
Editar
let indiceAleatorio = Math.floor(Math.random() * amigos.length);
Math.random() genera un número decimal entre 0 y 1.
Multiplicamos por amigos.length para obtener un número dentro del rango de la lista.
Math.floor() redondea hacia abajo para obtener un número entero válido como índice del array.
Seleccionar un nombre usando el índice aleatorio

js
Copiar
Editar
let nombreSeleccionado = amigos[indiceAleatorio];
Se accede al array amigos en la posición generada aleatoriamente.
Se guarda el nombre en la variable nombreSeleccionado.
Mostrar el nombre seleccionado en pantalla

js
Copiar
Editar
document.getElementById('resultado').textContent = "Nombre seleccionado: " + nombreSeleccionado;
Se busca el elemento con id="resultado", donde se mostrará el nombre.
Se actualiza su contenido con el texto "Nombre seleccionado: " seguido del nombre elegido.
