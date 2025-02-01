/* El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
    Aquí deberás desarrollar la lógica para resolver el problema.*/

//Variables
let amigos = [];
let lista = document.getElementById('listaAmigos');
let listaResultado = document.getElementById('resultado');
let insertarAmigo = document.getElementById('amigo');

function limpiarLista(){
    lista.innerHTML="";
    listaResultado.innerHTML="";
}

//Funcion para agregar amigos a la lista.
function agregarAmigo(){

    //Comprueba si el campo esta vacio.
    if(insertarAmigo.value != ""){
        amigos.push(insertarAmigo.value);
        insertarAmigo.value = "";
    }else{
        alert("Por favor ingrese un nombre, no puede estar vacio.");
    }

    limpiarLista();
    
    //Agrega los nombres a la lista.
    for(let amigo in amigos){
        let li = document.createElement("li");
        li.textContent = amigos[amigo];
        lista.appendChild(li);
    }

    //Mantiene el foco en el recuadro de texto.
    insertarAmigo.focus();
}

//Selecciona un nombre aleatorio y lo muestra en la lista.
function sortearAmigo(){
    let li = document.createElement("li");
    limpiarLista();
    li.textContent = amigos[Math.floor(Math.random()*amigos.length)];
    listaResultado.appendChild(li);
}