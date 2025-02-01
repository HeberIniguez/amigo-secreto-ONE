/* El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
    Aquí deberás desarrollar la lógica para resolver el problema.*/

//Variables
let amigos = [];
let lista = document.getElementById('listaAmigos');
let insertarAmigo = document.getElementById('amigo');

function limpiarLista(){
    lista.innerHTML="";
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

    //Limpia la lista, evitando duplicados.
    limpiarLista();
    
    //Crea y agrega los nombres a la lista.
    for(let amigo in amigos){
        let li = document.createElement("li");
        li.textContent = amigos[amigo];
        lista.appendChild(li);
    }

    //Mantiene el foco en el recuadro de texto.
    insertarAmigo.focus();
}