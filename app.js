// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let valorEntrada = document.getElementById("amigo");

    if (valorEntrada.value.trim().length == 0) {
         alert("Por favor, Ingrese un nombre");
         return false;
    } else {
         amigos.push(valorEntrada.value.trim());
         console.log(amigos);
         valorEntrada.value = "";
    }
}

function actualizarLista() {
    let listaNombres = document.getElementById("listaAmigos");
    listaNombres.innerHTML = "";

    for(let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        listaNombres.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length != 0) {
        let indiceAleatorio = amigos[Math.floor(Math.random() * amigos.length)];
        let nombreGanador = document.getElementById("resultado");
        nombreGanador.innerHTML = indiceAleatorio;
        document.getElementById("listaAmigos").innerHTML = "";
    }
}